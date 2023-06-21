const mario = document.getElementById("mario");

const derevo = document.getElementById("tree");

document.addEventListener("keydown" , function(event){ 
    jump();
})

function jump () {
   if (mario.classList !="jump") {
    mario.classList.add("jump")
   }
   setTimeout(function(){
    mario.classList.remove("jump")
   }, 1600)
}
let isAlive = setInterval ( function() {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));

    if (treeLeft < 100 && treeLeft > 0 && marioTop >= 200 ) {
        alert ( "Game Over" )
    }
}, 10)
