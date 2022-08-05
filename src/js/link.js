if (document.getElementById("header")) {
  const consult_link = document.getElementById("#link");
  function highlightCurrent() {
    const curPage = document.URL;
    const links = document.getElementsByTagName("a");
    for (let link of links) {
      if (curPage.endsWith("plan.html") && link.text === "Услуги") {
        link.classList.add("active");
      }
      if (curPage.endsWith("index.html" && link.href == curPage)) {
        consult_link.classList.add("active");
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
