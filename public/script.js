
      // Intersection Observer
      const sections = document.querySelectorAll("section");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.1 }
      );
      sections.forEach((section) => observer.observe(section));

      // WhatsApp Contact Form
      const contactForm = document.getElementById("contactForm");
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();
        const whatsappNumber = "2348107165245";
        const urlMessage = `Hello Joyce, my name is ${name}. ${message}`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          urlMessage
        )}`;
        window.open(whatsappURL, "_blank");
      });

      // Hamburger Menu Toggle
      const hamburger = document.getElementById("hamburger");
      const navMenu = document.getElementById("navMenu");
      hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("open");
      });