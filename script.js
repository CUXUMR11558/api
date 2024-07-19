// IMPORTACION DE LIBRERIAS
// DECLARACION DE VARIABLES Y CONSTANTES
const formulario = document.querySelector('form')
const info = document.getElementById('info')
const loader = document.getElementById('loader')
const btnConsulta = document.getElementById('btnConsulta')

info.style.display = 'none'
loader.style.display = 'none'

// DECLARACION DE FUNCIONES
const consultarPokemon = async (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value.trim() //obtiene el valor del input quitando los espacios

    if (name == '') {
        alert('Ingrese el nombre que desea buscar')
        return;
    }
    loader.style.display = ''
    btnConsulta.disabled = true
    try {
        const consulta = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
            method: 'GET',
        })
        console.log (consulta)
    
        if (consulta.status == 200) {
            const datos = await consulta.json()
            console.log(datos);
            
            document.getElementById('nombrePais').textContent = `NOMBRE: ${datos[0].name.common}`

            document.getElementById('continente').textContent = `CONTIENTE: ${datos[0].continents}`
            
            document.getElementById('capital').textContent = `CAPITAL: ${datos[0].capital}`

            document.getElementById('idioma').textContent = `LENGUAGE: ${datos[0].languages.spa}`

        
        

        
        
         info.style.display = ''
            
        } else {
            alert('Pais No Encontrado')
        }

    } catch (error) {

        console.log(error);
    }
    loader.style.display = 'none'
    btnConsulta.disabled = false
}


// MANEJO DE EVENTOS
formulario.addEventListener('submit', consultarPokemon)






