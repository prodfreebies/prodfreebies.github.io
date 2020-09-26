const pluginTemplate = (cardTxt, imgSrc, cardHref, cardTitle) => `
    <div class="mx-auto col-md-6 d-flex align-items-stretch mb-4">
        <div class="card">
            <a href="${cardHref}">
                <img class="card-img-top img-raised" src="${imgSrc}">
            </a>
            <div class="card-body">
                <a href="${cardHref}" class="card-title mb-2">
                    <h5>${cardTitle}</h5>
                </a>
                <p class="card-text">${cardTxt} <a href="${cardHref}">Learn more</a>
                </p>
            </div>
        </div>
    </div>`;

const defaultTemplate = (cardTxt, imgSrc, cardHref, cardTitle) => `
    <div class="mx-auto col-md-4 d-flex align-items-stretch mb-4">
        <div class="card">
            <a href="${cardHref}">
                <img class="card-img-top img-raised" src="${imgSrc}">
            </a>
            <div class="card-body">
                <a href="${cardHref}" class="card-title mb-2">
                    <h5>${cardTitle}</h5>
                </a>
                <p class="card-text">${cardTxt} <a href="${cardHref}">Learn more</a>
                </p>
            </div>
        </div>
    </div>`;

function loadCards(template, inputFile, dataSelector, outputSelector) {
    var htmlInput = $.ajax({
        url: inputFile,
        dataType: "html"
    }).done(function (data) {

        var outputContainer = document.querySelector(outputSelector);
        outputContainer.innerHTML = data; // put the output in an element to make the querySelectors work
        var newHTML = ''; // store your new html in here before overwriting the HTML you're looking at

        // change this from htmlInput to the output container where you put the HTML
        $(outputContainer).find(dataSelector).each(function (index, div) {
            const cardTxt = div.querySelector('p').innerHTML;
            const imgSrc = div.querySelector('img').src;
            const cardHref = div.querySelector('a').href;
            const cardTitle = div.querySelector('h1').innerHTML;
            // storing in newHTML variable here
            if (inputFile === "data/instruments.html" || inputFile === "data/effects.html")
                newHTML += pluginTemplate(cardTxt, imgSrc, cardHref, cardTitle);
            else
            newHTML += defaultTemplate(cardTxt, imgSrc, cardHref, cardTitle);
        });

        newHTML = '<div class="row">' + newHTML + '</div>';

        // finally overwrite
        outputContainer.innerHTML = newHTML;
        outputContainer.classList.add('collapse');


    });
}

$(document).ready(function () {
    
    $('.category-header').click(function() {
        console.log('TEST');
        $("i", this).toggleClass("fa-angle-down fa-angle-up");
    });

    // Initialize properties for category header dropdowns
    var catHeaders = document.getElementsByClassName('category-header');
    for (var i = 0; i < catHeaders.length; i++) {
        catHeaders[i].classList.add(["row", "d-flex", "justify-content-center"]);
        catHeaders[i].setAttribute("data-toggle", "collapse");
        catHeaders[i].setAttribute("role", "button");
        catHeaders[i].setAttribute("area-expanded", "false");
        catHeaders[i].setAttribute("href", "#" + catHeaders[i].getAttribute("aria-controls"));
        catHeaders[i].innerHTML = catHeaders[i].innerHTML + " <i class=\"fa fa-angle-down rotate-icon\"></i>";
        orig_html = catHeaders[i].innerHTML;
        new_html = "<p>" + orig_html + "</p>";
        catHeaders[i].innerHTML = new_html;
    }

    loadCards(pluginTemplate, "data/instruments.html", "#bundles > div", "#instruments-bundles-content");
    loadCards(pluginTemplate, "data/instruments.html", "#real-instruments > div", "#instruments-real-instruments-content");
    loadCards(pluginTemplate, "data/instruments.html", "#samplers > div", "#instruments-samplers-content");
    loadCards(pluginTemplate, "data/instruments.html", "#romplers > div", "#instruments-romplers-content");
    loadCards(pluginTemplate, "data/instruments.html", "#subtractive-synths > div", "#instruments-subtractive-synths-content");
    loadCards(pluginTemplate, "data/instruments.html", "#fm-synths > div", "#instruments-fm-synths-content");
    loadCards(pluginTemplate, "data/instruments.html", "#modular-synths > div", "#instruments-modular-synths-content");
    loadCards(pluginTemplate, "data/instruments.html", "#midi > div", "#instruments-midi-content");

    loadCards(pluginTemplate, "data/effects.html", "#chorus > div", "#effects-chorus-content");
    loadCards(pluginTemplate, "data/effects.html", "#tremolo > div", "#effects-tremolo-content");
    loadCards(pluginTemplate, "data/effects.html", "#flanger-phaser > div", "#effects-flanger-phaser-content");
    loadCards(pluginTemplate, "data/effects.html", "#reverb > div", "#effects-reverb-content");
    loadCards(pluginTemplate, "data/effects.html", "#delay-echo > div", "#effects-delay-echo-content");
    loadCards(pluginTemplate, "data/effects.html", "#eq > div", "#effects-eq-content");
    loadCards(pluginTemplate, "data/effects.html", "#panning-spatial > div", "#effects-panning-spatial-content");
    loadCards(pluginTemplate, "data/effects.html", "#compressor > div", "#effects-compressor-content");
    loadCards(pluginTemplate, "data/effects.html", "#distortion > div", "#effects-distortion-content");
    loadCards(pluginTemplate, "data/effects.html", "#gate > div", "#effects-gate-content");
    loadCards(pluginTemplate, "data/effects.html", "#limiter > div", "#effects-limiter-content");
    loadCards(pluginTemplate, "data/effects.html", "#filter > div", "#effects-filter-content");
    loadCards(pluginTemplate, "data/effects.html", "#monitoring > div", "#effects-monitoring-content");
    loadCards(pluginTemplate, "data/effects.html", "#guitar > div", "#effects-guitar-content");
    loadCards(pluginTemplate, "data/effects.html", "#pitch-autotune > div", "#effects-pitch-autotune-content");
    loadCards(pluginTemplate, "data/effects.html", "#modular > div", "#effects-modular-content");

    loadCards(pluginTemplate, "data/samples.html", "#sample-lists > div", "#samples-lists-content");
    loadCards(pluginTemplate, "data/samples.html", "#sample-sites > div", "#samples-sites-content");

});