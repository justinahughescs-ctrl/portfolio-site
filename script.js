document.querySelectorAll("a").forEach(link => {
  if (link.hash) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.hash)
        ?.scrollIntoView({ behavior: "smooth" });
    });
  }
});
