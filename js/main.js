function main () {
    document.addEventListener("DOMContentLoaded", function () {
       var pop = Popcorn("#video");
       pop.controls(false);
       pop.loop(true);
       pop.play();
    }, false);
}

$(document).ready(function() {
	main();
});