const cheerio = require('cheerio');
const axios = require('axios');

const url = "https://www.rightmove.co.uk/properties/131014589#/?channel=RES_BUY";
const property_data = []

async function scrapeData(){
    try{
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const property = $("#root");
        property.each(function(){
            price = $(this).find("span", class_="_1gfnqJ3Vtd1z40MlC0MzXu").text().match(/£\d{1,3}(,\d{3})*(\.\d{2})?/);
            postcode = $(this).find("div", class_="_2uQQ3SV0eMHL1P6t5ZDo2q").text().match(/([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})/g);
        
        property_data.push({price}, {postcode})

        });
cd

        
        console.log(property_data);

    }
    catch(error) {
        console.error(error);
    }
}

scrapeData(property_data);

