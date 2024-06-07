const colors = ['Purple','Rgba(255, 99, 71, 0.6)','#00ff00','Orange','Rgba(75, 0, 130, 0.7)','#Ffd700','Cyan','#Ff4500'];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");


btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
});

function getRandomNumber (){
    return Math.floor(Math.random()*colors.length);
}