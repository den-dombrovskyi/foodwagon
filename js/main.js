const searchBtn = document.querySelector('.header__search-btn');
const loginBtn = document.querySelector('.header__login-btn');

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const addressInput = document.querySelector('.hero__input');
    if (addressInput) {
      addressInput.focus();
    }
  });
}

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    alert('Модальне вікно авторизації в розробці!');
  });
}


const heroTabs = document.querySelectorAll('.hero__tab');

heroTabs.forEach(tab => {
  tab.addEventListener('click', (event) => {
    event.preventDefault();
   
    heroTabs.forEach(t => t.classList.remove('hero__tab-active'));
    tab.classList.add('hero__tab-active');
  });
});

const heroForm = document.querySelector('.hero__form');
const heroInput = document.querySelector('.hero__input');

if (heroForm && heroInput) {
  heroForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const address = heroInput.value.trim();

    if (address !== '') {
      alert(`Шукаємо заклади поруч з адресою: ${address}`);
    } else {
      alert('Будь ласка, введіть вашу адресу!');
    }
  });
}


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

const viewAllBtn = document.querySelector('.restaurants__more-btn');

if (viewAllBtn) {
  viewAllBtn.addEventListener('click', () => {
    alert('Завантаження повного списку ресторанiв...');
  });
}
