// -------------------------------
// Section Toggle Function
// -------------------------------
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// -------------------------------
// Collapsible Functionality
// -------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;

            if (content.classList.contains('active')) {
                content.classList.remove('active');
            } else {
                // Close any other open collapsibles
                document.querySelectorAll('.collapsible-content.active').forEach(openContent => {
                    openContent.classList.remove('active');
                    openContent.previousElementSibling.classList.remove('active');
                });

                content.classList.add('active');
            }
        });
    });
});