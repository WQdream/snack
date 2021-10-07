(function (){
    console.log('start...');
    var itemTimer,timer,IntervalTimer;
    var play = document.getElementsByClassName('mejs__button mejs__playpause-button mejs__play')[0].children[0];
    var video = document.getElementsByClassName('video-current-time')[0];
    var close = document.getElementsByClassName('close-window')[0];
    var bar = document.getElementsByClassName('video-duration unfullscreen')[0];
    var items = document.getElementById('res-list-box');
    function barClickHandler(){
        play.click();
        IntervalTimer = setInterval(() => {
            if(video.style.width === '0%'){
                clearInterval(IntervalTimer);
                close.click();
            }
        }, 2000);

    }
    function itemClickHandler(){
         itemTimer = setTimeout(function (){

            play.click();
              timer = setTimeout(() => {
                video.style.width = '100%'
                clearTimeout(timer);
            }, 500);
            clearTimeout(itemTimer);
        },1500);

    }
    bar.addEventListener('click',barClickHandler,false);
    items.addEventListener('click',itemClickHandler,true);
    close.addEventListener('click',function (){
        clearTimeout(itemTimer);
        clearTimeout(timer);
        clearInterval(IntervalTimer);
    });
})();
