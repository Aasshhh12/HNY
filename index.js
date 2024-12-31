setTimeout(() => {
    const textContent = document.getElementById('textContent');
    const imageContent = document.getElementById('imageContent');

    // Hide text content
    textContent.style.opacity = '0';

    // Show image content after the transition
    setTimeout(() => {
      textContent.style.display = 'none';
      imageContent.classList.add('visible');
    }, 1000); // Matches the CSS transition time
  }, 10000);