const searchInput = document.querySelector("#jersey-search");
const searchMessage = document.querySelector("#search-message");
const jerseyCards = document.querySelectorAll(".ss, .o, .i, .jj");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();
    let visibleCards = 0;

    jerseyCards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();
        const cardIsVisible = cardText.includes(searchText);

        card.style.display = cardIsVisible ? "inline-block" : "none";

        if (cardIsVisible) {
            visibleCards++;
        }
    });

    if (visibleCards === 0) {
        searchMessage.textContent = "No jerseys found.";
    } else {
        searchMessage.textContent = visibleCards + " jersey result(s) found.";
    }
});