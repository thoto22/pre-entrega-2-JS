//  PRE-ENTREGA 1

//let TipoVehiculo = prompt ("¿Para que vehiculo es la bateria que solicitas?")

//    if (TipoVehiculo == "auto") {
//        console.log ("La bateria que necesitas debe tener un amperaje entre 45 y 90")
//    }
//    else if (TipoVehiculo == "camion"){
//        console.log ("La bateria que necesitas es de un amperaje mayor a 90")
//    } else if (TipoVehiculo == "moto") {
//        console.log ("La bateria que necesitas es Ups, es decir que cuenta con un amperaje bajo")
//    }

//let MarcaElegida = prompt ("¿Buscabas alguna marca en especial?")

//    if (MarcaElegida == "moura") {
//        console.log ("Es la mejor opcion, contas con una garantia de 18 meses")
//    } else if (MarcaElegida == "willard") {
//        console.log ("es la marca nacional por excelencia, tenes 12 meses de garantia")
//    } else if (MarcaElegida == "sermat") 
//        console.log ("Es una opcion intermedia en cuanto a precio y funcionabilidad"); 

//const modelosMoura = ["18fd", "22ed", "40fd", "20gd", "22gd", "26ad", "24kd", "28kd", "30ld", "95qd", "100ha", "150bd"]

//console.log (modelosMoura)

//console.log (modelosMoura.includes ("100ha"))

//modelosMoura.push ("180bd")

//let formaPago = prompt ("¿Como desearias abonar?")

//    if (formaPago == "efectivo") {
//        alert ("tenes un 10% de descuento!")
//    } else if  (formaPago == "tarjeta") {
//        alert ("con visa y mastercard tenes 12 cuotas sin interes!")
//    }
        

//let confirmacion = prompt ("¿desea que un asesor se contacte con usted para brindarle mas informacion? (si/no)")
        
//if (confirmacion == "si") {
//       let telefono = prompt ("Por favor ingrese su numero de telefono movil para que un asesor se contacte con usted a la brevedad.")
//        alert ("aguarde un instante y sera asesorado via movil, desde ya muchas gracias por confiar en nuestros servicios!")
//    } else if (confirmacion == "no") {
//        alert ("gracias por confiar en nuestros servicios, saludos!")
//    }

//   PRE-ENTREGA 2

let titulo = document.getElementById ("TituloPrincipal")

let vehiculo = document.getElementsByClassName ("TipoVehiculo")

let ModelosMotos = document.getElementsByClassName ("modelobosch")

let ModelosMotoMoura = document.getElementsByClassName ("modelomotomoura")

let ModelosAutoCamionSermat = document.getElementsByClassName ("modelosermat")

let ModelosAutoCamionMoura = document.getElementsByClassName ("modeloautocamionMoura")

let ModelosWillard = document.getElementsByClassName ("modelowillard")

const promociones = [
    {
        id: 1,
        marca: "Moura",
        garantia: 18,
        cuotas: 18
    },
    {
        id: 2,
        marca: "Willard",
        garantia: 12,
        cuotas: 12
    },
    {
        id: 3,
        marca: "Sermat",
        garantia: 6,
        cuotas: 6
    }
]

const NubeInfo =[]

let Promociones = document.getElementById ("Promociones")
function renderPromociones(promosarray) {
    promosarray.forEach(promocion => {
        const financiacion = document.createElement ("div")
        financiacion.innerHTML = 
        `<p> Comprando baterias de la marca ${promocion.marca}  </p>
         <p> Contas con una garantia de ${promocion.garantia} meses </p>
         <p> Ademas de contar con una financiacion de ${promocion.cuotas} cuotas sin interes. </p>
         <button class= "Info" id= "${promocion.id}"> Mas info </button>`
    
Promociones.appendChild(financiacion)
    });
    MasInfoButton()
}

renderPromociones(promociones)

function MasInfoButton () {
    ButtonInfo = document.querySelectorAll (".Info")
    ButtonInfo.forEach(button => {
        button.onclick = (e) => {
            const promId = e.currentTarget.id
            const seleccionPromo = promociones.find (promocion =>promocion.id == promId)
            NubeInfo.push(seleccionPromo)

        console.log(NubeInfo)

        localStorage.setItem("NubeInfo", JSON.stringify(NubeInfo))
        }
    }) 
}

let PieDePagina = document.createElement ("h6")
PieDePagina.innerHTML = "Todos los derechos reservados."
document.body.append(PieDePagina)
