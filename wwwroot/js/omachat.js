"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chat").build();//SSL Tänne se reitin urlin

//Disable send button until connection is established
document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (user, message) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    //Yritin vielä erikseen korostaa user:ia, jäi kesken:
    //var encodedMsg = "&lt;b&gt;" + user + "&lt; /b&gt;: " + msg;
    //var encodedMsg = user + ": " + msg;
    //var writerspan = document.createElement("span");
    //writerspan.classList.add("font-weight-bold");
    var encodedMsg =  user+ ": " + msg;
    
    var li = document.createElement("li");
    
    //li.appendChild("writerspan:span");
    //writerspan.classList.add("font-weight-bold");
    //writerspan.textContent = user;

    li.textContent = encodedMsg;
    
    var writer = document.getElementById("userInput").value;
    
    if (user == writer) {
        //<li class="alert-dark">TEST</li> kokeilin index.htm sivulla kirjoittaa, niin tuli esim tuommonen
        li.classList.add("alert-dark");
    }
    
    document.getElementById("messagesList").appendChild(li);
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value; //tämän pitäsi toimia tällaisenaan, vaikka vaihdoin text textarea:ksi
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});
