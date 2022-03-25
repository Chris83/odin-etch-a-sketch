function ClearSurface() {
   const pixels = document.querySelectorAll(".pixel");
   const gridSize = Math.sqrt(pixels.length);

   const newGridSize = ClampValue(1, 100, +window.prompt("Enter a grid size (1 - 100):", gridSize));
  
   if(!newGridSize || newGridSize === gridSize){
      pixels.forEach(pixel => (pixel.classList.contains("colored") ? pixel.classList.remove("colored") : null));
   }
   else{
      document.querySelector(".surface").innerHTML = "";
      BuildGrid(newGridSize);
   }
}

function ClampValue(min, max, value){
   if(isNaN(value)) return false;
   if(value < min) return min;
   if(value > max) return max;
   return value;
}

function BuildGrid(gridSize){
   const surfaceDiv = document.querySelector(".surface");
   const surfaceSize = 880;
   const pixelSize = Math.floor(surfaceSize/gridSize - 4);

   for(let x=0; x<gridSize; x++){
      for(let y=0; y<gridSize; y++){
         let pixel = document.createElement("div");
         pixel.classList.add("pixel");
         pixel.style.minWidth =  pixelSize+"px";
         pixel.style.minHeight = pixelSize+"px";
         pixel.addEventListener("mouseover", ColorPixel);

         surfaceDiv.appendChild(pixel);
      }
   }
}

function ColorPixel(){
   return (!this.classList.contains("colored") ? this.classList.add("colored") : null);
}

BuildGrid(10);