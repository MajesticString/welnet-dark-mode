(function() {

        var link = document.createElement('link');  
  
        // set the attributes for link element 
           link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      
        link.href = 'https://raw.githubusercontent.com/MajesticString/welnet-dark-mode/main/style.css';  
  
        // Get HTML head element to append  
        // link element to it  
        document.getElementsByTagName('HEAD')[0].appendChild(link);  

})();
