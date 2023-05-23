var isCreatingMainDiv = false;



function startCreatingMainDiv(event) {
  isCreatingMainDiv = true;
  createMainDiv(event);
}

function stopCreatingMainDiv() {
  isCreatingMainDiv = false;
}

function ripple(event){
  if(isCreatingMainDiv){
    createMainDiv(event)
  }
}

function createMainDiv(event) {
    
      // Get the click coordinates
      var x = event.clientX;
      var y = event.clientY;
    
      // Create the main div element
      var mainDiv = document.createElement('div');
      mainDiv.classList.add('main');
    
      // Set the position of the main div to the click coordinates
      mainDiv.style.left = x + 'px';
      mainDiv.style.top = y + 'px';
    
      // Create the wave divs
      for (var i = 1; i <= 3; i++) {
      var waveDiv = document.createElement('div');
      waveDiv.classList.add('wave', 'wave' + i);
      
      // Give waves randomized shape

      waveDiv.style.borderTopLeftRadius = getRandomPercentage(80,100);
      waveDiv.style.borderTopRightRadius = getRandomPercentage(80,100);
      waveDiv.style.borderBottomLeftRadius = getRandomPercentage(80,100);
      waveDiv.style.borderBottomRightRadius = getRandomPercentage(80,100);

      function getRandomPercentage(min, max) {
        var randomPercentage = Math.floor(Math.random() * (max - min + 1) + min);
        return randomPercentage + '%';
      }

      // Append Wave to main Div

      mainDiv.appendChild(waveDiv);
      }
    
      // Append the main div to the container
      var container = document.querySelector('.container');
      container.appendChild(mainDiv);

        
  }


  