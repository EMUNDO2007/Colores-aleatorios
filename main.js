const boton = document.querySelector(".boton"),
title = document.querySelector(".title"),
body = document.querySelector(".body");

let aja = "";
let text = "123456789abcdef"

boton.addEventListener("click",e=>{
	e.preventDefault();
	

for (let i = 0; i <=5; i++) {
	
	let newText= parseInt(Math.random()*14);
	aja += text[newText];
	console.log(aja)
	console.log(newText)
	
}
	body.style.background=`#${aja}`
	title.innerText=`#${aja}`
	boton.style.border=`2px solid #${aja}`
	aja = "";
})




