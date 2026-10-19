"use strict";
const viewer = document.querySelector("#viewer");
const image = document.querySelector("#viewer-image");
const zoomButton = document.querySelector("#zoom");
const scroller = document.querySelector(".viewer-scroll");
let opener;
function setZoom(zoomed) {
  image.classList.toggle("zoomed", zoomed);
  zoomButton.textContent = zoomed ? "Fit page" : "Zoom in";
  zoomButton.setAttribute("aria-pressed", String(zoomed));
  scroller.scrollTo(0, 0);
}
function toggleZoom() { setZoom(!image.classList.contains("zoomed")); }
document.querySelectorAll(".page-link").forEach((link, index) => {
  link.addEventListener("click", (event) => {
    if (typeof viewer.showModal !== "function" || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = link;
    image.src = link.href;
    image.alt = link.querySelector("img").alt;
    document.querySelector("#original").href = link.href;
    document.querySelector("#viewer-label").textContent = `PAGE ${index + 1}`;
    setZoom(false);
    viewer.showModal();
    document.body.classList.add("modal-open");
  });
});
zoomButton.addEventListener("click", toggleZoom);
image.addEventListener("click", toggleZoom);
document.querySelector("#close").addEventListener("click", () => viewer.close());
viewer.addEventListener("click", event => { if (event.target === viewer) viewer.close(); });
viewer.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  image.removeAttribute("src");
  if (opener) opener.focus({ preventScroll:true });
});
