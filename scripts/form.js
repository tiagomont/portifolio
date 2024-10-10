document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário
  
    // Pega os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const proposal = document.getElementById('proposal').value;
  
    // Configura o EmailJS
    emailjs.init('y1fXVUYtUZxYt97Hm'); // Substitua pelo seu User ID do EmailJS
  
    const templateParams = {
      to_name: name,
      from_email: email,
      message_html: `Olá, sou ${name}, meu email é ${email} e a minha proposta: ${proposal}`
    };
  
    emailjs.send('service_djmy37s', 'template_xzasxpt', templateParams)
      .then(function(response) {
        console.log('Email enviado com sucesso!', response.status, response.text);
      }, function(error) {
        console.log('Falha ao enviar email...', error);
      });
  });
  