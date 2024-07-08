    // interação sibebar onde a barra de menu abre e fecha ao prescionar o botao X e hamburguer
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("footer").style.marginLeft = "250px";
      }
      
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.getElementById("footer").style.marginLeft= "0";
      }

      
    //interação do carrossel onde ele faz a transicão de fotos automatico
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 3000); // Change image every 2 seconds
    }

    // interção no formulario de envio depois de todos os campos preenchido clicando no bt enviar e limpando os campos apos o envio.
    document.getElementById('cadastro-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
    
        // Verifique se todos os campos obrigatórios estão preenchidos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const notificacoes = document.querySelector('input[name="notificacoes"]:checked');
        const mensagem = document.getElementById('mensagem').value.trim();
    
        if (nome && email && telefone && notificacoes && mensagem) {
            // Todos os campos obrigatórios estão preenchidos
            alert('Formulário enviado com sucesso!');
    
            // Limpa os campos do formulário
            document.getElementById('cadastro-form').reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
    
    
      