

document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.hub-image');
    const hotspots = document.querySelectorAll('.hotspot');
  

  
    hotspots.forEach(hotspot => {
        const index = hotspot.dataset.icon;
    
      hotspot.addEventListener('mousemove', (e) => {
        
        hotspot.style.backgroundImage = `url(assets/image${index}.png)`;
        if(index !== '2') {
            hotspot.style.backgroundSize = '120%';
        }
        if(index === '5') {
            hotspot.style.backgroundPosition = '32% 48%';
        }
        if(index === '1') {
            hotspot.style.backgroundPosition = '60% 55%';
        }
        
      });
  
      hotspot.addEventListener('mouseleave', () => {
        hotspot.style.backgroundImage = 'none';
      });
    });
  });

 

  