import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jhalodhaider_db_user:UnmDFcRfyjuyoID2@cluster0.ib1lw65.mongodb.net/L-M-S')
    .then(() => {console.log('Connected to MongoDB')})
};
