var randomNumber1 = Math.floor(Math.random()*6)+1;
var imageName ="";
if(randomNumber1 === 1){
    imageName="dice1.png";
}else if(randomNumber1 === 2){
    imageName="dice2.png";
}else if(randomNumber1 === 3){
    imageName="dice3.png";
}else if(randomNumber1 === 4){
    imageName="dice4.png";
}else if(randomNumber1 === 5){
    imageName="dice5.png";
}else{
    imageName="dice6.png";
}
document.querySelector("img.img1").setAttribute("src","./images/"+imageName);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageName2 ="";
if(randomNumber2 === 1){
    imageName2="dice1.png";
}else if(randomNumber2 === 2){
    imageName2="dice2.png";
}else if(randomNumber2 === 3){
    imageName2="dice3.png";
}else if(randomNumber2 === 4){
    imageName2="dice4.png";
}else if(randomNumber2 === 5){
    imageName2="dice5.png";
}else{
    imageName2="dice6.png";
}
document.querySelector("img.img2").setAttribute("src","./images/"+imageName2);
if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Draw";
}else if (randomNumber1>randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player1 Win";
}else{
    document.querySelector(".container h1").innerHTML = "Player2 Win";
}