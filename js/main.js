
const subscribeForm = document.getElementById('subscribe-form');
const subscribeEmail = document.getElementById('subscribe-email');

subscribeForm.addEventListener('submit', function(event) {
 
  event.preventDefault(); 
  
  const userEmail = subscribeEmail.value; 
  
 
  alert(`Дякую за підписку! Ми відправили найкращі пропозиції на ${userEmail}`);
  
  subscribeEmail.value = '';
});


const cityLinks = document.querySelectorAll('.footer__cities-grid .footer__link');

cityLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    const cityName = link.textContent;
    
    alert(`Шукаємо найкращі пропозиції та ресторани у місті: ${cityName}...`);
  });
});