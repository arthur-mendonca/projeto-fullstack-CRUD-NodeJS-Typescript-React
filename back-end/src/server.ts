import app from "./app";
import { AppDataSource } from "./data-source";

(async () => {
  try {
    await AppDataSource.initialize();
    app.listen(3000, () => console.log("server running on port 3000"));
  } catch (err) {
    console.log("Error during Data Source initialization", err);
  }
})();
