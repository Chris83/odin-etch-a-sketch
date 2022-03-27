function ClearSurface() {
   const pixels = document.querySelectorAll(".pixel");
   const gridSize = Math.sqrt(pixels.length);

   const newGridSize = ClampValue(1, 100, +window.prompt("Enter a grid size (1 - 100):", gridSize));

   document.querySelector(".surface").innerHTML = "";
   BuildGrid(newGridSize);
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
   const pixelSize = Math.floor(surfaceSize/gridSize - 2);

   const opacity = document.getElementsByName("opacityValue")[0].valueAsNumber / 100;

   for(let x=0; x<gridSize; x++){
      for(let y=0; y<gridSize; y++){
         let pixel = document.createElement("div");
         pixel.classList.add("pixel");
         pixel.style.minWidth =  pixelSize+"px";
         pixel.style.minHeight = pixelSize+"px";
         pixel.style.opacity = 0.0;
         pixel.addEventListener("mouseover", ColorPixel);

         surfaceDiv.appendChild(pixel);
      }
   }
}

function ColorPixel(e){
   e.stopPropagation();
   
   const opacity = document.getElementsByName("opacityValue")[0].valueAsNumber / 100;
   this.style.opacity = (+this.style.opacity < 1) ? +this.style.opacity + opacity : 1;

   return (!this.classList.contains("colored") ? this.classList.add("colored") : null);
}

BuildGrid(16);