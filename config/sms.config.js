module.exports = {
    URL: "http://alerts.net.in/httpapi/smsapi?",
    USERNAME: "orgwaretech",
    PASSWORD: "org@123"    
  };
  

  /************************************************************************* 

  URL: alerts.net.in
  Username: orgwaretech
  Password: org@123

SMS Api ( Using HTTP )
SMS Api allows you to integrate our sms service to your own web based / stand alone applications.

http://alerts.net.in/httpapi/smsapi?uname={Username}&password={Password}&sender={Sender id}&receiver={Destination numbers}&group={group Ids}&route={Route id}&msgtype={ Message type}&sms={SMS content}

Api Description
uname : Username of your account
password : Password of your account
sender : Sender id ( Origin )
receiver : Destination numbers ( Comma separated ) eg : 99XXXXXXXX,98XXXXXXXX
group : Group ids of created groups ( Comma separated ) eg : 12,34,56
route : Route you want to send SMS ( Promotional API - PA , Transaction API - TA , Senderid API - SA , International - I )
msgtype : Message type ( Text - 1 , Flash - 2 , Unicode - 3 )
sms : SMS content ( Url encoded )
All special character included content should be in urlencode format.

Error Codes
101 : Invalid username/password
102 : Sender not exist
103 : Receiver not exist
104 : Invalid route (PA,TA,SA & I)
105 : Invalid message type
106 : SMS content not exist
107 : Transaction template mismatch
108 : Low credits in the specified route
109 : Account is not eligible for API
110 : Promotional route will be working from 9am to 9pm only
A numeric value other than these error codes is the unique message id for the sent slot. keep this message id for delivery report.

*************************************************************************/