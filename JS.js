document.addEventListener("DOMContentLoaded", function() {
    // Get all the section headings
    var headings = document.querySelectorAll("h2");

    // Add click event listener to each heading
    headings.forEach(function(heading) {
        heading.addEventListener("click", function() {
            // Toggle the visibility of the next sibling element (section content)
            this.nextElementSibling.classList.toggle("show");
        });
    });
});
