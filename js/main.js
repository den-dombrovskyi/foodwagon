const subscribeForm =
  document.querySelector(".subscribe__form") ||
  document.querySelector(".footer__form") ||
  document.getElementById("subscribe-form");
const subscribeEmail =
  document.querySelector(".subscribe__input") ||
  document.querySelector(".footer__input") ||
  document.getElementById("subscribe-email");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const userEmail = subscribeEmail ? subscribeEmail.value : "";
    alert(`Дякую за підписку! Ми відправили найкращі пропозиції на ${userEmail}`);

    if (subscribeEmail) {
      subscribeEmail.value = "";
    }
  });
}

const cityLinks = document.querySelectorAll(
  ".footer__cities-grid .footer__link",
);

cityLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const cityName = link.textContent;

    alert(`Шукаємо найкращі пропозиції та ресторани у місті: ${cityName}...`);
  });
});
