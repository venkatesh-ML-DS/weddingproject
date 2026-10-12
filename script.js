
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
