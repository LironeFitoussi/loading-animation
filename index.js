window.onload = function() {
    var loading = document.getElementById('loading');
    var content = document.getElementById('content');
  
    // Simulate a delay for demonstration purposes
    setTimeout(function() {
      loading.style.display = 'none';
      content.style.display = 'block';
    }, sec(3)); // Delay in milliseconds
  };


  function sec(seconds) {
    return seconds*1000
  }
  