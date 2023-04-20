// Importa a biblioteca EmailJS
import emailjs from 'emailjs-com';

// Configuração do serviço de e-mail
emailjs.init("wendellborges2003@gmail.com");

// Função para enviar o e-mail
function enviarEmail(event) {
  event.preventDefault();
  
  // Define os parâmetros do e-mail
  const params = {
    assunto: document.getElementById("assunto").value,
    email: document.getElementById("email").value,
    mensagem: document.getElementById("mensagem").value
  };
  
  // Envia o e-mail
  emailjs.send('seu_servico_id', 'seu_modelo_id', params)
    .then(function(response) {
       console.log("E-mail enviado com sucesso!", response);
    }, function(error) {
       console.log("Ocorreu um erro ao enviar o e-mail", error);
    });
}

// Adiciona um ouvinte de eventos ao botão "Enviar"
document.getElementById("enviar").addEventListener("click", enviarEmail);
