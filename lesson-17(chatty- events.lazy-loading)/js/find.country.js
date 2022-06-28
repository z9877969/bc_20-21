"use strict";

const countries = [
  {
    name: "Ukraine",
    capital: "Kyiv",
    population: "41 342 465",
    area: "603.628",
  },
  {
    name: "Spain",
    capital: "Madrid",
    population: "47 450 795",
    area: "505.990",
  },
  {
    name: "Philippines",
    capital: "Manila",
    population: "109 035 343",
    area: "300.000",
  },
  {
    name: "Angola",
    capital: "Luanda",
    population: "31 127 674",
    area: "1.246.700",
  },
  {
    name: "Gibraltar",
    capital: "Gibraltar",
    population: "34 003",
    area: "6.8",
  },
];

const searchInputEl = document.querySelector(".search-input");
const outputError = document.querySelector(".output-error");
const countryCardEl = document.querySelector(".country-card");

const createCountryCard = ({ name, capital, population, area } = {}) => {
  return `<li class="country-card__item"><strong>Страна:</strong> ${name}</li>
     <li class="country-card__item"><strong>Столица:</strong> ${capital}</li>
     <li class="country-card__item"><strong>Население:</strong> ${population}</li>
     <li class="country-card__item"><strong>Площадь:</strong> ${area}км<sup>2</sup></li>`;
};

const handleSearchInput = (event) => {
  const search = event.target.value.trim().toLowerCase();
  const normilizedSearch = search.toLowerCase();

  console.log(search);

  const findingEl = countries.find(
    (el) => el.name.toLowerCase() === normilizedSearch
  );

  if (search === "") {
    outputError.textContent = "";
    countryCardEl.innerHTML = "";

    return;
  }

  if (findingEl === undefined) {
    outputError.textContent = "Такої країни немає";
    countryCardEl.innerHTML = "";

    return;
  }

  countryCardEl.innerHTML = createCountryCard(findingEl);
  outputError.textContent = "";

  console.log(findingEl);
};

searchInputEl.addEventListener(
  "input",
  _.debounce(handleSearchInput, 2000, { leading: true })
);
