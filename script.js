(function () {
  var currentPath = window.location.pathname;
  var links = document.querySelectorAll("[data-language-target]");

  links.forEach(function (link) {
    var target = link.getAttribute("data-language-target");
    if (!target) return;

    link.addEventListener("click", function () {
      try {
        localStorage.setItem("labra-language", target);
      } catch (error) {
        return;
      }
    });
  });

  if (currentPath === "/" || currentPath.endsWith("/index.html")) {
    try {
      var language = localStorage.getItem("labra-language");
      if (language === "en") {
        window.location.replace("/en/");
      }
    } catch (error) {
      return;
    }
  }
})();
