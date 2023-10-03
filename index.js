//Crea un array con los números del 1 al 10. Puedes hacerlo a mano o con un bucle.
let array=[];
for (let i = 1; i <=10; i++) {
    array.push(i);
    
}
console.log(array);

//contando monedas

const contarMonedas= (array)=>{
    let sumArray=0
    for (let i = 0; i < array.length; i++) {
        
        sumArray+=array[i];
    }
  return sumArray
}

//edadminima

const edadMinima=(array)=>
{
    let arrayMinimo=[];
for (let i = 0; i < array.length; i++) {
    if (array[i]>=18) {
        arrayMinimo.push(array[i]);
    }
    
    
}
return arrayMinimo;
}

//maquina censura

function censura(palabra,frase) {

    let boleano=false;
    const separado= frase.split(" ");
    for (let i = 0; i < separado.length; i++) {
        if (separado[i]===palabra) {

        boleano=true;
        }
        
    }
    return boleano;
    
}

//maquina censura 1.1


function censura11(palabra, frase) {
    const separo = frase.split(" ");
    return separo.map(palabraActual => (palabraActual === palabra ? "*".repeat(palabraActual.length) : palabraActual)).join(" ");
  }

//maquina 2.0
//revisar uso de map

function censura20(palabras, frase) {
    let separo = frase.split(" ");
    for (let i = 0; i < palabras.length; i++) {
      separo = separo.map(palabraActual => (palabraActual === palabras[i] ? "*".repeat(palabraActual.length) : palabraActual));
    }
    return separo.join(" ");
  }
  
      