!function () {
    var view = document.querySelector('section.message')
    var model = {
        init: function () {
            var APP_ID = 'lVd3kDdlL79TmArs9hnvudYP-gzGzoHsz';
            var APP_KEY = 'Hpan2b16tVNcSfr4pWweNmqB';
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        fetch: function () {
            var query = new AV.Query('message');
            return query.find()
        },
        save: function (name, content) {
            var message = AV.Object.extend('message');
            var message = new message();
            return message.save({
                content: content,
                name: name
            })
        }
    }
    var controller = {
        view: null,
        model: null,
        messageList: null,
        init: function (view, model) {
            this.view = view
            this.model = model

            this.model.init()
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.loadMessages()
            this.bindEvents()
        },

        loadMessages: function () {
            this.model.fetch().then(
                (messages) => {
                    let array = messages.map((item) => item.attributes)
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}：${item.content}`
                        this.messageList.appendChild(li)
                        console.log('meiwenti')
                    })
                })
        },
        bindEvents: function () {
            this.form.addEventListener('submit', function (e) {
                e.preventDefault()
                controller.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name, content).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}：${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
                console.log('1')
            })
        }
    }
    controller.init(view, model)
}.call()



