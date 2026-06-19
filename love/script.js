/* ===========================
   HEART SHAPE
=========================== */

const container = document.getElementById("heart");

for(let t = 0; t < Math.PI * 2; t += 0.18){

    const x =
        16 * Math.pow(Math.sin(t), 3);

    const y =
        -(13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t));

    const text = document.createElement("div");

    text.className = "love";
    text.innerText = "I love you";

    text.style.left =
        (x * 12 + 180) + "px";

    text.style.top =
        (y * 12 + 180) + "px";

    text.style.animationDelay =
        Math.random() * 3 + "s";

    container.appendChild(text);
}

/* ===========================
   FLOATING HEARTS
=========================== */

for(let i = 0; i < 25; i++){

    const heart =
        document.createElement("div");

    heart.className = "bg-heart";

    heart.innerHTML = "❤";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (10 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    heart.style.animationDelay =
        Math.random() * 5 + "s";

    document.body.appendChild(heart);
}

/* ===========================
   MUSIC
=========================== */


const playBtn =
    document.getElementById("playBtn");

const music =
    document.getElementById("bgMusic");

const overlay =
    document.getElementById("overlay");

playBtn.addEventListener("click", async () => {

    try{

        overlay.addEventListener('click',function(){
            overlay.remove()
        })

        await music.play();


    }catch(error){

        alert(
            "Browser blocked audio playback."
        );

        console.error(error);

    }

});
