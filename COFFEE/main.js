"use strict";

{
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener("click", (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute("href");
      let targetElement = document.getElementById(href.replace("#", ""));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const target = rect + offset;
      window.scrollTo({
        top: target,
        behavior: "smooth",
      });
    });
  }
}

// {
//   const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
//   for (let i = 0; i < smoothScrollTrigger.length; i++) {
//     smoothScrollTrigger[i].addEventListener("click", (e) => {
//       e.preventDefault();
//       let href = smoothScrollTrigger[i].getAttribute("href");
//       let targetElement = document.getElementById(href.replace("#", ""));
//       const rect = targetElement.getBoundingClientRect().top;
//       const offset = window.pageYOffset;
//       const target = rect + offset;
//     });
//   }
// }
