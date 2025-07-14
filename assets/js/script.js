document.addEventListener('DOMContentLoaded', function() {
    
    const body = document.body;
    const header = document.getElementById('header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button'); // Botão de fechar

    // Inicializa a biblioteca de Animação ao Rolar
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        disable: false, // ANIMAÇÕES ATIVADAS PARA MOBILE
    });

    // Lógica do Header que muda ao rolar
    const checkHeaderScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', checkHeaderScroll);
    checkHeaderScroll();

    // Lógica do Menu Mobile 100% Corrigida
    const toggleMenu = () => {
        mobileMenuButton.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    };

    mobileMenuButton.addEventListener('click', toggleMenu);
    mobileMenuCloseButton.addEventListener('click', toggleMenu);

    // Lógica de Rolagem Suave para todos os links internos
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }

            // Fecha o menu mobile se estiver aberto
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

});