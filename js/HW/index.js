function changeBgColor() {
    const width = window.innerWidth;
    const bodyBgColor = document.querySelector("body")
  
    if (width < 600) {
        bodyBgColor.className="small";
    } else if (width >= 600 && width <= 800) {
        bodyBgColor.className="middle";
    } else {
        bodyBgColor.className="big";
    }  
  }
  
  window.addEventListener("resize", changeBgColor);
  