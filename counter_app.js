let increase = document.getElementById('btn1');
let reset = document.getElementById('btn2');
let decrease = document.getElementById('btn3');
let displayCounter = document.getElementById('count');

increase.addEventListener('click', function() {
    ++displayCounter.innerHTML;
    return;
})

reset.addEventListener('click', function() {
    displayCounter.innerHTML = 0;
    return;
})

decrease.addEventListener('click', function() {
    if(displayCounter.innerHTML >= 1) {
        --displayCounter.innerHTML;
        return;
    }
})


