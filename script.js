// Tema
const inputs = document.querySelectorAll('input[name="theme"]');
inputs.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});

// Contact toggle
function toggleContact() {
    const overlay = document.getElementById('contact-overlay');
    if (!overlay) return;
    overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
}

// Fechar ao clicar no fundo escuro
window.onclick = function(event) {
    ['contact-overlay', 'cert-overlay'].forEach(id => {
        const overlay = document.getElementById(id);
        if (overlay && event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
}

// Certificates toggle
function toggleCertificates() {
    const overlay = document.getElementById('cert-overlay');
    if (!overlay) return;
    overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
}

function copyEmail() {
    navigator.clipboard.writeText("ivompb2000@gmail.com");
    alert("E-mail copiado!");
}

// Contador de dias estudando programação
const daysCounter = document.getElementById('days-counter');
if (daysCounter) {
    const startDate = new Date('2023-06-01');
    const today = new Date();
    const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const daysStr = String(days).padStart(3, '0');
    daysCounter.innerHTML = daysStr.split('').map(d => `<span class="flip-digit">${d}</span>`).join('');
}

// Toggle informações pessoais
function togglePersonal() {
    const details = document.getElementById('personal-details');
    const btn = document.querySelector('.btn-expand');
    if (!details || !btn) return;
    if (details.style.display === 'none') {
        details.style.display = 'block';
        btn.textContent = 'Click To Collapse ▲';
    } else {
        details.style.display = 'none';
        btn.textContent = 'Click To Expand ▼';
    }
}
