/* ==========================================================================
   Expanded State Utils
   ========================================================================== */

'use strict';

var $ = require( 'jquery' );
var navTimeOut;

function isThisExpanded( $elem ) {
  return $elem.attr( 'aria-expanded' ) === 'true';
}

function isOneExpanded( $elems ) {
  var oneExpanded = false;

  $elems.each( function() {
    if ( isThisExpanded( $( this ) ) ) {
      oneExpanded = true;
    }
  } );

  return oneExpanded;
}

function toggleExpandedState( $elem, state, cb, delay ) {
  delay = delay || 300;
  state = state || !isThisExpanded( $elem );
  clearTimeout( navTimeOut );

  $elem.attr( 'aria-expanded', state );

  if ( cb ) {
    navTimeOut = setTimeout( cb(), delay );
  }
}

module.exports = {
  get: {
    isThisExpanded: isThisExpanded,
    isOneExpanded:  isOneExpanded
  },
  set: {
    toggleExpandedState: toggleExpandedState
  }
};
