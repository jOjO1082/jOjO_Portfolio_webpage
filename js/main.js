document.addEventListener("DOMContentLoaded", () => {
    const faqBlocks = document.querySelectorAll(".faq-blocks");

    faqBlocks.forEach((block) => {
      const question = block.querySelector(".question");
      const answer = block.querySelector(".answer p");
      const icons = question.querySelectorAll("img");

      question.addEventListener("click", () => {
        const isOpen = !answer.classList.contains("hidden");

        // Close all other FAQs
        faqBlocks.forEach((b) => {
          const p = b.querySelector(".answer p");
          const imgs = b.querySelectorAll(".question img");

          // Hide answer
          p.classList.add("hidden");

          // Reset icons
          imgs[0].classList.remove("hidden"); // plus icon visible
          imgs[1].classList.add("hidden");   // minus icon hidden

          // Reset background and text
          b.classList.remove("bg-primary-dark", "text-white");
          b.classList.add("bg-slate-50", "text-primary-dark");
        });

        // If current block was closed, open it
        if (!isOpen) {
          answer.classList.remove("hidden");

          // Toggle icons
          icons[0].classList.add("hidden");  // plus icon hidden
          icons[1].classList.remove("hidden"); // minus icon visible

          // // Apply primary background and white text
          // block.classList.remove("bg-slate-50", "text-primary-dark");
          // block.classList.add("bg-primary-dark", "text-white");
        }
      });
    });
  });