$( document ).ready(function() {

// фигуры двигаются

    $( ".circle" ).draggable({ axis: "y" });
    $( ".circle" ).draggable({ revert: true });
      $( ".circle_hole" ).droppable({
        drop: function( event, ui ) {
          let url = "affiche.html";
            $(location).attr('href',url);
          }
        });


      $( ".polygon" ).draggable({ axis: "y" });
      $( ".polygon" ).draggable({ revert: true });
      $( ".polygon_hole" ).droppable({
        drop: function( event, ui ) {
          let url = "https://zsurrrrr.github.io/podhodit_game/";
            $(location).attr('href',url);
          }
        });

      $( ".square" ).draggable({ axis: "y" });
      $( ".square" ).draggable({ revert: true });
      $( ".square_hole" ).droppable({
        drop: function( event, ui ) {
          let url = "merch.html";
            $(location).attr('href',url);
          }
        });

      $( ".polygon_1" ).draggable({ axis: "y" });
      $( ".polygon_1" ).draggable({ revert: true });
      $( ".polygon_hole_1" ).droppable({
        drop: function( event, ui ) {
          let url = "index.html";
            $(location).attr('href',url);
          }
        });
  


// выдвигающееся меню
// белое

    $( ".logo" ).click(function(){
      $( ".logos_square_big" ).removeClass( "animation_out" );
      $( ".logos_square_big" ).addClass( "animation_in" );
      $( ".logo_0" ).removeClass( "animation_out" );
      $( ".logo_0" ).addClass( "animation_in" );
      $( ".animation_in" ).css( "animation-play-state", 'running' );
      $( ".logos_square_0" ).css( "display", 'none' );

    });

    $( ".logo_0" ).hover(function() {
  }, function() {
      $( ".logos_square_0" ).css( "display", 'block' );
      $( this ).removeClass( "animation_in" );
      $( this ).addClass( "animation_out" );
      $( ".logos_square_big" ).removeClass( "animation_in" );
      $( ".logos_square_big" ).addClass( "animation_out" );
      $( ".animation_out" ).css( "animation-play-state", 'running' );

      }
    );

// синее

    $( ".logo_blue" ).click(function(){
      $( ".logos_square_big_blue" ).removeClass( "animation_out" );
      $( ".logos_square_big_blue" ).addClass( "animation_in" );
      $( ".logo_0_blue" ).removeClass( "animation_out" );
      $( ".logo_0_blue" ).addClass( "animation_in" );
      $( ".animation_in" ).css( "animation-play-state", 'running' );
      $( ".logos_square_01" ).css( "display", 'none' );

    });

    $( ".logo_0_blue" ).hover(function() {
  }, function() {
      $( ".logos_square_01" ).css( "display", 'flex' );
      $( this ).removeClass( "animation_in" );
      $( this ).addClass( "animation_out" );
      $( ".logos_square_big_blue" ).removeClass( "animation_in" );
      $( ".logos_square_big_blue" ).addClass( "animation_out" );
      $( ".animation_out" ).css( "animation-play-state", 'running' );

      }
    );

// значение фигур

  $( ".circle" )
    .on( "mouseenter", function() {
      $( ".text_2" ).css( "display", 'block' );
      $( ".text_1" ).css( "display", 'none' );
    } )
    .on( "mouseleave", function() {
      $( ".text_1" ).css( "display", 'block' );
      $( ".text_2" ).css( "display", 'none' );
    } );

    $( ".polygon" )
      .on( "mouseenter", function() {
        $( ".text_3" ).css( "display", 'block' );
        $( ".text_1" ).css( "display", 'none' );
      } )
      .on( "mouseleave", function() {
        $( ".text_1" ).css( "display", 'block' );
        $( ".text_3" ).css( "display", 'none' );
      } );

    $( ".square" )
      .on( "mouseenter", function() {
        $( ".text_4" ).css( "display", 'block' );
        $( ".text_1" ).css( "display", 'none' );
      } )
      .on( "mouseleave", function() {
        $( ".text_1" ).css( "display", 'block' );
        $( ".text_4" ).css( "display", 'none' );
      } );

      

// инвертирующиеся фигуры

  // $( ".circle" ).hover(function() {
  //   $( this ).css( "background-image", "url('../img/circle_1.svg')" );
  //   $( ".polygon" ).css( "background-image", "url('../img/polygon_1.svg')" );
  //   $( ".square" ).css( "background-image", "url('../img/square_1.svg')" );
  //   $( ".index_screen_1" ).css( "background-color", '#ffffff' );
  //   $( "body" ).css( "background-color", '#ffffff' );
  //   }
  // );

// вертикальный скролл

// var $hor = $("#horizontal");
//
// $("body").css('padding-bottom', $hor[0].scrollWidth - $hor.outerWidth());
//
// $(window).on('scroll', function () {
//   var top = $(document).scrollTop();
//   var lim = $hor.position().top - $hor[0].scrollLeft - ($(window).height() - $hor.outerHeight()) / 2;
//   var width = $hor[0].scrollWidth - $hor.outerWidth();
//   var delta = Math.min(Math.max(top - lim, 0), width);
//
//   $hor[0].scrollLeft = delta;
//   $("body").css({'padding-top': delta, 'padding-bottom': width - delta});
// });

// буклет

$( ".poster_4" )
  .on( "mouseenter", function() {
    $( ".poster_4_b" ).css( "display", 'block' );
    $( ".poster_4" ).css( "display", 'none' );
  } )
  .on( "mouseleave", function() {
    $( ".poster_4" ).css( "display", 'block' );
    $( ".poster_4_b" ).css( "display", 'none' );
  } );


} );


// музычка.

$(function(){
  $(".fof_text").click(function(){
    meow.play();
});
});