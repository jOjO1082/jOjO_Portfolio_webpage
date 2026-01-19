import { myServices } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {


 function renderServices(){
    const servicesContainer = document.getElementById("services-card-cont");

    if (!servicesContainer) return;

    servicesContainer.innerHTML = "";

    myServices.forEach(eachService => {
        servicesContainer.innerHTML += `
        
        <div id="services-card" class="bg-slate-100 flex flex-col gap-6 p-6 rounded-[16px] services-card border-l-4 border-primary-dark w-full hover:bg-white hover:shadow-sm transition ease-in-out delay-75 hover:transition-all">
            <div class="icon-cont w-fit h-auto p-4 bg-white rounded-[50px]">
              ${eachService.img}
            </div>

            <div class="service-card-text-cont flex flex-col gap-4">
              <h3 class="font-bold font-sans text-lg">${eachService.title}</h3>
              <p class="text-gray-700 font-normal text-[16px] font-sans">
                ${eachService.text}
              </p>
            </div>

            
          </div>
        
        `
    })
 }

 renderServices()

    
});