//
// return validation message after user send your name/email by form
//

// function getStatus() {
//     return location.search.split('contato=')[1] ? location.search.split('contato=')[1] : false;
// }

// if(getStatus() === 'sucesso'){
//     alert('Formulário enviado com sucesso!');
// }
// else if(getStatus() === 'erro'){
//     alert('Erro ao enviar formulário, preencha corretamente os campos.');
// }

//
// start document ready function
//

$(document).ready(function() {

  // close mobile menu after click
  // $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
  //   $('.navbar-toggle:visible').click();
  // });

  // open modal on start
  // $('#bannerCampaing').modal('show');

  // bullet open and close
  // var $bgs = $(".zoomin-image");

  // $(".bullet__icon").click(function() {
  //   var $target = $($(this).data('target')).stop(true).fadeToggle();
  //   $bgs.not($target).filter(':visible').stop(true, true).fadeToggle();
  // })

  // youtube modal video
  // $(".btn-watch").click(function () {
  //   var theModal = $(this).data("target"),
  //   videoSRC = $(this).attr("data-video"),
  //   videoSRCauto = videoSRC;
  //   $(theModal + ' iframe').attr('src', videoSRCauto);
  //   $(theModal + ' button.close').click(function () {
  //     $(theModal + ' iframe').attr('src', '');
  //   });
  // });

  // close modal and stop youtube audio video
  // $('#videoCampaing').on('hidden.bs.modal', function (e) {
  //   $('#videoCampaing').find('iframe').attr('src', '');
  // });

  // arrow down animation
  $.fn.flash = function(duration, iterations) {
    duration = duration || 1000; // Default to 1 second
    iterations = iterations || 1; // Default to 1 iteration

    var iterationDuration = Math.floor(duration / iterations);

    for (var i = 0; i < iterations; i++) {
      this.fadeOut(iterationDuration).fadeIn(iterationDuration);
    }
    return this;
  }

  $("#scroll-down").flash(10000, 10);

  // scroll to top
  $(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 1000) {
        $('#scroll-to-top').fadeIn(1500);
      } else {
        $('#scroll-to-top').fadeOut(1500);
      }
    });

    $('#scroll-to-top a').click(function(){
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  });

  $("#scroll-to-top").hide();

  // moodal
  $('.modal').on('show.bs.modal', function(e) {
    const url = e.relatedTarget.dataset.url;

    $.get(url, function (data) {
      $('.modal')
        .find('.modal-content')
        .html(data);
    });
  });
});

//
// handle links with @href started with '#' only
//

$(document).on('click', 'a[href^="#"]', function(e) {
  // target element id
  var id = $(this).attr('href');

  // target element
  var $id = $(id);
  if ($id.length === 0) {
    return;
  }

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = $(id).offset().top - 80;

  // animated top scrolling
  $('body, html').animate({scrollTop: pos}, 500);
});
