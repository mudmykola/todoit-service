const tabs = document.querySelectorAll(".tteams-tabs__tab");
const contents = document.querySelectorAll(".tteams-contents__cont ");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Змінюємо активний таб
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    // Змінюємо відображуваний контент
    contents.forEach((content) => {
      content.classList.remove("show");
    });
    contents[index].classList.add("show");
  });
});
