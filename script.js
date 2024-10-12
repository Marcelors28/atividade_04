
  // Validação do Formulário de Contato

document.getElementById('contact-form').addEventListener('submit', function(event) {

    event.preventDefault();
  
    // Validação e envio do formulário
  
    const nome = event.target.nome.value;
  
    const email = event.target.email.value;
  
    const mensagem = event.target.mensagem.value;
  
   
  
    if (nome && email && mensagem) {
  
      // Enviar dados via API (exemplo com EmailJS)
  
      emailjs.send('service_id', 'template_id', {
  
        nome: nome,
  
        email: email,
  
        mensagem: mensagem,
  
      }).then(response => {
  
        alert('Mensagem enviada com sucesso!');
  
      }).catch(error => {
  
        alert('Erro ao enviar a mensagem.');
  
      });
  
    } else {
  
      alert('Por favor, preencha todos os campos obrigatórios.');
  
    }
  
  });
   

  
  // Exemplo de consumo de API para carregar testemunhos
  
  fetch('https://api.exemplo.com/testemunhos')
  
    .then(response => response.json())
  
    .then(data => {
  
      const testemunhosContainer = document.querySelector('.testemunhos-container');
  
      data.testemunhos.forEach(testemunho => {
  
        const testemunhoCard = document.createElement('div');
  
        testemunhoCard.classList.add('testemunho-card');
  
        testemunhoCard.innerHTML = `
  
          <img src="${testemunho.foto}" alt="${testemunho.nome}">
  
          <h4>${testemunho.nome}</h4>
  
          <p>${testemunho.texto}</p>
  
        `;
  
        testemunhosContainer.appendChild(testemunhoCard);
  
      });
  
    })
  
    .catch(error => {
  
      console.error('Erro ao carregar os testemunhos:', error);
  
    });
  
