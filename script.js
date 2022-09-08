const mainPrincipal = document.querySelector(".container");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const main1 = document.querySelector(".products-content fruits");
const main2 = document.querySelector(".products-content drinks");
const main3 = document.querySelector(".products-content hygiene");
const ul1 = document.querySelector(".ul1");
const ul2 = document.querySelector(".ul2");
const ul3 = document.querySelector(".ul3");

let frutas = [];
let bebidas = [];
let higiene = [];

function separaItens(lista){
    for(let i = 0; i < lista.length; i++){
        if(lista[i].category == "Frutas"){
            frutas.push(lista[i])
        }
        else if(lista[i].category == "Bebidas"){
            bebidas.push(lista[i])
        }
        else{
            higiene.push(lista[i])
        }
    }
}
separaItens(products)

function listaFrutas(lista, htmlsection){
    for(let i = 0; i < lista.length; i++){
        let li = document.createElement("li")
        let img = document.createElement("img")
        let main = document.createElement("main")
        let h1 = document.createElement("h1")
        let h5 = document.createElement("h5")
        let p = document.createElement("p")
        img.src = lista[i].image
        img.alt = lista[i].title
        if(lista[i].image == undefined){
            img.src = "./img/products/no-img.svg"
        }
        h1.innerText = lista[i].title
        h5.innerText = lista[i].category
        p.innerHTML = `<strong> R$ ${lista[i].price} </strong>`
        main.append(h1, h5, p)
        li.append(img, main)
        li.classList.add("product")
        img.classList.add("product-img")
        main.classList.add("product-main")
        h1.classList.add("product-title")
        h5.classList.add("product-category")
        p.classList.add("product-price")
        htmlsection.append(li)
    }
} 

listaFrutas(frutas, ul1)
listaFrutas(bebidas, ul2)
listaFrutas(higiene, ul3)











