/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('Stardate 235678.89: JavaScript from js/js.js is up and running.');
// the image names should be real image names
var myGallery = [
  "image-01.png",
  "image-02.png",
  "image-03.png",
  "image-04.png",
  "image-05.png",
  "image-06.png"
];

for (i = 0; i < myGallery.length; i++) {
	// note the shorthand code below
  exhibition.innerHTML += '<img src="images/' + myGallery[i] + '" alt="from my galleries">';
}
// let the loop create the HTML for your gallery
