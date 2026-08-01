/* ======================================================
   Happy Girlfriend Day
   script.js
   Part 1
====================================================== */

/* ===========================
   ELEMENT
=========================== */

const loading = document.getElementById("loading");
const app = document.getElementById("app");

const welcome = document.getElementById("welcome");
const story = document.getElementById("story");
const gallery = document.getElementById("gallery");
const timeline = document.getElementById("timeline");
const counter = document.getElementById("counter");
const ending = document.getElementById("ending");

const startButton = document.getElementById("startButton");

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const loadingProgress =
document.querySelector(".loading-progress");

/* ===========================
   STORY DATA
=========================== */

const stories = [

{

title:"Happy Girlfriend Day ❤️",

image:"1.jpg",

text:`Hai sayang...

Selamat Hari Girlfriend.

Terima kasih sudah menjadi bagian dari hidup aku.

Semoga hari ini menjadi salah satu kenangan manis yang akan selalu kita ingat bersama.`

},

{

title:"Terima Kasih ❤️",

image:"2.jpg",

text:`Terima kasih sudah bertahan.

Terima kasih sudah mau mendengarkan.

Terima kasih sudah hadir ketika dunia terasa berat.

Kamu benar-benar berarti untuk aku.`

},

{

title:"Kamu Rumahku",

image:"3.jpg",

text:`Di mana pun aku berada...

Kalau ada kamu...

Rasanya semuanya terasa lebih tenang.

Kamu adalah rumah yang selalu ingin aku pulang.`

},

{

title:"Selamanya",

image:"4.jpg",

text:`Semoga kita terus berjalan bersama.

Melewati semua cerita.

Semua tawa.

Semua tangis.

Sampai nanti kita benar-benar menua bersama.

I Love You ❤️`

}

];

/* ===========================
   LOADING
=========================== */

let percent = 0;

const loadingTimer = setInterval(()=>{

percent++;

loadingProgress.style.width = percent + "%";

if(percent >= 100){

clearInterval(loadingTimer);

setTimeout(()=>{

loading.classList.add("hidden");

app.classList.remove("hidden");

},500);

}

},25);

/* ===========================
   MUSIC
=========================== */

let musicPlaying = false;

function playMusic(){

bgMusic.play();

musicPlaying = true;

musicBtn.textContent = "🔊";

}

function pauseMusic(){

bgMusic.pause();

musicPlaying = false;

musicBtn.textContent = "🎵";

}

musicBtn.addEventListener("click",()=>{

if(musicPlaying){

pauseMusic();

}else{

playMusic();

}

});

/* ===========================
   START BUTTON
=========================== */

startButton.addEventListener("click",()=>{

playMusic();

welcome.classList.add("hidden");

story.classList.remove("hidden");

showStory(0);

});

/* ===========================
   FLOATING HEART
=========================== */

const hearts = document.getElementById("hearts");

function createHeart(){

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left =

Math.random()*100 + "%";

heart.style.fontSize =

(18 + Math.random()*20) + "px";

heart.style.animationDuration =

(5 + Math.random()*5) + "s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,700);

/* ===========================
   STARS
=========================== */

const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

const star = document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=

Math.random()*5+"s";

star.style.animationDuration=

2+Math.random()*3+"s";

stars.appendChild(star);

}

/* ===========================
   PETALS
=========================== */

const petals = document.getElementById("petals");

function createPetal(){

const petal = document.createElement("div");

petal.className="petal";

petal.style.left=

Math.random()*100+"%";

petal.style.animationDuration=

5+Math.random()*6+"s";

petal.style.opacity=

Math.random();

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,800);

/* ===========================
   CURRENT STORY
=========================== */

let currentStory = 0;
/* ======================================================
   Happy Girlfriend Day
   script.js
   Part 2
   Story • Typing Effect • Navigation
====================================================== */

/* ===========================
   STORY ELEMENT
=========================== */

const storyTitle = document.getElementById("storyTitle");
const storyPhoto = document.getElementById("storyPhoto");
const typingText = document.getElementById("typingText");
const storyNumber = document.getElementById("storyNumber");

const nextButton = document.getElementById("nextButton");

/* ===========================
   TYPING EFFECT
=========================== */

let typingTimer = null;

function typeWriter(text){

    clearInterval(typingTimer);

    typingText.textContent = "";

    let index = 0;

    typingTimer = setInterval(()=>{

        if(index < text.length){

            typingText.textContent += text.charAt(index);

            index++;

        }else{

            clearInterval(typingTimer);

        }

    },25);

}

/* ===========================
   SHOW STORY
=========================== */

