document.getElementById("next").onclick = function () {
  let slideContainer = document.getElementById("slide");
  let lists = slideContainer.querySelectorAll(".item");
  slideContainer.appendChild(lists[0]);
};

document.getElementById("prev").onclick = function () {
  let slideContainer = document.getElementById("slide");
  let lists = slideContainer.querySelectorAll(".item");
  slideContainer.prepend(lists[lists.length - 1]);
};
