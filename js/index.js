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

//     $( ".logos_square" ).hover(function() {
//   }, function() {
//     $( ".logos_square_big" ).removeClass( "animation_in" );
//     $( ".logos_square_big" ).addClass( "animation_out" );
//     $( ".animation_out" ).css( "animation-play-state", 'running' );
//   }
// );






} );
