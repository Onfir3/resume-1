var APP_ID = 'lVd3kDdlL79TmArs9hnvudYP-gzGzoHsz';
var APP_KEY = 'Hpan2b16tVNcSfr4pWweNmqB';
console.log('1')
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
console.log('2')

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit',function(e){
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    var message = AV.Object.extend('message');
    var message = new message();
    message.save({
    content: content
    }).then(function(object) {
    alert('LeanCloud Rocks!');
})
})


