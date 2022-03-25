function BuildGrid(width, height){
   const surfaceDiv = document.querySelector(".surface");

   for(let x=0; x<width; x++){
      for(let y=0; y<height; y++){
         let pixel = document.createElement("div");
         pixel.classList.add("pixel");
         pixel.addEventListener("mouseover", ColorPixel);

         surfaceDiv.appendChild(pixel);
      }
   }
}

function ColorPixel(){
   return (!this.classList.contains("colored") ? this.classList.add("colored") : null);
}

BuildGrid(16, 16);