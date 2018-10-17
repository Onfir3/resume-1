var APP_ID = 'lVd3kDdlL79TmArs9hnvudYP-gzGzoHsz';
var APP_KEY = 'Hpan2b16tVNcSfr4pWweNmqB';
console.log('1')
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
console.log('2')


var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})