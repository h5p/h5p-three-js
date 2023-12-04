H5P Three JS
==========

An H5P wrapper around the popular, easy to use and lightweight 3D library: three.js

## Changes

Changes have been made. See the `patches` folder.  
Patches are relative to the dependency version. Should the dependency version change then the patch will have to be recreated.  
Workflow for further patching:  
```
# make the change(s)
nano node_modules/three/someFile.js

# run patch-package to create a .patch file
npx patch-package three

# commit the patch file(s) located in the "patches" folder
git add .
git commit -m "change someFile.js"
```
Changes have been made to the CSS2DRenderer:

* `opacity: 0` used instead of `display: none` for the CSS2DObject.
    * This enables objects to tabbed in to even when out of view. Without this accesibility and keyboard naviagtion wouldn't be possible.
    * This also required `pointer-events: none` to also be set to prevent objects being interacted with.
* The removal of zOrder for the CSS2DRenderer.
    * With the zOrder it is impossible to know how high the zIndex can become. In h5p-three-image increased z-index is set when an element is focused, dragged or hovered and that is not possible with zOrder done here.
* Forced the position of CSS2DObjects to be set as whole numbers rather than decimals.
    * When the user moved the camera around the label would draw thin black lines around the scene in Safari. By rounding to the nearest whole pixel value the issue stops happening.
