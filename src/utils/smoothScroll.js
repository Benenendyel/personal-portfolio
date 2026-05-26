function scrollTo(idTarget) {
  setTimeout(() => {
    document.getElementById(idTarget)?.scrollIntoView({ behavior: "smooth" });
  }, 200);
}

export default scrollTo;
