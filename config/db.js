import mongoose from "mongoose";

const connectDb = async () => {
    try{
        const mongoHost = process.env.MONGO_HOST || 'mongo';
        const mongoUser = process.env.MONGO_INITDB_ROOT_USERNAME;
        const mongoPassword = process.env.MONGO_INITDB_ROOT_PASSWORD;
        const mongoDb = process.env.MONGO_INITDB_DATABASE;
        const mongoPort = process.env.MONGO_PORT || 27017;
        const connection = await mongoose.connect(`mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDb}?authSource=admin&directConnection=true`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        );
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB conected en: ${url}`);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

export default connectDb;