$( document ).ready(function() {

  $( function() {
    $( ".circle" ).draggable({ axis: "y" });
    $( ".circle" ).draggable({ revert: true });
    $( ".polygon" ).draggable({ axis: "y" });
    $( ".polygon" ).draggable({ revert: true });
    $( ".square" ).draggable({ axis: "y" });
    $( ".square" ).draggable({ revert: true });
      // $( ".circle_hole" ).droppable({
      //   drop: function( event, ui ) {
      //     // $( ".fin" ).css( "display", 'block' );
      //     // $( ".content2" ).css( "display", 'none' );
      //     // $( ".back" ).css( "background-color", '#5687FF' );
      //     // $(".knopka").click(function() {
      //     //   $( ".fin" ).css( "display", 'none' );
      //     //   $( ".content1" ).css( "display", 'block' );
      //     //   $( ".back" ).css( "background-color", '#5687FF' );
      //   });
      //   }
      });

// выдвигающееся меню

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

// инвертирующиеся фигуры

        $( ".circle" ).hover(function() {
      }, function() {
          $( this ).css( "background-image", url('../img/circle_1.svg') );
          $( ".polygon" ).css( "background-image", url('../img/polygon_1.svg') );
          $( ".square" ).css( "background-image", url('../img/square_1.svg') );
          $( ".index_screen_1" ).css( "background-color", '#ffffff' );
      }
    );





} );





