javascript:(function(){   
    
var scriptUrl = 'https://cdn.jsdelivr.net/gh/chiruchaitanya1470/aup-converters/testing.js'; 
   var script = document.createElement('script');
    script.type="text/javascript";
    script.src = scriptUrl;
    script.onload = function() {
    console.log('Script loaded successfully');
    };  
    script.onerror = function() {
    console.error('Failed to load script:', scriptUrl);
    };    
    document.body.appendChild(script);
})();
