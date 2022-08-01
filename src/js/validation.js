if (document.querySelector(".plan") || document.querySelector(".info")) {
  const name = document.querySelector(".modal__name");
  const email = document.querySelector(".modal__email");
  const button = document.getElementById("button");

  console.log(button);
  const validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "") {
      name.style.border = "1px solid #CF4747";
    }
    if (!email.value.match(validRegex)) {
      email.style.border = "1px solid #CF4747";
    }
    if (name.value !== "" && email.value.match(validRegex)) {
      button.classList.add("loading");
      button.style.backgroundColor = "#9FA7B0";
      button.innerText = "Идет отправка";

      setTimeout(function () {
        button.style.backgroundColor = "#47CF34";
        button.classList.remove("loading");
        button.innerText = "Отправлено";
      }, 4000);
      setTimeout(function () {
        email.value = "";
        name.value = "";
        button.innerText = "Получить консультацию";
      }, 10000);
    }
  });

  name.addEventListener("input", () => {
    name.value === ""
      ? (name.style.border = "1px solid #CF4747")
      : (name.style.border = "1px solid #9FA7B0");
  });

  email.addEventListener("input", () => {
    email.value.match(validRegex)
      ? (email.style.border = "1px solid #9FA7B0")
      : (email.style.border = "1px solid #CF4747");
  });
}
