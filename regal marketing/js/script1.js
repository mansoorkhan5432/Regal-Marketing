// Menu Toggler Start

//Create function to select elements
const selectElement = (element) => document.querySelector(element);

//Open and close nav on click

selectElement('.menu-icons').addEventListener('click', () => {
    selectElement('nav').classList.toggle('active');
});

// Menu Toogle End 


// video popup start
window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }
  
  function lightbox_open() {
    var lightBoxVideo = document.getElementById("RegalVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    var RegalVideo = document.getElementById("RegalVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    RegalVideo.pause();
  }

// video popup end 

// counter section 

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counterValue').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
    });
    a = 1;
  }
});

