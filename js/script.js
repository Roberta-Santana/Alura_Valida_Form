import ehUmCPF from "../js/valida-cpf.js";
import ehMaoirDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll('[required]');
const tiposDeErro = ['valueMissing', 'typeMismatch', 'patternMismatch', 'tooShort', 'customError'];
/* criando uma var que recebe a lista dos erros mais comuns= 
valueMissing: campo vazio, faltando valor; typeMismatch: erro no tipo de input do campo, ex: email sem @,
customError: erros curtomizados, relacionados as lógicas de validação das funções ehUmCPF e ehMaiorDeIdade*/

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe - CUSTOM ERROR.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

camposDoFormulario.forEach((campo)=>{ 
    campo.addEventListener('blur', ()=> verificarCampo(campo));
    /*cada indice de camposDoFormulario será recuperado pela função forEach(), e chamado de campo
    cada campo terá um eventListener aguardando um blur
    assim que o blur ocorrer, chama a função verificarCampo(), passando o proprio campo para ser verificado*/

    campo.addEventListener("invalid", evento=>evento.preventDefault());
    /* quando o campo for inváido, não exibir mensagem padrão do js */
})
/*quando chama a função verificarCampo(), não está sendo enviado nada. Para uma função de verificação, precisamos do valor daquele campo.
Então, verificarCampo, vai receber como parâmetro (campo), 
Assim, quando acontecer algo ali, vai ser chamado ele(campo) pra acontecer aquela outra função, com referência aquele campo específico*/

function verificarCampo(campo){
    let mensagem = " ";
    campo.setCustomValidity(" ");
    //cada if é uma condição que especifica o campo, garantindo que seja um dos required desejado
    if(campo.name== "cpf" && campo.value.length>=11){
        ehUmCPF(campo);
    }
    if(campo.name== "aniversario" && campo.value !=" "){
        ehMaoirDeIdade(campo);
    }
     /*console.log(campo.validity);exibe lista c critérios de validação = 
     ValidityState{ valid:true, quando os critérios são atendidos / valid:false quando não atendidos}*/
     
     tiposDeErro.forEach(erro => {
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem)
        }
     })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput){
        mensagemErro.textContent = mensagem
    }else{
        mensagemErro.textContent = " ";
    }
}
