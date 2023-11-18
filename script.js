const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd3fc4df633msh6fc141f4521bc49p14f6e2jsnd600f776cfcd',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) => {

    cityName.innerHTML= city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city , options)
        .then(response => response.json())
        .then(response => {


            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunrise


        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => { 
    e.preventDefault();//reaload nahi hoga
    getWeather(city.value)
 })


 getWeather("Delhi")
 
 
// ----------------------------------------------------------

const getWeather2 = () => {

    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai' , options)
        .then(response => response.json())
        .then(response => {


            console.log(response)

            cloud_pct123.innerHTML = response.cloud_pct
            temp123.innerHTML = response.temp
    
            feels_like123.innerHTML = response.feels_like
            humidity123.innerHTML = response.humidity
           
            min_temp123.innerHTML = response.min_temp
             max_temp123.innerHTML = response.max_temp
            wind_speed123.innerHTML = response.wind_speed
             
            wind_degrees123.innerHTML = response.wind_degrees
             sunrise123.innerHTML = response.sunrise
            sunset123.innerHTML = response.sunrise


        })
        .catch(err => console.error(err));
}
getWeather2()

// ------------------------------------------------------------

const getWeather3 = () => {

    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hyderabad' , options)
        .then(response => response.json())
        .then(response => {


            console.log(response)

            cloud_pct12.innerHTML = response.cloud_pct
            temp12.innerHTML = response.temp
    
            feels_like12.innerHTML = response.feels_like
            humidity12.innerHTML = response.humidity
           
            min_temp12.innerHTML = response.min_temp
             max_temp12.innerHTML = response.max_temp
            wind_speed12.innerHTML = response.wind_speed
             
            wind_degrees12.innerHTML = response.wind_degrees
             sunrise12.innerHTML = response.sunrise
            sunset12.innerHTML = response.sunrise


        })
        .catch(err => console.error(err));
}
getWeather3()

// --------------------------------------------------------------

const getWeather4 = () => {

    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=jaipur' , options)
        .then(response => response.json())
        .then(response => {


            console.log(response)

            cloud_pct1234.innerHTML = response.cloud_pct
            temp1234.innerHTML = response.temp
    
            feels_like1234.innerHTML = response.feels_like
            humidity1234.innerHTML = response.humidity
           
            min_temp1234.innerHTML = response.min_temp
             max_temp1234.innerHTML = response.max_temp
            wind_speed1234.innerHTML = response.wind_speed
             
            wind_degrees1234.innerHTML = response.wind_degrees
             sunrise1234.innerHTML = response.sunrise
            sunset1234.innerHTML = response.sunrise


        })
        .catch(err => console.error(err));
}
getWeather4()

//---------------------------------------------------------

const getWeather5 = () => {

    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bhopal' , options)
        .then(response => response.json())
        .then(response => {


            console.log(response)

            cloud_pct1235.innerHTML = response.cloud_pct
            temp1235.innerHTML = response.temp
    
            feels_like1235.innerHTML = response.feels_like
            humidity1235.innerHTML = response.humidity
           
            min_temp1235.innerHTML = response.min_temp
             max_temp1235.innerHTML = response.max_temp
            wind_speed1235.innerHTML = response.wind_speed
             
            wind_degrees1235.innerHTML = response.wind_degrees
             sunrise1235.innerHTML = response.sunrise
            sunset1235.innerHTML = response.sunrise


        })
        .catch(err => console.error(err));
}
getWeather5()

//----------------------------------------------------------


const getWeather6 = () => {

    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=amritsar' , options)
        .then(response => response.json())
        .then(response => {


            console.log(response)

            cloud_pct1236.innerHTML = response.cloud_pct
            temp1236.innerHTML = response.temp
    
            feels_like1236.innerHTML = response.feels_like
            humidity1236.innerHTML = response.humidity
           
            min_temp1236.innerHTML = response.min_temp
             max_temp1236.innerHTML = response.max_temp
            wind_speed1236.innerHTML = response.wind_speed
             
            wind_degrees1236.innerHTML = response.wind_degrees
             sunrise1236.innerHTML = response.sunrise
            sunset1236.innerHTML = response.sunrise


        })
        .catch(err => console.error(err));
}
getWeather6()

//-------------------------------------------------------------

const getWeather7 = () => {

    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=aizawl' , options)
        .then(response => response.json())
        .then(response => {


            console.log(response)

            cloud_pct1237.innerHTML = response.cloud_pct
            temp1237.innerHTML = response.temp
    
            feels_like1237.innerHTML = response.feels_like
            humidity1237.innerHTML = response.humidity
           
            min_temp1237.innerHTML = response.min_temp
             max_temp1237.innerHTML = response.max_temp
            wind_speed1237.innerHTML = response.wind_speed
             
            wind_degrees1237.innerHTML = response.wind_degrees
             sunrise1237.innerHTML = response.sunrise
            sunset1237.innerHTML = response.sunrise


        })
        .catch(err => console.error(err));
}
getWeather7()