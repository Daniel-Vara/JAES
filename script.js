document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    // Funcionalidade do Menu Hamburger
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        // Adiciona/Remove a classe 'active' para o ícone (opcional, se for usar um ícone animado)
        menuToggle.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um link (útil para navegação de seção)
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                menuToggle.classList.remove('active');
            }
        });
    });

    // Funcionalidade de destaque do link de navegação ao rolar (ScrollSpy)
    const sections = document.querySelectorAll('section[id], header[id]');
    const navHeight = document.getElementById('main-nav').offsetHeight;

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 1; // Ajuste para o cabeçalho fixo
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
});