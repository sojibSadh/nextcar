const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.NEXT_MONGOBD_URI;
const dbname = process.env.NEXT_MONGOBD_NM;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


export const dbConnect = async (collection) => {

    try {
        const db = client.db(dbname);
        return db.collection(collection);

    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
}
