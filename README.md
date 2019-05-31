This is a JavaScript file that uses a customized library (lib220) to access an image from a URL, attributes of an image etc.,.
It uses a functional approach of applying a well-abstracted function on each pixel of an image to warp, modify an image.
The higher-order function performs the task on any pixel, catering to all edge cases (in the case of blurring where adjacent pixels' values are averaged into the current pixel's value, the function simply lessens the blurring as you approach the edges).
The lib220 library is not a publicly available library and was custom-made for the COMPSCI 220 class at UMass.

People who want to use this code may have to substitute lib220 with an appropriate public library and an appropriate method from the library they substitute.
