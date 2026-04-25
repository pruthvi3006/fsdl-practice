// JSON data
let products = [
    { name: "Phone", price: "$500", img: "https://via.placeholder.com/150" },
    { name: "Laptop", price: "$900", img: "https://via.placeholder.com/150" },
    { name: "Headphones", price: "$100", img: "https://via.placeholder.com/150" }
];

let container=document.getElementById("products");

products.forEach(p => {
    let card=document.createElement("div");
    card.className="card";

    card.innerHTML=`
    <img src="${p.img}">
    <h3>${p.name}</h3>
    <p>${p.price}</p>
    <button onClick="buy('${p.name}')">Buy Now</button>`;

    container.appendChild(card);
})

function buy(name){
    alert(name + "purchased");
}