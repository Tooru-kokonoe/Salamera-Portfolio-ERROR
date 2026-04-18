document.getElementById('download-cv').addEventListener('click', () => {
    alert("Requesting secure CV download...");
});

function toggleBio() {
    const extraBio = document.getElementById('extra-bio');
    const btn = document.querySelector('.btn-text');
    
    if (extraBio.classList.contains('hidden')) {
        extraBio.classList.remove('hidden');
        btn.innerText = "Show Less ➔";
    } else {
        extraBio.classList.add('hidden');
        btn.innerText = "Read More ➔";
    }
}

const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    
    if (name.length < 2) {
        feedback.textContent = "Please provide a valid name.";
        feedback.style.color = "#ff4d4d";
    } else {
        feedback.textContent = `Success! Message sent for ${name}.`;
        feedback.style.color = "#6366f1";
        contactForm.reset();
    }
});

window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.glass-card, .project-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});