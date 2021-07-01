DELETE FROM fullstack.country
WHERE (
	SELECT COUNT(*) 
    FROM fullstack.city 
    WHERE fullstack.city.countryId = fullstack.country.countryId
    ) = 0