function showStory(index){

    const data = stories[index];

    story.classList.remove("fade");
    void story.offsetWidth;
    story.classList.add("fade");

    storyTitle.textContent = data.title;

    storyPhoto.src = data.image;

    storyPhoto.alt = data.title;

    storyNumber.textContent =
        String(index + 1).padStart(2,"0");

    typeWriter(data.text);


    if(index === stories.length - 1){

        nextButton.textContent =
            "Lanjut ke Galeri 📸";

    }else{

        nextButton.textContent =
            "Selanjutnya →";

    }

}

/* ===========================
   NEXT STORY
=========================== */

nextButton.addEventListener("click",()=>{

    if(currentStory < stories.length - 1){

        currentStory++;

        showStory(currentStory);

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

        return;

    }

    story.classList.add("hidden");

    gallery.classList.remove("hidden");

    gallery.classList.add("show");

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ===========================
   PREVIOUS STORY
=========================== */


/* ===========================
   IMAGE PRELOAD
=========================== */

stories.forEach(item=>{

    const img = new Image();

    img.src = item.image;

});

/* ===========================
   KEYBOARD SHORTCUT
=========================== */

document.addEventListener("keydown",(e)=>{

    if(
        story.classList.contains("hidden")
    ) return;


    if(e.key === "ArrowRight"){

        nextButton.click();

    }


    if(e.key === "ArrowLeft"){

        prevButton.click();

    }

});

/* ===========================
   STORY IMAGE ANIMATION
=========================== */

storyPhoto.addEventListener("load",()=>{

    storyPhoto.classList.remove("scale-in");

    void storyPhoto.offsetWidth;

    storyPhoto.classList.add("scale-in");

});

/* ===========================
   MUSIC AUTOPLAY FIX
=========================== */

document.body.addEventListener("click",()=>{

    if(!musicPlaying){

        bgMusic.play().then(()=>{

            musicPlaying = true;

            musicBtn.textContent = "🔊";

        }).catch(()=>{});

    }

},{ once:true });

/* ===========================
   PARALLAX EFFECT
=========================== */

window.addEventListener("mousemove",(e)=>{

    const x = (e.clientX / window.innerWidth - .5) * 20;

    const y = (e.clientY / window.innerHeight - .5) * 20;

    document.querySelectorAll(".aurora span").forEach((item,i)=>{

        item.style.transform =
        `translate(${x*(i+1)}px, ${y*(i+1)}px)`;

    });

});
/* ======================================================
   Happy Girlfriend Day
   script.js
   Part 3
   Gallery • Timeline • Counter
====================================================== */


/* ===========================
   GALLERY LIGHTBOX
=========================== */

const galleryItems =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.getElementById("closeLightbox");


galleryItems.forEach((image)=>{

    image.addEventListener("click",()=>{

        lightbox.classList.remove("hidden");

        lightboxImage.src =
        image.src;

    });

});


closeLightbox.addEventListener("click",()=>{

    lightbox.classList.add("hidden");

});


lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        lightbox.classList.add("hidden");

    }

});


document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        lightbox.classList.add("hidden");

    }

});


/* ===========================
   GALLERY NEXT
=========================== */

const galleryNext =
document.getElementById("galleryNext");


galleryNext.addEventListener("click",()=>{


    gallery.classList.add("hidden");

    timeline.classList.remove("hidden");

    timeline.classList.add("show");


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});



/* ===========================
   TIMELINE NEXT
=========================== */


const timelineNext =
document.getElementById("timelineNext");


timelineNext.addEventListener("click",()=>{


    timeline.classList.add("hidden");


    counter.classList.remove("hidden");


    counter.classList.add("show");


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});



/* ===========================
   LOVE COUNTER
=========================== */


/*
    GANTI TANGGAL INI
    DENGAN TANGGAL JADIAN KALIAN

    Format:
    Tahun-Bulan-Tanggal

    Contoh:
    2025-01-01
*/


const relationshipDate =
new Date("2026-06-23");



const loveDays =
document.getElementById("loveDays");


const loveDate =
document.getElementById("loveDate");



function updateLoveCounter(){


    const now =
    new Date();


    const difference =
    now - relationshipDate;



    const days =
    Math.floor(
        difference /
        (1000*60*60*24)
    );



    const years =
    Math.floor(days / 365);



    const months =
    Math.floor(
        (days % 365) / 30
    );



    const remainingDays =
    days % 30;



    loveDays.textContent =
    `${days} Hari`;



    loveDate.textContent =
    `${years} Tahun • ${months} Bulan • ${remainingDays} Hari`;


}



updateLoveCounter();


setInterval(
    updateLoveCounter,
    60000
);



/* ===========================
   COUNTER NEXT
=========================== */


