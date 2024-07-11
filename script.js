document.addEventListener("DOMContentLoaded", function () {
  var inputField = document.getElementById("inputField");
  var button = document.getElementById("dynamicButton");
  var isLoading = false;

  inputField.addEventListener("input", function () {
    if (this.value) {
      this.classList.add("filled");
    } else {
      this.classList.remove("filled");
    }
  });

  inputField.addEventListener("blur", function () {
    if (!this.value) {
      this.classList.remove("focused");
    }
  });

  inputField.addEventListener("focus", function () {
    this.classList.add("focused");
  });

  button.addEventListener("click", function () {
    if (!isLoading) {
      isLoading = true;
      button.classList.add("loading");

      setTimeout(function () {
        button.classList.remove("loading");
        button.disabled = true;
        isLoading = false;
      }, 2000);
    }
  });
});
