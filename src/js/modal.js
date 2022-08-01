if (!document.querySelector(".navigation")) {
  const modal = document.querySelector(".modal__outter");
  const name = document.querySelector(".input__name");
  const email = document.querySelector(".input__email");
  const text = document.querySelector(".input__text");
  const span_name = document.querySelector(".name__span");
  const span_email = document.querySelector(".email__span");
  const span_text = document.querySelector(".text__span");
  const close = document.getElementById("close");
  const send = document.querySelector(".send__button");
  const form = document.getElementById("form");
  const dot = document.getElementById("loading__dots");
  const open = document.getElementById("modal__open");
  const success = document.querySelector(".success");

  open.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  function undoName() {
    span_name.style.display = "none";
    name.style.border = "1px solid #282C37";
  }

  function undoEmail() {
    span_email.style.display = "none";
    email.style.border = "1px solid #282C37";
  }

  function undoText() {
    span_text.style.display = "none";
    text.style.border = "1px solid #282C37";
  }

  function changeName() {
    span_name.style.display = "block";
    name.style.border = "1px solid #CF4747";
  }

  function changeEmail() {
    span_email.style.display = "block";
    email.style.border = "1px solid #CF4747";
  }

  function changeText() {
    span_text.style.display = "block";
    text.style.border = "1px solid #CF4747";
  }

  send.addEventListener("click", (e) => {
    e.preventDefault();

    name.addEventListener("input", () => {
      name.value.length > 3 ? undoName() : changeName();
    });

    email.addEventListener("input", () => {
      email.value.length > 3 ? undoEmail() : changeEmail();
    });

    text.addEventListener("input", () => {
      text.value.length > 3 ? undoText() : changeText();
    });
    if (name.value.length < 3) changeName();
    if (email.value.length < 3) changeEmail();
    if (text.value.length < 3) changeText();
    if (
      name.value.length > 3 &&
      email.value.length > 3 &&
      text.value.length > 3
    ) {
      send.classList.add("loading");
      send.style.backgroundColor = "#9FA7B0";
      send.innerText = "Идет отправка";
      setTimeout(function () {
        send.classList.remove("loading");
        success.style.display = "block";
      }, 3000);
      setTimeout(function () {
        modal.style.display = "none";
        form.reset();
        modal.style.display = "none";
        removeSpans();
        success.style.display = "none";
        send.innerText = "Отправить";
        send.style.backgroundColor = "#47CF34";
      }, 5000);
    }
  });

  const removeSpans = () => {
    span_name.style.display = "none";
    span_email.style.display = "none";
    span_text.style.display = "none";
  };

  close.addEventListener("click", (e) => {
    e.preventDefault();
    form.reset();
    modal.style.display = "none";
    removeSpans();
  });
}
