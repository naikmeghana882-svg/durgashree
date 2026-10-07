const form = document.querySelector(".booking-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const eventType = form.querySelector("select").value;
    const date = form.querySelector('input[type="date"]').value;
    const location = form.querySelectorAll('input[type="text"]')[1].value;
    const requirements = form.querySelector("textarea").value;

    const message =
        "Hello Durgashree Decoration!%0A%0A" +
        "I would like to book a decoration service.%0A%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "Event: " + eventType + "%0A" +
        "Date: " + date + "%0A" +
        "Location: " + location + "%0A" +
        "Requirements: " + requirements;

    const whatsappNumber = "919731035391";

    const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + message;

    window.open(whatsappURL, "_blank");
});
