let ValorElemento= document.getElementById('valor')
let aumento=document.getElementById("suma");
let valor = parseInt(ValorElemento.textContent);
let $incrementar=document.getElementById('incrementar');
function incrementar(){
 
    
    /*
    valor++
    ValorElemento.textContent=valor;
    */

   /* console.log("suma", aumento);
    resultado= valor + parseInt(aumento);
    console.log(resultado);
    */
}
$incrementar.addEventListener('click', (event)=>{
    console.log(aumento.value  ,"=>");
    let resultado= valor + parseInt(aumento.value);
    console.log(resultado);
})
/*aumento.addEventListener('input', (event)=>{
   let value=event.target.value ;
   console.log(value);
})
   */