const counterNext =
document.getElementById("counterNext");


counterNext.addEventListener("click",()=>{


    counter.classList.add("hidden");


    ending.classList.remove("hidden");


    ending.classList.add("show");


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


    launchConfetti();


});



/* ===========================
   TIMELINE ANIMATION
=========================== */


const timelineItems =
document.querySelectorAll(".timeline-item");



const timelineObserver =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
                "fade-left"
            );


        }


    });


},{
    threshold:.3
});



timelineItems.forEach(item=>{

    timelineObserver.observe(item);

});



/* ===========================
   SCROLL REVEAL
=========================== */


const revealElements =
document.querySelectorAll(
".glass-card,.gallery-item"
);



const revealObserver =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
                "show"
            );


        }


    });


},{
    threshold:.15
});



revealElements.forEach(el=>{

    revealObserver.observe(el);

});
/* ======================================================
   Happy Girlfriend Day
   script.js
   Part 4
   Confetti • Restart • Final Setup
====================================================== */


/* ===========================
   CONFETTI
=========================== */

const canvas =
document.getElementById("confettiCanvas");


const ctx =
canvas.getContext("2d");


let confettiParticles = [];



function resizeCanvas(){

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

}


resizeCanvas();


window.addEventListener(
"resize",
resizeCanvas
);



function createConfetti(){


    const colors = [

        "#ff4d8d",
        "#ff82b4",
        "#ffd6e7",
        "#ffffff"

    ];


    return {

        x:
        Math.random()*canvas.width,


        y:
        -20,


        size:
        Math.random()*8+5,


        speed:
        Math.random()*3+2,


        angle:
        Math.random()*360,


        color:
        colors[
            Math.floor(
                Math.random()*colors.length
            )
        ]

    };


}



function launchConfetti(){


    confettiParticles = [];


    for(let i=0;i<180;i++){


        confettiParticles.push(
            createConfetti()
        );


    }


    animateConfetti();


}



function animateConfetti(){


    ctx.clearRect(

        0,
        0,
        canvas.width,
        canvas.height

    );



    confettiParticles.forEach((p,index)=>{


        ctx.save();


        ctx.translate(
            p.x,
            p.y
        );


        ctx.rotate(
            p.angle
        );


        ctx.fillStyle =
        p.color;


        ctx.fillRect(

            0,
            0,
            p.size,
            p.size

        );


        ctx.restore();



        p.y += p.speed;


        p.x += Math.sin(p.angle)*2;


        p.angle += .05;



        if(
            p.y >
            canvas.height + 50
        ){

            confettiParticles[index] =
            createConfetti();

        }


    });



    if(confettiParticles.length){

        requestAnimationFrame(
            animateConfetti
        );

    }


}



/* ===========================
   RESTART WEBSITE
=========================== */


const restartButton =
document.getElementById("restartButton");



restartButton.addEventListener(
"click",
()=>{


    ending.classList.add("hidden");


    welcome.classList.remove("hidden");


    currentStory = 0;


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});



/* ===========================
   MUSIC CONTROL FINAL
=========================== */


bgMusic.volume = .45;



document.addEventListener(
"visibilitychange",
()=>{


    if(document.hidden){


        bgMusic.pause();


    }
    else if(musicPlaying){


        bgMusic.play();


    }


});



/* ===========================
   MOBILE TOUCH EFFECT
=========================== */


let touchStartX = 0;


let touchEndX = 0;



document.addEventListener(
"touchstart",
(e)=>{


    touchStartX =
    e.changedTouches[0].screenX;


});



document.addEventListener(
"touchend",
(e)=>{


    touchEndX =
    e.changedTouches[0].screenX;



    handleSwipe();


});



function handleSwipe(){


    const distance =
    touchEndX-touchStartX;



    if(
        Math.abs(distance)<50
    ){

        return;

    }



    if(distance<0){

        if(
            !story.classList.contains("hidden")
        ){

            nextButton.click();

        }

    }


}



/* ===========================
   PAGE START
=========================== */


window.addEventListener(
"load",
()=>{


    console.log(
    "❤️ Happy Girlfriend Day Website Ready"
    );


});



/* ===========================
   DISABLE IMAGE DRAG
=========================== */


document
.querySelectorAll("img")
.forEach(img=>{


    img.addEventListener(
    "dragstart",
    e=>{


        e.preventDefault();


    });


});



/* ===========================
   PERFORMANCE
=========================== */


let reduceMotion =
window.matchMedia(
"(prefers-reduced-motion: reduce)"
).matches;



if(reduceMotion){


    document
    .querySelectorAll("*")
    .forEach(el=>{


        el.style.animationDuration =
        "0.01ms";


    });


}
