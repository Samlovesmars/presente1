function toggleEnvelope() {
    const envelope = document.getElementById('envelope');
    const button = document.querySelector('.toggle-btn');
  
    // Reset letter state
    envelope.classList.remove('show-letter');
  
    const isOpening = !envelope.classList.contains('open');
    envelope.classList.toggle('open');
  
    button.textContent = isOpening ? 'Fechar carta' : 'Abrir carta';
  
    if (isOpening) {
      // Wait for flap and seal animation, then reveal letter and hearts together
      setTimeout(() => {
        envelope.classList.add('show-letter');
        createHearts(); // Trigger hearts when letter is shown
      }, 900); // Matches CSS animation
    }
  }
  
  function createHearts() {
    const container = document.getElementById('hearts');
    const envelope = document.getElementById('envelope');
    const numHearts = 50;
  
    const heartStyles = ['❤️', '💖', '💗', '💓', '💞', '💕'];
  
    const rect = envelope.getBoundingClientRect();
    const middleY = rect.top + rect.height / 4;
    const leftX = rect.left;
    const rightX = rect.right;
  
    for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = heartStyles[Math.floor(Math.random() * heartStyles.length)];
  
      // Alternate spawn sides
      const fromLeft = i % 2 === 0;
      const startX = fromLeft ? leftX : rightX;
      const startY = middleY;
  
      heart.style.left = `${startX}px`;
      heart.style.top = `${startY}px`;
  
      // OUTWARD direction: Left side shoots left, right side shoots right
      const baseAngle = fromLeft ? Math.PI : 0; // left = 180°, right = 0°
      const spread = Math.PI / 1; //spread
      const angle = baseAngle + (Math.random() - 0.5) * spread;
      const radius = 200 + Math.random() * 200;
  
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
  
      heart.style.setProperty('--x', `${x}px`);
      heart.style.setProperty('--y', `${y}px`);
      heart.style.animationDuration = 2.5 + Math.random() * 1.5 + 's';
      heart.style.fontSize = 14 + Math.random() * 14 + 'px';
  
      container.appendChild(heart);
  
      setTimeout(() => heart.remove(), 5000);
    }
  }
  