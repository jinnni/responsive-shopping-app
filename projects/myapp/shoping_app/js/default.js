$(window).resize(function(){ //Update dimensions on resize
  sw = document.documentElement.clientWidth;
  sh = document.documentElement.clientHeight;
  checkMobile();
});
  
//Check if Mobile
function checkMobile() {
  mobile = (sw > breakpoint) ? false : true;

  if (!mobile) { //If Not Mobile
     //Show full navigation and search
  }
  else { //Hide 
    if(!$('').hasClass('active')) {
      //Hide full navigation and search
    }
  }
}