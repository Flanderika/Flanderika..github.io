//slider VV

let settings = {
    fill: '#FEE600',
    background: '#E1E1E3'
  }
  
  let sliders = document.querySelectorAll('.calculate__picker');
  let rubSlider = document.getElementById("rubRange");
  let monthSlider = document.getElementById("monthRange");
  let calcOutput = document.getElementById('calcValue');
  calcOutput.innerHTML = Math.round(rubSlider.value / monthSlider.value);
  rubSlider.oninput = function () {
    calcOutput.innerHTML = Math.round(rubSlider.value / monthSlider.value);
  }
  monthSlider.oninput = function () {
    calcOutput.innerHTML = Math.round(rubSlider.value / monthSlider.value);
  }
  Array.prototype.forEach.call(sliders, (slider) => {
    slider.querySelector('input').addEventListener('input', (event) => {
      slider.querySelector('span').innerHTML = event.target.value;
      applyFill(event.target);
    });
    applyFill(slider.querySelector('input'));
  });
  
  function applyFill(slider) {
    const percentage = 100 * (slider.value - slider.min) / (slider.max - slider.min);
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
    slider.style.background = bg;
  }
  
  //slider ^^