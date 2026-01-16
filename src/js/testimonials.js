import { testimonials } from "./data.js";



document.addEventListener('DOMContentLoaded', () => {

    function renderTestimonials(){
        const testimonailsContainer = document.querySelector('.testimonial-cards-cont')

        console.log(testimonailsContainer);
        

        if (!testimonailsContainer) return;

        testimonailsContainer.innerHTML = " ";

        testimonials.forEach(eachTestimonial => {
        testimonailsContainer.innerHTML += `
        
            <div class="testimonial-card w-full  h-auto bg-slate-50 flex flex-col p-6 rounded-[24px] border-l-4 border-primary-dark gap-2 hover:bg-white hover:shadow-sm transition ease-out delay-75 hover:transition-all ">

            <div class="testimonial-card-top-cont w-full h-auto flex flex-row justify-start items-start gap-4 ">
              <img src="${eachTestimonial.img}" alt="${eachTestimonial.name}" class="w-[80px] h-[80px]"/>

              <div class="client-name-and-rating w-full h-auto flex flex-col justify-start items-start">
                <div class="client-name-and-role-cont w-fit h-auto flex flex-col justify-start items-start gap-2">
                  <h3 class="font-bold text-2xl">${eachTestimonial.name}</h3>
                  <p class="font-normal text-[16px]">${eachTestimonial.role}</p>
                </div>

                
              </div>

              <div class="icon-cont">
                <img src="images/icons/quote-up-square.svg" alt="" />
              </div>
            </div>

            <p class="font-normal text-[14px]">${eachTestimonial.text}</p>
          </div>
        
        `
        })

    }

    renderTestimonials()


})