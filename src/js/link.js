if (document.getElementById("header")) {
  function highlightCurrent() {
    const curPage = document.URL;
    const links = document.getElementsByTagName("a");
    for (let link of links) {
      if (curPage.endsWith("plan.html") && link.text === "Услуги") {
        link.classList.add("active");
      }
      if (link.href == curPage) {
        link.classList.add("active");
      }
    }
  }

  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      highlightCurrent();
    }
  };
}
