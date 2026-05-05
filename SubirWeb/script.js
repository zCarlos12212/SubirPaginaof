const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.02)";
        card.style.transition = "0.3s";
        card.style.boxShadow = "0 0 15px rgba(0,255,150,0.3)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
    });

});

