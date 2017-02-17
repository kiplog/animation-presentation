//
// for animation Presentation
// 02/17/17



var firstId = document.querySelector( '#some-id' );


elem.classList.toggle( 'some-other-class' ); // Add or remove class


var elem = document.querySelector( '.some-class' );
elem.addEventListener( 'click', function( event ) {
    // Do stuff
}, false);



/**
 * Determine if an element is in the viewport
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = function ( elem ) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var elem = document.querySelector( '#some-element' );

if ( isInViewport( elem ) ) {
  elem.classList.add( 'in-viewport' );
} else {
  elem.classList.remove( 'in-viewport' );
}
