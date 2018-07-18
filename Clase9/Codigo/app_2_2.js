
function Pintar(col)
{
	document.body.style.backgroundColor	=col;
}

var boton = document.getElementById("boton");

boton.addEventListener('mouseout', function() {
    console.log(Pintar('#ffffff'));
});

 boton.addEventListener('mouseover', function() {
    console.log(Pintar('#ff0000'));
});