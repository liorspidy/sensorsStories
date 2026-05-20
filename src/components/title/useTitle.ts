export const useTitle = () => {
  const scrollToElement = () => {
    const element = document.getElementById("book");
    if (element) {
      return window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    } else {
      return;
    }
  };

  return { scrollToElement };
};
