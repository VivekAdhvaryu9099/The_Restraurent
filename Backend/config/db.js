import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,     // avoids deprecation warnings
      useUnifiedTopology: true,  // modern connection engine
    });
    console.log("✅ Successfully Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // stop the app if DB fails
  }
};
