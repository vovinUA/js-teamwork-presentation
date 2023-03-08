VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 25,
    speed: 400,
    easing:"cubic-bezier(.03,.98,.52,.99)",
    perspective:500,
    transition:true
});

function addScrollbarListeners() {
    const scrollables = document.querySelectorAll('.scrollable');
    scrollables.forEach(scrollable => {
      const magentaColor = [255, 0, 255];
      const cyanColor = [0, 255, 255];
      let isScrollingUp = false;
  
      scrollable.addEventListener('scroll', (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  
        const currentColor = getColorFromPercentage(
          percentage,
          magentaColor,
          cyanColor
        );
  
        scrollable.style.setProperty('--scrollbar-thumb-color', currentColor);
  
        if (isScrollingUp && scrollTop === 0) {
          isScrollingUp = false;
        } else if (!isScrollingUp && scrollTop + clientHeight === scrollHeight) {
          isScrollingUp = true;
        }
      });
  
      function getColorFromPercentage(percentage, startColor, endColor) {
        const currentColor = [];
        for (let i = 0; i < startColor.length; i++) {
          const range = endColor[i] - startColor[i];
          const value = startColor[i] + range * (percentage / 100);
          currentColor.push(Math.round(value));
        }
        return `rgb(${currentColor.join(',')})`;
      }
    });
  }
  
  addScrollbarListeners();