/* ==========================================================================
   ARIA State

   Code conventions copied from the following with major modifications:

   - https://github.com/IBM-Watson/a11y.js
     Copyright (c) 2014 IBM
   ========================================================================== */

'use strict';

var ariaStatesConfig = require( '../../config/aria-states-config' );
var ariaState;


// Private Properties

var _statePrefix = 'is';
var _ariaStatePrefix = 'aria-';


// Private Methods

function _defineProperty( state, element, object ) {
  var _value = object[state] || false;
  var _state = state;
  var _element = element;

  Object.defineProperty( object, state, {
    enumerable:   true,
    configurable: true,
    get: function() {
      return _value;
    },
    set: function( value ) {
      _value = value;
      ariaState.set( _state, _element, _value );
    }
  } );

  ariaState.set( _state, _element, _value );

  return object;
}

function _validateState( state ) {
  return Boolean( ariaStatesConfig[_ariaStatePrefix + state] );
}


// Public Methods

ariaState = {

  create: function create( state, element ) {
    if ( _validateState( state ) === false ||
         element instanceof HTMLElement === false ) {
      throw new Error( 'Invalid Arguments' );
    }

    return this.define( state, element, {} );
  },

  define: function define( state, element, object ) {
    if ( _validateState( state ) ) {
      state = _statePrefix + state.charAt( 0 ).toUpperCase() +
              state.substring( 1 );
      _defineProperty( state, element, object );
    }

    return object;
  },

  get: function get( state, element ) {
    return element.getAttribute( ariaStatesConfig[_ariaStatePrefix + state] );
  },

  set: function set( state, element, value ) {
    state = state.substr( 0, 2 ) === 'is' && state.substr( 2 ) || state;
    state = state.toLowerCase();
    if ( _validateState( state ) ) {
      state = _ariaStatePrefix + state;
      element.setAttribute( state, value );
    }

    return element;
  }

};

module.exports = ariaState;
