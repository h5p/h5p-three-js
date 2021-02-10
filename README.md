H5P Three JS
==========

An H5P wrapper around the popular, easy to use and lightweight 3D library: three.js

There are done some changes nessecary for the CSS2DRenderer and CSS2DObject to work inside virtual tour which is made in this wrapper. They are both commented in the code as "DIFFER FROM ORGINAL THREE.JS".

This is setting opacity to 0 instead of display none for the CSS2DObject to make the objects possible to tab into even when out of view. Without this accesibility and keyboard naviagtion wouldn't be possible.

The other change is to not use the zOrder for the CSS2DRenderer. With the zOrder it is impossible to know how high the zIndex can become. In h5p-three-image increased z-index is set when an element is focused, dragged or hovered and that is not possible with zOrder done here.