const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const selected_color = document.getElementById('info2');

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;

function change_color(element){
    ctx.strokeStyle=element.style.backgroundColor;
    selected_color.style.backgroundColor=element.style.backgroundColor;
}

canvas.addEventListener('mousemove',onMouseMove);
canvas.addEventListener('mousedown',startPainting);
canvas.addEventListener('mouseup',stopPainting);
canvas.addEventListener('mouseleave',quitPainting);


let startX =0, startY=0;
let painting = false;

function draw(curX, curY){
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(curX,curY);
    ctx.stroke();
}

function startPainting(e){
    startX = e.offsetX;
    startY = e.offsetY;
    painting=true;
}

function stopPainting(e){
    painting = false;
}

function onMouseMove(e){
    if(!painting) return;
    let curX = e.offsetX;
    let curY = e.offsetY;
    draw(curX, curY);
    const show_curX = document.getElementById('info3_x');
    const show_curY = document.getElementById('info3_y');
    show_curX.textContent = `x: ${curX}`;
    show_curY.textContent = `y: ${curY}`;
    startX = curX;
    startY = curY;
}

function quitPainting(e){
    painting = false;
}
