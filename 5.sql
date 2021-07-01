UPDATE fullstack.country
SET fullstack.country.citizenCount = (
	SELECT SUM(fullstack.city.citizenCount) 
    FROM fullstack.city 
    WHERE fullstack.city.countryId=fullstack.country.countryId
    )