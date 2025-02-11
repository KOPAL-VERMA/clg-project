import mongoose from "mongoose"
const dbConnect = async () => {
    try {
        const mongoDbConnection = await mongoose
            .connect(`${process.env.CONNECTION_STRING}`);
        console.log(`Database connected : ${mongoDbConnection.connection.host}`)
        mongoDbConnection.connection.close();
    } catch (error) {
        console.log(`Database connection failed ${error}`);
    }
};

export default dbConnect