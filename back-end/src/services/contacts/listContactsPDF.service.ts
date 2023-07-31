import path from "path";
import puppeteer from "puppeteer";
import ejs from "ejs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import fs from "fs";
import { Contact } from "../../entities/contacts.entity";

const listContactsPDFService = async (): Promise<Buffer> => {
  const browser = await puppeteer.launch({
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  });
  const page = await browser.newPage();

  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contacts: Contact[] = await contactRepo.find({
    relations: { client: true },
  });

  console.log(contacts.map((contact) => contact.client.name));

  const templatePath = path.join(__dirname, "./contacts.ejs");
  const template = fs.readFileSync(templatePath, "utf-8");
  const htmlContent = ejs.render(template, { contacts });

  await page.setContent(htmlContent);

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  return pdf;
};

export { listContactsPDFService };
