document.addEventListener("DOMContentLoaded", function () {
    const fases = document.querySelectorAll(".fase");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("opacity-100", "translate-y-0");
                entry.target.classList.remove("opacity-0", "translate-y-10");
            }
        });
    }, { threshold: 0.2 }); // Se activa cuando el 20% del elemento es visible

    fases.forEach(fase => {
        observer.observe(fase);
    });
});
