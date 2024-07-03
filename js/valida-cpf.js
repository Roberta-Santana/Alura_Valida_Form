export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g,"");
    console.log("validade primeiro e segundo digitos");
    console.log(validaPrimeiroDigito(cpf) , validaSegundoDigito(cpf) );
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        console.log(campo.validity);
        campo.setCustomValidity("esse CPF não é válido");
    } else{console.log("Esse é um CPF válido")}
}
/* export default = função será exportada como padrão, quando chamar o arq valida-cpf
    a var cpf vai receber o valor do campo, com o método replace()
    replace recebe dois parâmetros(o que a gente quer substituir, pelo que será substitiuido)
    no caso vai buscar onde tem ponto e hifem, e substituir por nada
 */

function validaNumerosRepetidos(cpf){
    const numerosRepetidos = [
        '00000000000', '11111111111', '22222222222', '33333333333', '44444444444',
        '55555555555', '66666666666', '77777777777', '88888888888', '99999999999'
    ]
    return numerosRepetidos.includes(cpf);
    /* funcão que testa se campo.value são valores da array numerosRepetidos e return true ou false*/
}


function validaPrimeiroDigito(cpf){
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho<9; tamanho++){
        soma+=cpf[tamanho] *multiplicador;
        multiplicador--;
    }
    soma = (soma*10)%11;
    if(soma ==10 || soma == 11){
        soma=0;
    }
    return soma !=cpf[9];
}

function validaSegundoDigito(cpf){
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho<10; tamanho++){
        soma+=cpf[tamanho] *multiplicador;
        multiplicador--;
    }
    soma = (soma*10)%11;
    if(soma ==10 || soma == 11){
        soma=0;
    }
    return soma !=cpf[10];
}