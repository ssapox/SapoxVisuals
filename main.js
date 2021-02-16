function dark_theme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function fonctionClicImage(){
	let image=document.querySelector("#image");
	if (i==0){
		image.setAttribute("src","oui.jpg");
		i=1;
	}
	else {
		image.setAttribute("src","non.jpg");
		i=0;
	}
}

let image=document.querySelector("#image");
image.addEventListener("click",fonctionClicImage);