  addLoadEvent(preparegallery);
  addLoadEvent(prepareplaceholder);
  function addLoadEvent(func){
  	var oldonload = window.onload;
  	if(typeof window.onload != "function"){
  		window.onload=func;
  	}
  else{
  	window.onload=function(){
  		oldonload();
  		func();
  	}

  }
}
	function insertafter(newElement,targetElement){
		var parent = targetElement.parentNode;
		if(parent.lastChild==targetElement){
			parent.appendChild(newElement,targetElement);
		}
		else{
			parent.insertBefore(newElement,targetElement.nextSibling);
		}

	}

  function showPic(whichpic){
  	if(!document.getElementById("placeholder")){
  		return false;
  	}
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    if(placeholder.nodeName!="IMG"){
    	return false;
    }
    placeholder.setAttribute("src",source);
    
    if(document.getElementById("description")){
    	var text = whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
    var description = document.getElementById("description");
    if(description.firstChild.nodeType==3){
    	description.firstChild.nodeValue = text;
	}	
     }
     return true;
  }
  function preparegallery(){
  	if(!document.getElementById){
  		return false;
  	}
  	if(!document.getElementsByTagName){
  		return false;
  	}
  	if(!document.getElementById("imagegallery")){
  		return false;
  	}
  	var gallery = document.getElementById("imagegallery");
  	var links = gallery.getElementsByTagName("a");
  	for(var i=0;i<links.length;i++){
  		links[i].onclick = function(){
  			return !showPic(this);
  		}
  	}
  }

  function prepareplaceholder(){
  		var placeholder = document.createElement("img");
  		placeholder.id = "placeholder";
  		placeholder.src = "placeholder.jpg";
  		placeholder.alt = "placeholder";
  		var description = document.createElement("p");
  		description.id = "description";
  		var desctext = document.createTextNode("Choose a photo");
  		description.appendChild(desctext);
  		var gallery = document.getElementById("imagegallery");
  		insertafter(placeholder,gallery);
  		insertafter(description,placeholder);


  }
//   function countBodyChildren(){
//   var body_element = document.getElementsByTagName("body")[0];
//   alert(body_element.childNodes.length);
// }
  // window.onload = countBodyChildren; 
