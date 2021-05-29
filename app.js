const $buttons = document.querySelectorAll("a");
let audio;
document.querySelectorAll('h1').forEach(e=>{
    e.classList.add('animate__animated', 'animate__slideInLeft');
    e.style.setProperty('--animate-duration', '1.5s');
})
document.querySelectorAll('h2').forEach(e=>{
    e.classList.add('animate__animated', 'animate__slideInLeft');
    e.style.setProperty('--animate-duration', '2.5s');
})
document.querySelectorAll('.row').forEach(e=>{
    e.classList.add('animate__animated', 'animate__fadeInRight');
    e.style.setProperty('--animate-duration', '3.5s');
})

$buttons.forEach(btn =>{
    //Adding an eventListener
    btn.addEventListener("click",(e)=>{
        let randNumber = Math.floor(Math.random()*3);
        let x = e.clientX - e.target.offsetLeft;
        let y =e.clientY - e.target.offsetTop;
        let ripples = document.createElement('span');
        const animal = btn.textContent.substring(3).toLowerCase();


        ripples.style.left = x+'px';
        ripples.style.top = y+'px';
        btn.appendChild(ripples);
        setTimeout(()=>{
            ripples.remove()
        },900)
        audio = new Audio(`./sounds/${animal}/${randNumber+1}.mp3`).play();
        //Let's make pets to bounce
        if (btn.textContent.substring(3).toUpperCase() === "PERRO"){
            document.getElementById("dog").className = document.getElementById("dog").className.toString().concat(" animate__animated animate__bounce") 
            setTimeout(() => {
                document.getElementById("dog").className = document.getElementById("dog").className.toString().replace(" animate__animated animate__bounce","")
                
            }, 3000);
        }else{
            
            document.getElementById("cat").className = document.getElementById("cat").className.toString().concat(" animate__animated animate__bounce") 
            setTimeout(() => {
                document.getElementById("cat").className = document.getElementById("cat").className.toString().replace(" animate__animated animate__bounce","")
                
            }, 3000);

        }

        
    })
}
)
