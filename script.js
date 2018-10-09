var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector('button');

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function randColors() {
	let x = [];
	for(let i = 0; i < 6; i++){
		let y = Math.floor(Math.random() * 256);
		x.push(y)
	}
	body.style.background =
	"linear-gradient(to right, rgb("
	+ x[0] + ', ' + x[1] + ', ' + x[2] + '), rgba('
	+ x[3] + ', ' + x[4] + ', ' + x[5] + ') )';
  css.textContent = 'Random color: ' + body.style.background + ';';
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color1.addEventListener('load', setGradient());
color2.addEventListener('load', setGradient());
btn.addEventListener('click', randColors);

console.log(color1.value, color2.value);
