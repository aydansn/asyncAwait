const getCountry = async parametr => {
    try {
        const response = await fetch(
            `https://restcountries.com/v3.1/name/${parametr}`
        );
        const data = await response.json();
        console.log(data.at(0).capital.at(0));
    } catch (error) {
        console.log(error);
    }
};

getCountry("azerbaijan");
getCountry("canada");
getCountry("turkey");
getCountry("roma");
getCountry("america");

const getCountry2 = async parametr => {
    try {
        const response = await fetch(
            `https://restcountries.com/v3.1/currency/${parametr}`
        );
        const data = await response.json();
        console.log(data.at(0).currencies);
    } catch (error) {
        console.log(error);
    }
};

getCountry2("AZN");
getCountry2("CAD");
getCountry2("TRY");

const getMovie = async  () => {
    const API_KEY = "d781bcb1";
    const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
}

getMovie();