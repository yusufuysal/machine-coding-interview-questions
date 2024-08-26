const accordionSections = [
  {
    id: "section1",
    title: "Section 1",
    content: "This is the content of section 1",
  },
  {
    id: "section2",
    title: "Section 2",
    content: "This is the content of section 2",
  },
  {
    id: "section3",
    title: "Section 3",
    content: "This is the content of section 3",
  },
];

const accordionSectionsList = document.querySelector(
  ".accordion-sections-list"
);

console.log(accordionSectionsList);

document.addEventListener("DOMContentLoaded", function () {
  accordionSections.forEach((item, index) => {
    const accordionListItem = document.createElement("li");
    accordionListItem.innerHTML = `<section class='accordion-item-section'> <button class='accordion-btn'><p>${item.title}</p> <p class='collapse-icon'>v</p></button> <p class='hidden'>${item.content}</p><section>`;

    if (index === 0) {
      accordionListItem.querySelector("button").classList.add("opened");
    }

    accordionSectionsList.append(accordionListItem);
  });

  accordionSectionsList.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      if (event.target.classList.contains("opened")) {
        event.target.classList.remove("opened");
      } else {
        event.target.classList.add("opened");
      }
    }
  });
});
