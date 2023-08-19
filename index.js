window.onload = function() {
    var loading = document.getElementById('loading');
    var content = document.getElementById('content');
  
    // Simulate a delay for demonstration purposes
    setTimeout(function() {
      loading.style.display = 'none';
      content.style.display = 'block';
    }, 2000); // Delay in milliseconds
  };
  