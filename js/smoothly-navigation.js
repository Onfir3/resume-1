let aTags = document.querySelectorAll('nav.menu > ul > li > a')
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()//阻止默认动作
        let a = x.currentTarget //获取a标签
        let herf = a.getAttribute('href') //获取a标签上的herf
        let element = document.querySelector(herf)//根据herf获取到元素
        let top = element.offsetTop//根据element.offsetTop得到元素到窗口顶端的距离
        //let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop //以上四句简写.
        //window.scrollTo(0, top - 80)//让window滑动到X方向不变，Y方向top-80的距离

        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop //路程
        var coords = { y: currentTop }; //起始位置
        var t = Math.abs((s / 100) * 300) //时间
        if (t > 500) { t = 500 }
        var tween = new TWEEN.Tween(coords) //起始位置
            .to({ y: targetTop }, t) //结束位置和时间
            .easing(TWEEN.Easing.Quadratic.InOut) //缓动类型
            .onUpdate(function () {
                //coords.y 已经变了
                window.scrollTo(0, coords.y) // 如何更新界面
            })
            .start(); //开始缓动
    }
}