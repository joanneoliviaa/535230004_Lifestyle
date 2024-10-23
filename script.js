window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.nav-link');

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        let isValid = true;

        $(this).find('input, textarea').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).addClass('is-invalid'); 
            } else {
                $(this).removeClass('is-invalid'); 
            }
        });

        if (isValid) {
            $('#smallModal').modal('show');
            $(this).trigger('reset'); 
        } else {
            alert('Please fill in all fields correctly.');
        }
    });
});

