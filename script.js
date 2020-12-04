function pageLoaded() {
	
  function clickEvent() {
    document.querySelector("body").classList.toggle("clicked");
  }
  document.getElementById("btnMenu").addEventListener("click", clickEvent);
}


window.addEventListener("load", pageLoaded);