

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

    const securityHotspot = document.querySelector('.hotspot-lock');
    const securityVideo = document.getElementById('security-video');
    
    securityHotspot.addEventListener('mouseenter', () => {
      securityVideo.style.display = 'block';
      securityVideo.play();
    });
    
    securityHotspot.addEventListener('mouseleave', () => {
      securityVideo.style.display = 'none';
      securityVideo.pause();
      securityVideo.currentTime = 0; // Reset to start
    });
  });




 

  