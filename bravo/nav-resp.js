
let shMBlocks = document.querySelector(".sh-menu-blocks");
let hamb = document.querySelector("#hamb");
let layer = document.querySelector(".layer");

function open() {
	if (shMBlocks.style.display == "block" || layer.style.display == "block") {
		shMBlocks.style.display = "none";
		layer.style.display = "none";
	} else {
		shMBlocks.style.display = "block";
		layer.style.display = "block";
	}
}

hamb.addEventListener("click", open, false);
