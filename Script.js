const header = document.querySelector('h1');  

function setFireEffect() {  
  const text = header.textContent;  
  header.innerHTML = '';  

  for (let i = 0; i < text.length; i++) {  
    const span = document.createElement('span');  
    span.textContent = text[i];  
    span.style.animation = `fire-flicker ${0.5 + Math.random() * 1.5}s infinite alternate`;  
    header.appendChild(span);  
  }  
}  

// Добавьте в CSS  
const fireStyle = document.createElement('style');  
fireStyle.textContent = `  
  @keyframes fire-flicker {  
    0%, 100% { color: #FF0000; text-shadow: 0 0 5px #FF0000; }  
    25% { color: #FF4500; text-shadow: 0 0 10px #FF4500; }  
    50% { color: #FF8C00; text-shadow: 0 0 15px #FF8C00; }  
    75% { color: #FF0000; text-shadow: 0 0 20px #FF0000; }  
  }  
`;  
document.head.appendChild(fireStyle);  

setFireEffect();  