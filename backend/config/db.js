import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mmongodb+srv://AdarshTiwari:21029001@food-del.4zmkp.mongodb.net/Food-Services"
    )
    .then(() => console.log("Database connected"));
};
