const preloder = () => {
  const preloder = document.querySelector(".preloder");

  preloder.classList.add("active");
  const swiper = 1;
  setTimeout(() => {
    preloder.classList.remove("active");
  }, 500);
};

preloder();
