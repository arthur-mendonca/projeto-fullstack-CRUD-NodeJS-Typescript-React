import path from "path";
import puppeteer from "puppeteer";
import ejs from "ejs";
import { Repository } from "typeorm";
import { Client } from "../../entities/clients.entity";
import { AppDataSource } from "../../data-source";
import fs from "fs";

const listClientsPDFService = async (): Promise<Buffer> => {
  const browser = await puppeteer.launch({
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  });
  const page = await browser.newPage();

  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const clients: Client[] = await clientRepo.find({
    relations: { contacts: true },
  });

  clients.map((client) => {
    client.contacts.length;
  });

  const templatePath = path.join(__dirname, "./clients.ejs");
  const template = fs.readFileSync(templatePath, "utf-8");
  const htmlContent = ejs.render(template, { clients });
  const pdfPath = path.join(__dirname, "../../../clients.pdf");

  await page.setContent(htmlContent);

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    path: pdfPath,
  });

  await browser.close();

  return pdf;
};

export { listClientsPDFService };
