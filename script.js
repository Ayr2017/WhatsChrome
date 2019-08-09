window.onload = function() {
    // var url = window.location.href;
    // var group = document.querySelectorAll('[title = "Туганнар"]');
    // console.log(group);
    // var span = document.querySelectorAll("_315-i");
    // console.log(`Span _315-i ` + span[0].innerHTML);
    // console.log(`url is ${url}`);
    sleep(3000);
}

function sleep(time) {
    setTimeout(function() {
        var group = document.querySelectorAll('[title = "Туганнар"]');
        var group1 = document.querySelectorAll('._2UaNq');
        console.log(group);
        var span = document.querySelectorAll("_315-i");
        eventFire(group1[0], 'click');
    }, time)
}

function eventFire(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
        console.log('click!')
    }
}