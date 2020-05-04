const layer1 = document.querySelector('#layer1');
scroll = window.pageYOffset;

document.addEventListener('scroll', function(e){
    const offset = window.pageYOffset;
    scroll = offset;
    layer1.style.width = (100 + scroll/5) + '%';
});

const layer2 = document.querySelector('#layer2');
scroll = window.pageYOffset;

document.addEventListener('scroll', function(e){
    const offset = window.pageYOffset;
    scroll = offset;
    layer2.style.width = (100 + scroll/5) + '%';
    layer2.style.left = scroll/50 + '%';
});

const text = document.querySelector('#text');
scroll = window.pageYOffset;

document.addEventListener('scroll', function(e){
    const offset = window.pageYOffset;
    scroll = offset;
    layer2.style.width = (100 + scroll/5) + '%';
    text.style.top = - scroll/20 + '%';
});

