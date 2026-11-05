
const carrosseis = document.querySelectorAll(".carrossel-materiais");

carrosseis.forEach((carrossel) => {
    let arrastando = false;
    let inicioX = 0;
    let rolagemInicial = 0;

    carrossel.addEventListener("mousedown", (evento) => {
        arrastando = true;
        inicioX = evento.pageX;
        rolagemInicial = carrossel.scrollLeft;
    });

    window.addEventListener("mouseup", () => {
        arrastando = false;
    });

    carrossel.addEventListener("mouseleave", () => {
        arrastando = false;
    });

    carrossel.addEventListener("mousemove", (evento) => {
        if (!arrastando) return;

        evento.preventDefault();

        const distancia = evento.pageX - inicioX;
        carrossel.scrollLeft = rolagemInicial - distancia;
    });
});
