//jshint esversion:6
const address = "https://judi.dev/";

document.querySelector("#projects").addEventListener("click", (e) => {
  let id = e.target.parentElement.id;
  window.open(`${address}${id}/`);
});
