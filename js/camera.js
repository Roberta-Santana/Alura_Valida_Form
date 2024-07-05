const botaoInicarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
//autoplay data-video, com medidas da área de captura da câmera
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
//data-video-canvas, tag canvas, com medidas da área pixel/imagem
const mensagem = document.querySelector('[data-mensagem]');
const botaoEnviarFoto = document.querySelector('[data-enviar]');

let imagemURL = '';

botaoInicarCamera.addEventListener('click', async function (){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true, audio:false});
    
    botaoInicarCamera.style.display = "none";
    campoCamera.style.display = 'block';

    video.srcObject= iniciarVideo; 
})

botaoTirarFoto.addEventListener('click', function(){
    canvas.getContext('2d').drawImage(video, 0,0, canvas.width, canvas.height);
    imagemURL = canvas.toDataURL('image/jpeg');

    campoCamera.style.display = 'none';
    mensagem.style.display = 'block';
})

botaoEnviarFoto.addEventListener('click', ()=>{
    const receberDadosExistentes = localStorage.getItem('cadastro');
    const converterRetorno = JSON.parse(receberDadosExistentes);
    converterRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converterRetorno));

    window.location.href = "./abrir-conta-form-3.html"
})