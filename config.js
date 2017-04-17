var config = {}

config.host = process.env.HOST || "https://sldocumentdb.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "aa2L2wdfqtjzx2u2DjElUBQKyhHMDfh9I5yOwqx4oI9ig9j09kaH0tZrWWLhByyAQ1O5TrG61tAGJkH9MFVWQA==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;