const comp = document.querySelector(".text");
const career = ["fashion", "design", "and", "cosmentics"];




let careerindex = 0;

let characterindex = 0;
update();

function update(){
    characterindex++;
    comp.innerHTML = `  <h1>welcome to ${career[careerindex].slice(0,characterindex)}</h1>`;
  
    if(characterindex === career[careerindex].length){
        careerindex++;
        characterindex = 0;
    }
    if(careerindex === career.length){
        careerindex = 0;
    }
    setTimeout(update, 400);








}