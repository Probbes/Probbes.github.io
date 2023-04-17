// document.getElementById("idButtonHome").onclick = function () {
	// location.href = "index.html"; 
// };

function funcButton(i){
	if (i==1) { document.getElementById("AccTitle").scrollIntoView({behavior: "smooth", block: "start"});  }
	else if (i==2) { document.getElementById("PortTitle").scrollIntoView({behavior: "smooth", block: "start"});  }
	else if (i==3) { document.getElementById("CVTitle").scrollIntoView({behavior: "smooth", block: "start"}); }
	else if (i==4) { if (document.title == 'Antoine Megevand - fr') {window.location.href = './en.html';}
					 else if (document.title == 'Antoine Megevand - en') {window.location.href = './index.html';}}
}
var x = 0;
function tellY(){
	var header = document.getElementById("headerid");
	var drapeau = document.getElementById("drapeauID");
	if(window.pageYOffset > 110){
		header.style.animation = ("header-size1 0.5s forwards");
		drapeau.style.animation=("drapeau1 0.5s forwards");
		x=x+1;
	}
	else if (window.pageYOffset < 110 && x != 0){
		header.style.animation = ("header-size2 0.5s forwards");
		drapeau.style.animation=("drapeau2 0.5s forwards");
		x=x+1;
		// console.log(x);
	}
}

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// console.log(entry)
		if (entry.isIntersecting) { entry.target.classList.add("show");}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener("scroll", event => tellY());



const items = document.querySelectorAll('.portItem');

items.forEach(item => {
  item.addEventListener('click', () => {
    // Remove the active class from all items
    items.forEach(item => {
      item.classList.remove('active');
    });
    // Add the active class to the clicked item
    item.classList.add('active');

  });
});

