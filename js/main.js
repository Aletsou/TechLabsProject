const btn=document.getElementById('btn');


const randURLS= [
    "../components/kids.html",
    "../components/teenagers.html",
    "../components/adults.html",
];

const randURL= Math.floor(Math.random() * randURLS.length);

btn.addEventListener("click", onClick);

function onClick (e) {
    e.preventDefault();
    window.location= (randURLS[randURL]);
   
}
