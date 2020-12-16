var accordions = document.getElementsByClassName('accordion');

for (var i=0; i<accordions.length; i++) {
    accordions[i].onclick = function() {
        $(this).find('i').toggleClass('fa-caret-right fa-caret-down');

        var content = this.nextElementSibling;

        if( content.style.maxHeight) {

            content.style.maxHeight = null;
        
        }

        else {

            content.style.maxHeight = content.scrollHeight + 'px';
        }
    }
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000);
}
