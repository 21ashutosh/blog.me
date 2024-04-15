const plansSwitch = document.querySelector('.plans-switch');
const basicPrice = document.querySelector('.basic-price');
const professionalPrice = document.querySelector('.professional-price');
const businessPrice = document.querySelector('.business-price');
const planDurations = document.querySelectorAll('.plan-duration');

const monthlyPrices = {
  basic: '₹49',
  professional: '₹99',
  business: '₹149'
};

const yearlyPrices = {
  basic: '₹499',
  professional: '₹999',
  business: '₹1499'
};

function updatePrices(isYearly) {
  const prices = isYearly ? yearlyPrices : monthlyPrices;
  basicPrice.textContent = prices.basic;
  professionalPrice.textContent = prices.professional;
  businessPrice.textContent = prices.business;

  planDurations.forEach(duration => {
    duration.textContent = isYearly ? '/ year' : '/ month';
  });
}

plansSwitch.addEventListener('change', () => {
  const isYearly = plansSwitch.checked;
  updatePrices(isYearly);
});

// Initialize with monthly prices
updatePrices(false);