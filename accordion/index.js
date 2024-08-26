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
let activeAccordionIndex = -1;

document.addEventListener("DOMContentLoaded", function () {
  accordionSections.forEach((item) => {
    const accordionListItem = document.createElement("li");
    accordionListItem.innerHTML = `<section class='accordion-item-section'> <button>${item.title}</button> <p class='hidden'>${item.content}</p><section>`;

    accordionSectionsList.append(accordionListItem);
  });

  accordionSectionsList.addEventListener("click", function (event) {
    const accordionElementsArr = [...accordionSectionsList.children];

    //find the index of clicked element
    if (event.target.tagName === "BUTTON") {
      //remove hidden class from the previous selected item
      accordionElementsArr.forEach((item) => {
        item.querySelector("p").classList.remove("accordion-active");
      });
      const clickedIndex = accordionElementsArr.indexOf(
        event.target.parentElement.parentElement
      );
      if (clickedIndex === activeAccordionIndex) {
        accordionElementsArr[clickedIndex]
          .querySelector("p")
          .classList.remove("accordion-active");
        activeAccordionIndex = -1;
      } else {
        //add active class to new selected item
        accordionElementsArr[clickedIndex]
          .querySelector("p")
          .classList.add("accordion-active");
        activeAccordionIndex = clickedIndex;
      }
    }
  });
});
