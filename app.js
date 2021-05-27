const $buttons = document.querySelectorAll("a");
let audio;
$buttons.forEach(btn =>{
    //Adding an eventListener
    btn.addEventListener("click",(e)=>{
        let randNumber = Math.floor(Math.random()*3);
        console.log(randNumber)
        let x = e.clientX - e.target.offsetLeft;
        let y =e.clientY - e.target.offsetTop;
        
        let ripples = document.createElement('span');
        ripples.style.left = x+'px';
        ripples.style.top = y+'px';
        btn.appendChild(ripples);

        setTimeout(()=>{
            ripples.remove()
        },900)
        // console.log(`./sounds/${btn.textContent.substring(3).toLowerCase()}/${randNumber}.mp3`)
        audio = new Audio(`./sounds/${btn.textContent.substring(3).toLowerCase()}/${randNumber+1}.mp3`).play()

        if (btn.textContent.substring(3).toUpperCase() === "PERRO"){
            console.log("Sonido Perro")}else{console.log("Sonido Gato");}

        
    })
}
)

$buttons.forEach(btn=>{
    console.log(btn)
})