module.exports = function (context, req) 
{
    var DocumentDBClient = require('documentdb').DocumentClient
    , config = require('./config')
    , host = config.host
    , masterKey = config.authKey
    , query = `SELECT TOP 1 c.machine, c.machinestatus FROM c WHERE c.machine = "${req.body.machine}" ORDER BY c.eventprocessedutctime DESC`
    , databaseId = config.databaseId
    , databaseUrl = `dbs/${config.databaseId}`
    , collectionUrl = `${databaseUrl}/colls/${config.collectionId}`;

    // Establish a new instance of the DocumentDBClient to be used throughout this demo
    var client = new DocumentDBClient(host, { masterKey: masterKey });
    var results = client.queryDocuments(collectionUrl, query).toArray((err, results) => 
    {
        if (err) context.log(err)
        else {
                var r = results[0];
                context.res = { status: 200, body: r };
                context.done();
             }
    });
}
