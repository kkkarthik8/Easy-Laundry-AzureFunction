var config = {}

config.host = process.env.HOST || "https://yourdocumentdb.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "your_documentdb_authkey";
config.databaseId = "your_database_id";
config.collectionId = "your_collection_id";

module.exports = config;
