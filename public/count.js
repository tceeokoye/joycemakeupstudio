// Count-up animation for About stats
const counters = document.querySelectorAll(".count");
let countersStarted = false;

const countUp = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const increment = Math.ceil(target / 60);

    const updateCounter = () => {
      current += increment;
      if (current >= target) {
        counter.innerText = target + "+";
      } else {
        counter.innerText = current;
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  });
};

const aboutSection = document.querySelector("#about");

const aboutObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !countersStarted) {
      countersStarted = true;
      countUp();
    }
  },
  { threshold: 0.5 }
);

aboutObserver.observe(aboutSection);
