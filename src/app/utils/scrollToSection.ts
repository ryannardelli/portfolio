export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
};
