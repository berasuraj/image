var productImage = document.getElementById("product-image");
var imgThumbnail = document.getElementById("left-section");

imgThumbnail.addEventListener("click", function() {
	if(event.target.tagName == "IMG") {
		productImage.src = event.target.src;
	}
}, false);