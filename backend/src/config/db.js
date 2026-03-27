import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://nikkx01:Nikhil%408102@cluster0.e2ynezo.mongodb.net/?appName=Cluster0&retryWrites=true&w=majority")

        console.log("MANGODB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.error("Error connecting to MANGODB:", error);
        process.exit(1); 
    }
}