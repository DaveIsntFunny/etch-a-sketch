function buttonPress(){
    size = window.prompt("What size grid?",4);
    drawCanvas(size);
}

const button = document.querySelector("button");
button.addEventListener("click",buttonPress);

function drawCanvas(n){
    const container = document.querySelector('div#container');
    container.style.maxWidth = '960px';
    container.display = 'flex';
    const canvas = document.querySelector('div#canvas');
    //canvas.width = '80px';
    // canvas.style.display = 'grid';
    // canvas.style.gridTemplate= n+' '+n;
    // canvas.style.columnGap= '0';
    canvas.innerHTML = '';
    //canvas.style.gridTemplateColumns = '20px 20px 20px 20px';
    for (let r = 0; r < n; r++){
         let row = document.createElement('div');
         row.style.display = 'flex';
         row.style.maxHeight = Math.min(20,960/n)+'px';
         //row.style.minWidth = Math.min(600,960/n) + 'px';
         canvas.appendChild(row);
        for (let c = 0; c < n; c++){
            let box = document.createElement('div');
            box.setAttribute('id',"r"+r+"c"+c);
            box.style.height = Math.min(20,960/n) + 'px';
            box.style.width = Math.min(20,960/n) + 'px';
            box.style.border = '1px solid black';
            box.style.padding = 0;
            //box.style.display = 'inline';
            box.style.margin = 0;
            //box.innerHTML = '<p> </p>';
            //box.style.gridArea = (r +1)+"/"+(c + 1);
            row.appendChild(box);
            box.addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
            }); 
        }
    }
}

drawCanvas(16);