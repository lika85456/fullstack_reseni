SELECT city.cityId, city.name, city.citizenCount, country.countryId
FROM fullstack.city
INNER JOIN fullstack.country ON fullstack.city.countryId=fullstack.country.countryId
WHERE fullstack.country.continentName="Evropa";