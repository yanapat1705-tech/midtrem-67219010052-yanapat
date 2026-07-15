// ===============================
// Fade In Card
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

},{
    threshold:0.2
});

cards.forEach((card,index)=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition=`0.6s ${index*0.15}s`;

    observer.observe(card);

});


// ===============================
// Button Click Animation
// ===============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.style.transform="scale(.9)";

        setTimeout(()=>{

            btn.style.transform="scale(1)";

        },150);

    });

});


// ===============================
// Profile Hover Rotate
// ===============================

const profile=document.querySelector(".profile-img");

profile.addEventListener("mousemove",()=>{

    profile.style.transform="scale(1.08) rotate(5deg)";

});

profile.addEventListener("mouseleave",()=>{

    profile.style.transform="scale(1) rotate(0deg)";

});


// ===============================
// Mouse Parallax Background
// ===============================

const circle1=document.querySelector(".one");
const circle2=document.querySelector(".two");

document.addEventListener("mousemove",(e)=>{

    let x=e.clientX/40;
    let y=e.clientY/40;

    circle1.style.transform=`translate(${x}px,${y}px)`;

    circle2.style.transform=`translate(${-x}px,${-y}px)`;

});


// ===============================
// Card Glow Effect
// ===============================

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        card.style.background=`
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,255,255,.95),
        rgba(245,235,255,.8)
        )
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.72)";

    });

});


// ===============================
// Floating Profile
// ===============================

let up=true;

setInterval(()=>{

    if(up){

        profile.style.marginTop="8px";

    }else{

        profile.style.marginTop="0px";

    }

    up=!up;

},1200);


// ===============================
// Welcome Console
// ===============================

console.log("Welcome to Yanapat Music Website 🎵");
