// -------------------------------
// Section Toggle Function
// -------------------------------
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

(function() {
    if (typeof window.showSection === "function") {
        const original = window.showSection;
        window.showSection = function(sectionId) {
            original(sectionId);
            try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); }
        };
    }
})();


// Collapsible: ensure one open at a time and arrow state sync
document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(btn => {
        btn.addEventListener('click', () => {
            // close others
            document.querySelectorAll('.collapsible.active').forEach(openBtn => {
                if (openBtn !== btn) {
                    openBtn.classList.remove('active');
                    const c = openBtn.nextElementSibling;
                    if (c && c.classList) c.classList.remove('active');
                }
            });
            // toggle current
            btn.classList.toggle('active');
            const content = btn.nextElementSibling;
            if (content && content.classList) content.classList.toggle('active');
        });
    });
});
