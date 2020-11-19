//jshint esversion:6
const address = "https://judi.dev/";
const newsletterAddress = "https://dudley-worms-31227.herokuapp.com/";
const forkifyAddress = "https://forkify-jp.netlify.app/";
const keeperAddress = "https://keeper-jp.netlify.app";

document.querySelector("#projects").addEventListener("click", (e) => {
  let id = e.target.parentElement.id;
  if (id === "newsletter") {
    window.open(newsletterAddress);
  } else if (id === "forkify") {
    window.open(forkifyAddress);
  } else if (id === "keeper") {
    window.open(keeperAddress);
  } else {
    window.open(`${address}${id}/`);
  }
});
