export default function ehMaoirDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity("SET CUSTOM VALIDITY - O usuário não é maior de idade");
    }
}

function validaIdade(data){
    const dataAtual = new Date();//vazia, data de hoje
    const dataMais18 = new Date(data.getUTCFullYear()+18, data.getUTCMonth(), data.getUTCDate());
    //pegou os atributos da data/campo passado via parametro, add 18 ao ano, 

    return dataAtual>=dataMais18;//comparou se dataHoje >= 18 anos somados a data de nascimento passada via campo
}