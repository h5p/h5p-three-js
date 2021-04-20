H5P Three JS
==========

An H5P wrapper around the popular, easy to use and lightweight 3D library: three.js

## Changes

There has been some changes made to the CSS2DRenderer and CSS2DObject to ensure that it works as intended for the Virtual Tour content type which utilises this library. They are all commented in the code as "DIFFER FROM ORIGINAL THREE.JS".

* `opacity: 0` used instead of `display: none` for the CSS2DObject.
    * This enables objects to tabbed in to even when out of view. Without this accesibility and keyboard naviagtion wouldn't be possible.
    * This also required `pointer-events: none` to also be set to prevent objects being interacted with.
* The removal of zOrder for the CSS2DRenderer.
    * With the zOrder it is impossible to know how high the zIndex can become. In h5p-three-image increased z-index is set when an element is focused, dragged or hovered and that is not possible with zOrder done here.
* Forced the position of CSS2DObjects to be set as whole numbers rather than decimals.
    * When the user moved the camera around the label would draw thin black lines around the scene in Safari. By rounding to the nearest whole pixel value the issue stops happening.
