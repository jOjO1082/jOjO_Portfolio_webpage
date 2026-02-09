import { projects } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {


    function renderProjects(projects) {
        const projectsContainer = document.querySelector('.projects-cards-container')

        if (!projectsContainer) return

        projectsContainer.innerHTML = '';    

        projects.forEach(eachProject => {
            projectsContainer.innerHTML += `    

                <div class="project-card w-full h-auto flex flex-col justify-start items-stretch gap-8 bg-slate-100 rounded-[24px] p-4 hover:bg-white hover:shadow-sm border-l-4 border-primary-dark ">
            <img class="w-full h-48 object-cover rounded-lg md:h-48" src="${eachProject.img}" alt="${eachProject.title}" />

            <div class="project-card-right w-full h-auto flex flex-col justify-start items-start gap-4">
              <div class="tags-container w-full h-auto flex flex-row justify-start items-center gap-4 flex-wrap">
                <div class="tag w-fit h-auto bg-tertiary px-4 py-1 rounded-[24px]">
                  <p class="font-medium text-sm text-gray-800">${eachProject.tags[0]}</p>
                </div>

                <div class="tag w-fit h-auto bg-tertiary px-4 py-1 rounded-[24px]">
                  <p class="font-medium text-sm text-gray-800">${eachProject.tags[1]}</p>
                </div>

                <div class="tag w-fit h-auto bg-tertiary px-4 py-1 rounded-[24px]">
                  <p class="font-medium text-sm text-gray-800">${eachProject.tags[2]}</p>
                </div>
              </div>

              <div class="project-text-cont w-full h-auto flex flex-col justify-start items-start gap-3">
                <h2 class="font-bold text-lg text-primary-dark md:text-lg">${eachProject.title}</h2>
                <p class="text-base">
                  ${eachProject.text}
                </p>
              </div>

              
                <a href="${eachProject.link}" target="_blank"
                  class="flex flex-row justify-start items-center gap-2 text-[18px] hover:italic">View Project
                  <img src="images/icons/arrow-right.svg" alt="" class="flex justify-center items-center"
                /></a>
              </div>
          </div>


            `
        })
    }

    renderProjects(projects)


    // active states for filtering buttons

    const filterButtons = document.querySelectorAll('#filter span')

    

    filterButtons.forEach(eachButton => {
        eachButton.addEventListener('click', () => {
            filterButtons.forEach(eachButton => {
                eachButton.classList.remove('bg-tertiary', 'font-bold')
            })

            eachButton.classList.add('font-bold', 'bg-tertiary')
        })
    })
    


    // Filter based on category

    function filterCategory(){
        const categories = document.querySelectorAll('#filter span')      

        categories.forEach(eachButton => {
            eachButton.addEventListener('click', () => {
                const category = eachButton.dataset.category   
                
                console.log(category);
                

                if (category === 'All') {
                    renderProjects(projects)
                    return;
                }


                const categoryList = projects.filter(eachProject => eachProject.category === category)

                if (categoryList.length === 0) {
                    const projectsContainer = document.querySelector('.projects-cards-container')

                    if (!projectsContainer) return


                    projectsContainer.innerHTML = `
                        <div class="w-full h-auto flex flex-col justify-center items-center gap-4 ">

                            <img src="./images/not-found.jpg" alt="" class="w-28 h-28 object-cover bg-cover">
                            <h1 class="font-bold text-2xl text-primary-dark">No projects found</h1>
                        </div>
                            `

                    
                    return;
                }

                              
                renderProjects(categoryList)
            })
        })


        
    }

            
    filterCategory()


})