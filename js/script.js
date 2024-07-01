import ehUmCPF from "../js/valida-cpf.js";
const camposDoFormulario = document.querySelectorAll('[required]');

camposDoFormulario.forEach((campo)=>{ 
    campo.addEventListener('blur', ()=> verificarCampo(campo))
    /*cada indice de camposDoFormulario será recuperado pela função forEach(), e chamado de campo
    cada campo terá um eventListener aguardando um blur
    assim que o blur ocorrer, chama a função verificarCampo(), passando o proprio campo para ser verificado*/
})
/*quando chama a função verificarCampo(), não está sendo enviado nada. Para uma função de verificação, precisamos do valor daquele campo.
Então, verificarCampo, vai receber como parâmetro (campo), 
Assim, quando acontecer algo ali, vai ser chamado ele(campo) pra acontecer aquela outra função, com referência aquele campo específico*/

function verificarCampo(campo){
    if(campo.name== "cpf" && campo.value.length>=11){
        ehUmCPF(campo);
    }
}
