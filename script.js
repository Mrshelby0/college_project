const text = "Find and Share Project Ideas ,";

let index = 0;
const typingEffectElement = document.getElementById('typing-effect');

function typeEffect() {
    if (index < text.length) {
        typingEffectElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Adjust typing speed here (milliseconds)
    } else {
        // Pause before restarting
        setTimeout(() => {
            index = 0;
            typingEffectElement.textContent = '';
            setTimeout(typeEffect, 100);
        }, 2000); // Adjust pause duration here (milliseconds)
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);
