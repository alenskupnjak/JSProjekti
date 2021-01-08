    // Not a ton of code, but hard to
    const nav = document.querySelector('#main');
    console.log(nav);
    
    let topOfNav = nav.offsetTop;
    console.log('topOfNav=',topOfNav);
    
    
    function fixNav() {
      console.log(window.scrollY);
      
      if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.style.color = 'blue';
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
        document.body.style.color ='#444';
      }
    }

    window.addEventListener('scroll', fixNav);