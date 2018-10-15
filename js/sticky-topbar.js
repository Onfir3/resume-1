setTimeout(function () {
    siteWelcome.classList.remove('active')
}, 500)




window.addEventListener('scroll',function(xxx){
    if (window.scrollY > 0) {
        TopNavBar.classList.add('sticky')
    } else {
        TopNavBar.classList.remove('sticky')
    }
})



