var APP_ID = 'lVd3kDdlL79TmArs9hnvudYP-gzGzoHsz';
var APP_KEY = 'Hpan2b16tVNcSfr4pWweNmqB';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query('message');
query.find()
    .then(
        function (messages) {
            let array = messages.map((item) => item.attributes)
            console.log(array)
            array.forEach((item) => {
                let li = document.createElement('li')
                li.innerText = item.content
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
            })
        })

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    var message = AV.Object.extend('message');
    var message = new message();
    message.save({
        content: content
    }).then(function (object) {
        window.location.reload()
    })
})


