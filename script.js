function buttonPress(){
    size = window.prompt("What size grid?",4);
    drawCanvas(size);
}

const button = document.querySelector("button");
button.addEventListener("click",buttonPress);

function drawCanvas(n){
    const canvas = document.querySelector('div#canvas');
    canvas.maxWidth = n*20 +'px';
    canvas.style.display = 'grid';
    canvas.style.gridTemplate= n+' '+n;
    canvas.innerHTML = '';
    //canvas.style.gridTemplateColumns = '20px 20px 20px 20px';
    for (let r = 0; r < n; r++){
        // let row = document.createElement('div');
        // row.style.display = 'grid';
        // canvas.appendChild(row);
        for (let c = 0; c < n; c++){
            let box = document.createElement('div');
            box.setAttribute('id',"r"+r+"c"+c);
            box.style.height = '20px';
            //box.style.maxWidth = '12px';
            box.style.border = '1px solid black';
            //box.innerHTML = '<p> </p>';
            box.style.gridArea = (r +1)+"/"+(c + 1);
            canvas.appendChild(box);
            box.addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
            }); 
        }
    }
}

drawCanvas(4);