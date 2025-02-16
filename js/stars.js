const stars = [];
function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 200; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
    stars.push({ 
      star, 
      x: (Math.random() * 2 - 1) * 0.1, 
      y: (Math.random() * 2 - 1) * 0.1 
    });
  }
}

createStars();

function animateStars() {
  stars.forEach(({star, x, y}) => {
    let top = parseFloat(star.style.top);
    let left = parseFloat(star.style.left);
    
    top = (top + y);
    left = (left + x);
    
    // Wrap around screen edges
    if (top > 100) top = 0;
    if (top < 0) top = 100;
    if (left > 100) left = 0;
    if (left < 0) left = 100;
    
    star.style.top = top + "%";
    star.style.left = left + "%";
  });
  requestAnimationFrame(animateStars);
}

animateStars();