/*
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/


const images = [
    {
        image: './assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: './assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: './assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: './assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: './assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//genero una struttura html per ogni elemento dell'array
images.forEach((elemento) => {

    document.querySelector('.images').innerHTML += `
    <div class="item">
        <img src="${elemento.image}" alt="image">
        <div class="texts">
            <h5>${elemento.title}</h5>
            <p>${elemento.text}</p>
        </div>
    </div>
    `
})


//stampo la prima immagine
document.querySelector('.images').innerHTML += `
<div class="item active">
    <img src="${images[0].image} " alt="image">
    <div class="texts">
            <h5>${images[0].title}</h5>
            <p>${images[0].text}</p>
    </div>
</div>
`


let arrowTop = document.querySelector('.arrow-top');
let arrowDown = document.querySelector('.arrow-down');


let position = 0

//funzione custom per generare il cambio immagine
function changeImage(){
    document.querySelector('.item.active').classList.remove('active');

    if(position == images.length -1){
        position = 0
    }else{
        position++
    }
    
    document.getElementsByClassName('item')[position].classList.add('active');
}


//funzione custom per generare il cambio immagine
function changeImage2(){
    document.querySelector('.item.active').classList.remove('active');

    if(position == 0){
        position = images.length -1;
    }else{
        position--
    }
    
    document.getElementsByClassName('item')[position].classList.add('active');  
}


//al click cambia l'immagine
arrowTop.addEventListener('click', function(){
    changeImage()  
})

//al click cambia l'immagine
arrowDown.addEventListener('click', function(){
    changeImage2()  
})


//imposto timer di 3 secondi per cambiare immagine
let timer = setInterval(function(){
    changeImage()  
}, 4000)


//bottone di stop per interrompere il timer
document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(timer)
})


//bottone di start per riattivare il timer
document.querySelector('#start').addEventListener('click', function(){
    let timer2 = setInterval(function(){
        changeImage()  
    }, 4000) 
})



//thumbnails

function thumb(number){
    document.querySelector('.item.active').classList.remove('active');

    document.querySelector('.images').innerHTML += `
    <div class="item active">
        <img src="${images[number].image}" alt="image">
    </div>
    `
}

document.getElementById('img-1').addEventListener('click', function(){
    thumb(0)    
})

document.getElementById('img-2').addEventListener('click', function(){
    thumb(1)
})

document.getElementById('img-3').addEventListener('click', function(){
    thumb(2)
})

document.getElementById('img-4').addEventListener('click', function(){
    thumb(3)
})

document.getElementById('img-5').addEventListener('click', function(){
    thumb(4)
})




