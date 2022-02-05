const n:number = 10 // valor de la suma deseada
var m:number[] = [2, 5, 8, 14, 0];  // arreglo de valores a ser reorridos
function findSubset(m,n) { // funcion para hallar el subconjunto
  var res:any[] = []
  m.forEach((val, i, arr) => {
    arr.filter((valf,ik,arrf) => {
      if(val + valf == n && (i!=ik)){
        res.push([val,valf])
      }
    });
  })
  return res[0];
}
console.log(findSubset(m.filter(val => val < n),n)); // filtrado de los valores mayores a la suma deseada e invocacion de la funcion 
