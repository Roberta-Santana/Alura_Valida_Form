export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g,"");
    validaNumerosRepetidos(cpf);
    console.log(validaNumerosRepetidos(cpf));
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