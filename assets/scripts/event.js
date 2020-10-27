function onLoad() {
	//console.log("Java script document loaded");

	var listItems = document.getElementById("navbar").getElementsByTagName("li");
	for (var i = 0; i <= listItems.length - 1; i++) {
        //console.log(listItems[i]);
		listItems[i].addEventListener("click", function() {changeliClass(this)} );
    }

	
}

function changeliClass(element) {
	//console.log(element);
    
	var listItems = element.parentElement.getElementsByTagName("li");
	//for (var i = 0; i <= listItems.length - 1; i++) {
    //    console.log(window.getComputedStyle(listItems[i]).display);
    //    console.log(listItems[i]); 
		//listItems[i].classList.remove("select");
    //}
	//element.classList.add("select");
	//console.log(element.firstElementChild.getAttribute('href'));
    //var firstchildelement = element.parentElement.firstElementChild;

	if (element === element.parentElement.firstElementChild  ) {
		//window.getComputedStyle(element.parentElement.firstElementChild).display === 'block'
        //console.log(element);
		//console.log(screen.width);
		for (var i = 0; i <= listItems.length - 1; i++) {
			if (listItems[i] !== element.parentElement.firstElementChild) {
				if (listItems[i].style.display==='block')
				{
					listItems[i].style.display='none';
                 }
				 else {
					 listItems[i].style.display='block';
                 }
			}
			
        }
	}
	else {
		element.firstElementChild.click();
		if (window.getComputedStyle(element.parentElement.firstElementChild).display === 'block') {
			for (var i = 0; i <= listItems.length - 1; i++) {
				if (listItems[i] !== element.parentElement.firstElementChild) {
					listItems[i].style.display='none';
                }
			}
        
		}
		//console.log(window.getComputedStyle(element.parentElement.firstElementChild).display);
		//console.log(screen.width);
    }
	
}