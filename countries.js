const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
loadCountries();

const displayCountry = (countries) => {
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        const h3 = document.createElement('h3')
        const h5 = document.createElement('h5')
        const div = document.createElement('div')

        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name} </h3>
        <h5> Capital: ${country.capital} </h5>
        <button onclick="countryDetails('${country.name}')">Details </button>
        `
        /* h3.innerText = country.name;
        h5.innerText = country.capital;
        div.appendChild(h3)
        div.appendChild(h5); */
        countriesDiv.appendChild(div)
    })
}
// dynamic details adding using button click
const countryDetails = name => {
    const nameUrl = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(nameUrl)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    console.log(country)
    const detailsDiv = document.getElementById('country-details')
    detailsDiv.innerHTML = `
    <h2> Country: ${country.name} </h2>
    <p> Population: ${country.population} </p>
    <img width="200px" src = "${country.flag}">
    `
}