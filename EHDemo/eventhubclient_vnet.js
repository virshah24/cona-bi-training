const { EventHubClient } = require('azure-event-hubs');

module.exports={
 
   
    /*
    *  Send transaction via event hub
    */
   sendTransaction: function (message) {
       
               console.log("Message: " + message);
               /*
               * Try to add this transaction into Event-Hub 
               */
              
              const client = EventHubClient.createFromConnectionString("Endpoint=sb:/xxxx.servicebus.windows.net/;SharedAccessKeyName=rootsomething;SharedAccessKey=xxxxxxxxxxxxxxxxxxx=;EntityPath=conacosmostest","conacosmostest");
               async function test() {
                  
                  
                   const eventData = { body:message, partitionKey: "pk12345"};
                   const delivery = await client.send(eventData);
                   console.log("Message sent successfully to the Event-Hub..");
               }

                test().catch((err) => {
                   console.log(err);
               });
               
           
   },




};



