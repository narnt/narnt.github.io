function titul() {
    $("#name").fadeOut(8000);
    setTimeout(function() { $("#titul").fadeIn(8000); $("#button-menu").fadeIn(8000); }, 8000)
  }

  document.addEventListener("DOMContentLoaded", titul);
