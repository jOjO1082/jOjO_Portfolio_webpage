import { myTools } from "./data.js";
import { faqData } from "./data.js";


document.addEventListener("DOMContentLoaded", () => {
    
    // Render all tools to the frontend
    function renderTools(){
        const myToolsContainer = document.querySelector('.tools-cards-cont')

        if (!myToolsContainer) return

        myToolsContainer.innerHTML = '';

        myTools.forEach(eachTool => {


        myToolsContainer.innerHTML += `
        
        <div class="tool-card p-4 bg-slate-50 w-full h-auto flex flex-col justify-start items-end gap-4 rounded-[24px] border-l-4 border-primary-dark hover:bg-white hover:shadow-sm transition ease-out delay-75 hover:transition-all">
              <div class="percentage bg-primary-dark p-4 rounded-full w-fit">
                <p class="font-bold text-white text-[18px]">${eachTool.skillLevel}</p>
              </div>

              <div class="tool-icon-and-name w-full h-auto flex flex-row justify-start items-center gap-2">
                <div class="w-12 h-12 tool-icon-cont bg-white p-4 rounded-full">
                  <img
                    src="${eachTool.img}"
                    alt="" class="w-full h-full object-cover bg-cover"
                  />
                </div>

                <h3 class="text-3xl font-medium">${eachTool.title}</h3>
              </div>
            </div>
        
        `
    })
    }

    renderTools()


    

    // Menu reveal and close

    const menuRevealButton = document.getElementById('menu-button');
    const menuContainer = document.getElementById('mobile-menu')
    const closeMobileMenuButton = document.getElementById('close-icon')


    menuRevealButton.addEventListener('click', () => {
        menuContainer.classList.remove('-translate-y-[100%]')
        menuContainer.classList.add('translate-y-0')
    })

    closeMobileMenuButton.addEventListener('click', () => {
        menuContainer.classList.add('-translate-y-[100%]');
        menuContainer.classList.remove('translate-y-0')
    })






    // Render FAQs to the frontend

    function renderFaqs(){
        const faqContainer = document.querySelector('.faq-dropdown-block-container')

        if (!faqContainer) return

        faqContainer.innerHTML = '';

        faqData.forEach(eachFaq => {
            faqContainer.innerHTML += `
            
            <div class="faq-blocks w-full h-auto flex flex-col justify-center items-center gap-2  bg-slate-50 p-4 rounded-[24px] border-l-4 border-primary-dark hover:bg-white hover:shadow-sm transition ease-out delay-75 hover:transition-all cursor-pointer">
                <div class="question w-full h-auto flex flex-row justify-between items-center">
                  <h4 class="font-semibold text-[16px]">${eachFaq.question}</h4>
                  <i class="fa-solid fa-angle-down openFaq"></i>
                </div>
  
                <div class=" w-full h-auto answer hidden">
                  <p class="text-[16px]">${eachFaq.answer}
                  </p>
                </div>
              </div>
            
            `
        })

    }

    renderFaqs()



    // Open and close FAQs

    const allFaqs = document.querySelectorAll('.faq-blocks')
    // const allAnswers = document.querySelectorAll('.faq-blocks .answer')


    allFaqs.forEach(eachClicked => {
        eachClicked.addEventListener('click', () => {
            const answer = eachClicked.querySelector('.answer')

            answer.classList.toggle('hidden')
                      
        })
    })
    

    

    

    
    // Active link state
    const allNavLinks = document.querySelectorAll('#link a')

    

    allNavLinks.forEach(eachLink => {
        eachLink.addEventListener('click', () => {
            allNavLinks.forEach(link => {
                link.classList.remove('text-tertiary', 'font-bold' )
                link.classList.add('text-primary-dark')
            })
            eachLink.classList.remove('text-primary-dark')
            eachLink.classList.add('text-tertiary', 'font-bold')
        })
    })

    

    

});