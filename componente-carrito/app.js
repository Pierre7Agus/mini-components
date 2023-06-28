/*
const $contenedor = document.getElementById("minicarrito__contenedor");
document.addEventListener("click", (e) => {
	if (e.target.matches(".minicarrito--contenedor *")) {
		setInterval(() => {
			$contenedor.classList.toggle("ape-jello");
			$contenedor.classList.toggle("animated");
		}, 5000);
	}
});
*/

const $carroContenedor = document.querySelector(".carro-contenedor-1");
document.querySelector(".carro-flecha").addEventListener("click", (e) => {
	if (
		e.target.matches(".carro-flecha") ||
		e.target.matches(".carro-flecha *")
	) {
		$carroContenedor.style.left = "-500px";
		setTimeout(() => {
			$carroContenedor.style.display = "none";
		}, 700);
	}
});

const $contenedorMiniCarrito = document.getElementById(
	"minicarrito__contenedor"
);
const $flecha = document.querySelector(".minicarrito-flecha");
$contenedorMiniCarrito.addEventListener("click", (e) => {
	if (
		e.target.matches(".minicarrito-flecha") ||
		e.target.matches(".minicarrito-flecha *")
	) {
		$contenedorMiniCarrito.classList.toggle("ocultar");
		$flecha.classList.toggle("minicarrito-flecha-inversa");
		setTimeout(() => {
			$flecha.classList.toggle("reducir");
		}, 400);
	} else if (
		e.target.matches(".minicarrito--contenedor") ||
		e.target.matches(".minicarrito--contenedor *:not(:last-child)")
	) {
		$carroContenedor.style.display = "block";
		setTimeout(() => {
			$carroContenedor.style.left = "0px";
		}, 10);
	}
});
