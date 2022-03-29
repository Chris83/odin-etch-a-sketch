const controls = {
   opacity: 1.0,
   color: "#000000",
   gridSize: 16
}

function ClearGrid() {
   document.querySelector(".surface").innerHTML = "";
   SetGridSize();
   BuildGrid();
}

function ClampValue(min, max, value){
   if(isNaN(value)) return false;
   if(value < min) return min;
   if(value > max) return max;
   return value;
}

function BuildGrid(){
   const surfaceDiv = document.querySelector(".surface");
   const surfaceSize = 880;
   const pixelSize = Math.floor(surfaceSize/controls.gridSize);

   for(let x=0; x<controls.gridSize; x++){
      for(let y=0; y<controls.gridSize; y++){
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

   this.style.opacity = (+this.style.opacity < 1) ? +this.style.opacity + controls.opacity : 1;

   return (!this.classList.contains("colored") ? this.classList.add("colored") : null);
}

function SetGridSize(){
   controls.gridSize = ClampValue(1, 100, +window.prompt("Enter a grid size (1 - 100):", controls.gridSize));
}

function SetOpacity(){
   controls.opacity = document.getElementsByName("opacityValue")[0].valueAsNumber / 100;
}

function Init(){
   SetOpacity();
   controls.gridSize = 16;
   BuildGrid();
}

Init();