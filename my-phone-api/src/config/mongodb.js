// trandanhkiet160903
//kiet14137

import { MongoClient, ServerApiVersion } from 'mongodb';
import { env } from '~/config/environment'


//Instance , lay database
let phoneApiInstance = null;

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

export const CONNECT_DB = async () =>{
  //Call connection to mongoDB Atlas
  await mongoClientInstance.connect();

  phoneApiInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

export const GET_DB = () => {
  if(!phoneApiInstance) throw new Error('Must connect to Database first!')
    return phoneApiInstance
}
export const CLOSE_DB = async () => {
  console.log('database close');
  await mongoClientInstance.close()
}

