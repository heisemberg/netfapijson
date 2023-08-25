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
    </ul>
    `);

    let selecion2 = document.querySelector("#myJsonSection2");
    selecion2.insertAdjacentHTML("beforeend", /*html*/`
    ${res.section2.planes.map((value2)=> /*html*/ `
    <div class="col">
          <div class="card mb-4 rounded-0 border-primary">
            <div class="card-header py-3 text-bg-primary border-primary  rounded-0">
              <h4 class="my-0 fw-normal">${value2.titulo}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">${value2.precio}<small class="text-body-secondary fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>${value2.descripcion[0]}</li>
                <li>${value2.descripcion[1]}</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Next</button>
            </div>
        </div>
    </div>
        `
        ).join("")}
    `);
    
    let selecion3 = document.querySelector("#myJsonSection3");
    selecion3.insertAdjacentHTML("beforeend", /*html*/`
    <h2 class="display-6 text-center mb-4">${res.section3.titulo}</h2>
        <table class="table text-center">
          <thead>
            <tr>
              <th style="width: 34%;">${res.section3.tabla[0].titulo}</th>
              <th style="width: 22%;">${res.section3.tabla[0].basico}</th>
              <th style="width: 22%;">${res.section3.tabla[0].estandar}</th>
              <th style="width: 22%;">${res.section3.tabla[0].premium}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="text-start">${res.section3.tabla[1].titulo}</th>
              <td>${res.section3.tabla[1].basico}</td>
              <td>${res.section3.tabla[1].estandar}</td>
              <td>${res.section3.tabla[1].premium}</td>
            </tr>
          </tbody>
        </table>
        <p class="text-body-secondary">${res.section3.descripcion}</p>
    `);
}

construirElEncabezado();

