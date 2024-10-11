document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário
  
    // Pega os valores dos campos
    const nome = document.getElementById('from_name').value;
    const e_mail = document.getElementById('from_email').value;
    const proposal = document.getElementById('proposal').value;
  
    // Configura o EmailJS
    emailjs.init('GKiUff51LXSvcbmsL'); // Substitua pelo seu User ID do EmailJS
  
    const templateParams = {
      form_name: nome,
      form_email: e_mail,
      proposal: proposal
    };
  
    emailjs.send('service_djmy37s', 'template_tjq3sge', templateParams)
      .then(function(response) {
        console.log('Email enviado com sucesso!', response.status, response.text);
        // Avisa o usuário que o formulário foi enviado
        alert("Proposta enviada!")

        // Limpa os campos do formulário após o envio bem-sucedido
        document.getElementById('contact_form').reset();
      }, function(error) {
        console.log('Falha ao enviar email...', error);
      });
  });
  