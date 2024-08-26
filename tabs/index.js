let activeTab = null;
const contentText = document.querySelector(".content");

document.addEventListener("DOMContentLoaded", function () {
  const firstTab = document
    .querySelector(".tabs")
    .firstElementChild.getElementsByTagName("button")[0];

  activeTab = firstTab;
  activeTab.classList.add("active-tab");

  contentText.innerText = activeTab.innerText;
});

//implement event delegation to switch the active tab and the content

const tabsList = document.querySelector(".tabs");

tabsList.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    activeTab.classList.remove("active-tab");

    activeTab = event.target;
    activeTab.classList.add("active-tab");
    contentText.innerText = activeTab.innerText;
  }
});
