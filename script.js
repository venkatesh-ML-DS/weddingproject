<<<<<<< HEAD

const replayButton = document.getElementById("replayBtn");

replayButton.addEventListener("click", () => {
  const invitation = document.querySelector(".invitation");

  invitation.style.animation = "none";
  void invitation.offsetWidth;
  invitation.style.animation = "reveal 1.2s ease both";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
=======

const replayButton = document.getElementById("replayBtn");

replayButton.addEventListener("click", () => {
  const invitation = document.querySelector(".invitation");

  invitation.style.animation = "none";
  void invitation.offsetWidth;
  invitation.style.animation = "reveal 1.2s ease both";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
>>>>>>> 16fc7173b6f3dc4b62b75855cc57292bd8514e81
