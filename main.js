function reload (e) {
    console.log(e.target)
    var animationClass = e.target.nextElementSibling.nextElementSibling.classList[0]
    e.target.nextElementSibling.nextElementSibling.classList.remove(animationClass)
    setTimeout(function () {
        e.target.nextElementSibling.nextElementSibling.classList.add(animationClass)
    }, 100)
}
function copy (e) {
    var str = e.target.previousElementSibling.innerText
    e.target.innerText = 'Copied!'
    if(e.target.previousElementSibling.classList.contains('cdn')) {
        setTimeout(function () {e.target.innerText = 'Copy'}, 1000)

    } else {
        setTimeout(function () {e.target.innerText = 'Copy this class!'}, 1000)
    }
    copyToClipboard(str)
}
function copyToClipboard (str) {
    var el = document.createElement('textarea')
    el.value = str
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}
function changeDuration (e, speed) {
    var parent = e.target.parentNode
    var children = parent.children
    for(var i = 0; i < children.length; i ++) {
        console.log(children[i].classList)

        children[i].classList.remove('active')
    }  
    e.target.classList.add('active') 
    var ele = document.querySelector('.displayer')
    var classes = ['actual', 'slower', 'slowest']
    for(var i = 0; i < classes.length; i++) {
        ele.classList.remove(classes[i])
    }
    ele.classList.add(speed)
}

function scroller (id) {
    console.log(id)
    let offset = document.getElementById(id).offsetTop
    window.scrollTo({top: offset, behavior: 'smooth'})
 }