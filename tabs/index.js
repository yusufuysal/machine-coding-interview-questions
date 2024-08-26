const tabsOptions = [
  {
    id: "tab1",
    title: "Tab 1",
    content: "Tab 1 content",
  },
  {
    id: "tab2",
    title: "Tab 2",
    content: "Tab 2 content",
  },
  {
    id: "tab3",
    title: "Tab 3",
    content: "Tab 3 content",
  },
];

const tabsContainer = document.querySelector(".tabs-container");
const activeTabContent = document.querySelector(".active-tab-content");

let activeTabIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < tabsOptions.length; i++) {
    const tabListItem = document.createElement("li");
    tabListItem.innerHTML = `<button>${tabsOptions[i].title}</button>`;
    tabsContainer.append(tabListItem);
  }
  //set the initial active tab as the first item in the array
  setActiveTab(0);

  tabsContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const childrenTabs = Array.from(this.children);
      const newActiveTabIndex = childrenTabs.indexOf(
        event.target.parentElement
      );
      setActiveTab(newActiveTabIndex);
    }
  });
});

function setActiveTab(index) {
  // set the active tab index with new index
  activeTabIndex = index;

  //remove and reset classes for each list item before setting the new one
  [...tabsContainer.children].forEach((tabListItem, idx) => {
    const button = tabListItem.querySelector("button");
    tabListItem.classList.remove("active-tab");
    button.setAttribute("aria-selected", idx === activeTabIndex);
  });

  // set the new active tab class and content
  const activeTabElement = tabsContainer.children[activeTabIndex];
  activeTabElement.classList.add("active-tab");
  activeTabContent.innerText = tabsOptions[activeTabIndex].content;
}
