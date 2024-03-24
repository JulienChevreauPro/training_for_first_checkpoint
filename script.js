myMainTitle= document.querySelector ("h1");
myMainTitle.addEventListener("click", () =>{
    myMainTitle.innerText= prompt("Entrez votre nouveau titre");
}, {once: true});

function changeColor (titles) {
    const newColor= prompt ("Entrez une nouvelle couleur hexadécimale (#RRGGBB)");
    if (/^#[0-9A-F]{6}$/i.test(newColor)){
        const myTitles= document.querySelectorAll(".titles");
        for (let i=0; i<myTitles.length; i++){
        myTitles[i].style.color= newColor;
        }
    }else{
        alert("Format de couleur invalide!!");
    }
}

