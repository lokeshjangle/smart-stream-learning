'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (city, data, className = '') {
  const html = `
  <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${city},${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${
          data.languages[Object.keys(data.languages)[1]]
        }</p>
        <p class="country__row"><span>💰</span>${
          data.currencies[Object.keys(data.currencies)].name
        }</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error('Problem Getting country');
    const data = await res.json();
    // console.log(data);
    console.log(dataGeo.country);
    for (const element of data) {
      //   console.log(element.name.common);
      if (element.name.common === dataGeo.country) {
        renderCountry(dataGeo.city, element);
      } else {
        continue;
      }
    }
    //return async function --> Promise{}
    return `You are in ${dataGeo.city},${dataGeo.country}`;
  } catch (err) {
    console.error(`${err}💥💥`);
    renderError(` 💥 ${err.message}`);

    //Reject promise returned from async function
    throw err;
  }
};

btn.addEventListener('click', function () {
  countriesContainer.innerHTML = '';
  //Handling return value by async function
  //   whereAmI()
  //     .then(city => console.log(city))
  //     .catch(err => console.error(`${err.message} 💥💥💥`))
  //     .finally(() => console.log('Code End'));

  (async function () {
    try {
      const city = await whereAmI();
      console.log(`2: ${city}`);
    } catch (err) {
      console.error(`2: ${err.message} 💥💥💥`);
    } finally {
      console.log('3: Code End');
    }
  })();
});
console.log('1: Will get location');
