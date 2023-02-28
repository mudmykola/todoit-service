const tabBtns = document.querySelectorAll(".cases-content__tab");
const articles = document.querySelectorAll(".cases-articles__item");
const moreButton = document.querySelector(".cases-articles__more");

let numArticlesDisplayed = 2;

tabBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tab;

    tabBtns.forEach((tabBtn) => {
      tabBtn.classList.remove("active");
    });
    button.classList.add("active");

    articles.forEach((article) => {
      article.style.display = "none";
    });

    const selectedArticles = document.querySelectorAll(
      `.cases-articles__item[data-tab*="${tab}"]`
    );

    selectedArticles.forEach((article) => {
      article.style.display = "block";
    });
  });
});

// Розвертаємо приховані статті

function displayArticles(numArticles) {
  articles.forEach((article, index) => {
    if (index < numArticles) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}

function handleButtonClick(event) {
  const action = event.target.dataset.action;
  if (action === "more") {
    numArticlesDisplayed += 2;
    displayArticles(numArticlesDisplayed);
    if (numArticlesDisplayed >= articles.length) {
      moreButton.style.display = "none";
    }
    if (numArticlesDisplayed > 2) {
      document.querySelector(".cases-articles__less").style.display = "block";
    }
  } else if (action === "less") {
    numArticlesDisplayed = 2;
    displayArticles(numArticlesDisplayed);
    moreButton.style.display = "block";
    document.querySelector(".cases-articles__less").style.display = "none";
  }
}

document
  .querySelector(".cases-articles")
  .addEventListener("click", handleButtonClick);

displayArticles(numArticlesDisplayed);
if (numArticlesDisplayed >= articles.length) {
  moreButton.style.display = "none";
}
