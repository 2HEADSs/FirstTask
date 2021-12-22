function solve(input) {
  let listOfCountry = {};

  for (let line of input) {
    line = line.split(" > ");
    let country = line[0];
    let city = line[1];
    let price = Number(line[2]);

    if (!listOfCountry.hasOwnProperty(country)) {
      listOfCountry[country] = {};
    }
    if (!listOfCountry[country].hasOwnProperty(city)) {
      listOfCountry[country][city] = price;
    }
    if (listOfCountry[country][city] > price) {
      listOfCountry[country][city] = price;
    }
  }
  let keys = Object.keys(listOfCountry);
  let sortedCountries = keys.sort((a, b) => a.localeCompare(b));

  for (let singleCountry of sortedCountries) {
    let entriesOfEveryCountry = Object.entries(listOfCountry[singleCountry]);
    let sortedCities = entriesOfEveryCountry.sort((a, b) => a[1] - b[1]);
    let output = [];
    for(let city of sortedCities){
        output.push(city.join(" -> "))
    }
    console.log(`${singleCountry} -> ${output.join(" ")}`);

  }
}
solve([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
