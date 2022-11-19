let backToTopBtn = document.querySelector(".back-to-top");

window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
};

let skillsItems = document.getElementsByClassName("skills-item");

Array.from(skillsItems).forEach((item, index) => {
  item.onclick = (e) => {
    let currskills = document.querySelector(".skills-item.active");
    currskills.classList.remove("active");
    item.classList.add("active");
  };
});

let resumeskillsList = document.querySelector(".resume-item-wrap");

let resumeCategory = document.querySelector(".resume-category");

let categories = resumeCategory.querySelectorAll("button");

Array.from(categories).forEach((item, index) => {
  item.onclick = (e) => {
    let currCat = resumeCategory.querySelector("button.active");
    currCat.classList.remove("active");
    e.target.classList.add("active");
    resumeskillsList.classList =
      "resume-item-wrap " + e.target.getAttribute("data-resume-type");
  };
});

let scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

let elToShow = document.querySelectorAll(".play-on-scroll");

isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();

  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
};

loop = () => {
  elToShow.forEach((item, index) => {
    if (isElInViewPort(item)) {
      item.classList.add("start");
    } else {
      item.classList.remove("start");
    }
  });

  scroll(loop);
};

loop();

let bottomNavItems = document.querySelectorAll(".mb-nav-item");

let bottomMove = document.querySelector(".mb-move-item");

bottomNavItems.forEach((item, index) => {
  item.onclick = (e) => {
    console.log("object");
    let crrItem = document.querySelector(".mb-nav-item.active");
    crrItem.classList.remove("active");
    item.classList.add("active");
    bottomMove.style.left = index * 25 + "%";
  };
});
