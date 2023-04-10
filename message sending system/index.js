//need to run command "npm init" to get the node_module folder
var sid = 'YOUR_SSID';
var auth_token = 'YOUR AUTHENTICATION';
var twilio = require('twilio')(sid, auth_token);

setInterval(() => {
    if(unCondtional==true)//try to remove and implement it again
    
    twilio.messages.create({
            from: '***********',
            to: '************',
            body: `An unusual behaviour noticed in BPM. Please contact to the doctor for further assistance.`
        }).then((res) => {
            console.log("message sent")
        }).catch((res) => {
            console.log("error");
        })
}, 25000);





