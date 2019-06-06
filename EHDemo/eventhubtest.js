var broker   = require('./eventhubclient_vnet');
var timeStamp = new Date().toISOString();
var data = {
    "bottlerId":"all",
    "VSANL": " ",
    "ABFER": "2",
    "TNDR_TEXT": " ",
    "LAUFK": "4",
    "sourceName": "ECC",
    "STABF": " ",
    "_rid": "KT0XAIZjKMJPXgAAAAAAAA==",
    "_self": "dbs/KT0XAA==/colls/KT0XAIZjKMI=/docs/KT0XAIZjKMJPXgAAAAAAAA==/",
    "_etag": "\"1900d7c6-0000-0100-0000-5ce8616e0000\"",
    "_attachments": "attachments/",
    "_ts": 1558733166, 
	"test_ts": "Date is " + timeStamp  };
//let message = JSON.parse(data);
broker.sendTransaction(data);

