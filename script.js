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
      mainDiv.appendChild(waveDiv);
    }
    
    // Append the main div to the container
    var container = document.querySelector('.container');
    container.appendChild(mainDiv);
  }