window.onload = function() {
    var loading = document.getElementById('loading');
    var content = document.getElementById('content');
  
    setTimeout(function() {
      loading.style.display = 'none';
      content.style.display = 'block';
    }, sec(3)); 
  };


  function sec(seconds) {
    return seconds*1000
  }
  