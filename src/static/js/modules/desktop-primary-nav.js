/* ==========================================================================
   Desktop Menu Transitions
   Do not apply a transition when hovering from one menu to the next
   ========================================================================== */

'use strict';

var $ = require( 'jquery' );

function init() {
  var $desktopMenu = $( '.primary-nav' ),
      $desktopMenuTrigger = $( '.primary-nav_top-level-list > li' ),
      $desktopMenuChild = $( '.sub-nav_wrapper' ),
      mouseIsInsideMenu = false,
      mouseIsInsideMenuItem = false,
      aMenuItemWasOpened = false,
      isSmall = $( '.sliding-nav_trigger' ).is( ':visible' );

  // On window resize, set the isSmall variable again.
  $( window ).resize( function() {
    isSmall = $( '.sliding-nav_trigger' ).is( ':visible' );
  } );

  // Add aria-expanded
  $desktopMenuChild.attr( 'aria-expanded', 'false' );

  $desktopMenu.mouseleave( function() {
    // Update the mouse and menu state
    aMenuItemWasOpened = false;
    mouseIsInsideMenu = false;

    // Always use a transition when the mouse leaves the entire menu
    $desktopMenu.addClass( 'has-transition' );
  } );

  $desktopMenuTrigger.click( function() {
    if ( !isSmall ) {
      var isExpanded = $desktopMenuChild.attr( 'aria-expanded' ) === 'true';
      $desktopMenuChild.attr( 'aria-expanded', !isExpanded );
    }
  } );

  $desktopMenuTrigger.mouseenter( function() {

    if ( !isSmall ) {
      // Update aria-expanded
      $desktopMenuChild.attr( 'aria-expanded', 'true' );

      // Show the child list, previously hidden by default for the mobile menu.
      $( '.list-expanding_child-list' ).css('display', 'inline-block');

      if ( aMenuItemWasOpened === false ) {
        $desktopMenu.addClass( 'has-transition' );
      } else {
        $desktopMenu.removeClass( 'has-transition' );
      }

      // Update the mouse and menu state
      mouseIsInsideMenu = true;
      mouseIsInsideMenuItem = true;
      aMenuItemWasOpened = true;
    }

  } );

  $desktopMenuTrigger.mouseleave( function() {

    if ( !isSmall ) {
      // Update the menu item state
      mouseIsInsideMenuItem = false;

      // Use a delay to check if the mouse is inside of the menu but not in a
      // list item.
      window.setTimeout( function updateAMenuItemWasOpened() {
        if ( mouseIsInsideMenuItem === false && mouseIsInsideMenu ) {
          aMenuItemWasOpened = false;
        }
      }, 100 );

      // Update aria-expanded
      $desktopMenuChild.attr( 'aria-expanded', 'false' );
    }
  } );
}

// Expose public methods.
module.exports = { init: init };
