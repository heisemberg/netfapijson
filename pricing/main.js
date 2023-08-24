/* let obtener = async(p1)=>{
    let peticion = await fetch(`${p1}.json`);
    let res = await peticion.json();
    console.log(res);
}
obtener("config");

(async(p1)=>{
    let peticion = await fetch(`${p1}.json`);
    let res = await peticion.json();
    console.log(res);
})("config") */

const path = "config";

let construirElEncabezado = async()=>{
    let peticion = await fetch(`${path}.json`);
    let res = await peticion.json();
    let selecion = document.querySelector("#myJsonSection");
    selecion.insertAdjacentHTML("beforeend", /*html*/`
    <h1 class="display-4 fw-normal text-body-emphasis">${res.section.titulo}</h1>
    <ul class="fs-5 text-body-secondary">
        ${res.section.lista.map((value)=> /*html*/`
            <li>${value.imagen}${value.texto}</li>
            `
        ).join("")}
    </ul>`);
}

construirElEncabezado();