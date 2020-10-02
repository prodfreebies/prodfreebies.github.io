$(document).ready(function() {
    loadCardsToPage();

    // Disable new tabs for links with the same-tab class
    var noNewTabLinks = document.getElementsByClassName('same-tab');
    for (var i = 0; i < noNewTabLinks.length; i++) {
        noNewTabLinks[i].setAttribute("target", "_self");
    }
});