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
		}, 1000);
	}
});
