let watches = {
    black: 'https://i.imgur.com/iOeUBV7.png',
    red: 'https://i.imgur.com/PTgQlim.png',
    blue: 'https://i.imgur.com/Mplj1YR.png',
    purple: 'https://i.imgur.com/xSIK4M8.png',
    pink: 'https://i.imgur.com/Zygu7I3.png'
}
let watch = document.getElementById('Watch');
let colorsWrapper = document.getElementById('colorsWrapper');
let btnTime = document.getElementById('btnTime');
let btnHeart = document.getElementById('btnHeart');
let watchTime = document.getElementById('timeWatch');
let heartDiv = document.getElementById('heartDiv');
let buyNow = document.getElementById('buyNow');

btnTime.addEventListener('click', function() {
    if (heartDiv.classList.contains('show'))
    {
        heartDiv.classList.add('hide');
    }
    watchTime.classList.add('show');
    watchTime.classList.remove('hide')
})

btnHeart.addEventListener('click', function() {
    if (watchTime.classList.contains('show'))
    {
        watchTime.classList.add('hide');
    }
    heartDiv.classList.add('show');
    heartDiv.classList.remove('hide')
})

buyNow.addEventListener('click', function() {
    alert('Out Of Stock!')
})

setInterval(function(){
    if(watchTime.classList.contains('show'))
        {
            watchTime.innerHTML = new Date().toTimeString().split(' ')[0];
        }
}, 1000)

colorsWrapper.addEventListener('click', function(e) {
    if (e.target.id == 'colorsWrapper')
    {
        return;
    }
    else
    {
        let color = document.getElementById(e.target.id);
        color = color.id;
        watch.src = watches[color];
    }
    
})

btnTime.addEventListener('click', function() {

})