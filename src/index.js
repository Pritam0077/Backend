import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

// in async method always write then and catch
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed", err);
  });

/*
const app = express()(
  // always connect database in async await and in try catch
  async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error", (error) => {
        console.log("ERR", error);
        throw error;
      });

      app.listen(process.env.PORT, () => {
        console.log(`process is listening on ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("ERROR", error);
    }
  }
)();
*/
