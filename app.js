//jshint esversion:6
const address = "https://judi.dev/";
const newsletterAddress = "https://dudley-worms-31227.herokuapp.com/";

document.querySelector("#projects").addEventListener("click", (e) => {
  if (e.target.parentElement.id === "newsletter") {
    window.open(newsletterAddress);
  } else {
    let id = e.target.parentElement.id;
    window.open(`${address}${id}/`);
  }
});
