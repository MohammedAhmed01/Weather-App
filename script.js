
const getWeather = (cities) => {
    cityname.innerHTML = cities;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "517071dffemsh3327c8d0792b9e6p115a85jsn6a24cc01e477",
            "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
    };

    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + cities,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            temp_h.innerHTML = response.temp;
            temp.innerHTML = response.temp;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_deg.innerHTML = response.wind_degrees;
            feels.innerHTML = response.feels_like;
            hum.innerHTML = response.humidity;
            hum_h.innerHTML = response.humidity;
            wind_sh.innerHTML = response.wind_speed;
            wind_s.innerHTML = response.wind_speed;
            sun_r.innerHTML = response.sunset;
            sun_s.innerHTML = response.sunrise;

            if (response.error == "An unexpected error occured.") {
                alert('City / State / Country Not Found😕😕');
                temp_h.innerHTML = 'Loading..';
                temp.innerHTML = 'Loading..';
                min_temp.innerHTML = 'Loading..';
                max_temp.innerHTML = 'Loading..';
                wind_deg.innerHTML = 'Loading..';
                feels.innerHTML = 'Loading..';
                hum.innerHTML = 'Loading..';
                hum_h.innerHTML = 'Loading..';
                wind_sh.innerHTML = 'Loading..';
                wind_s.innerHTML = 'Loading..';
                sun_r.innerHTML = 'Loading..';
                sun_s.innerHTML = 'Loading..';
                getWeather("Hyderabad");
                return;
            }

        })
        .catch((err) => console.error(err)
        );

    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai",
        options
    )
        .then((response) => response.json())
        .then((response) => {
            c_t.innerHTML = response.temp;
            c_h.innerHTML = response.humidity;
            c_w.innerHTML = response.wind_speed;
            c_wd.innerHTML = response.wind_degrees;

        });
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hyderabad",
        options
    )
        .then((response) => response.json())
        .then((response) => {
            h_t.innerHTML = response.temp;
            h_h.innerHTML = response.humidity;
            h_w.innerHTML = response.wind_speed;
            h_wd.innerHTML = response.wind_degrees;

        });
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Andhra Pradesh",
        options
    )
        .then((response) => response.json())
        .then((response) => {
            ap_t.innerHTML = response.temp;
            ap_h.innerHTML = response.humidity;
            ap_w.innerHTML = response.wind_speed;
            ap_wd.innerHTML = response.wind_degrees;

        });
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai",
        options
    )
        .then((response) => response.json())
        .then((response) => {
            m_t.innerHTML = response.temp;
            m_h.innerHTML = response.humidity;
            m_w.innerHTML = response.wind_speed;
            m_wd.innerHTML = response.wind_degrees;

        });
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=tamil nadu",
        options
    )
        .then((response) => response.json())
        .then((response) => {
            t_t.innerHTML = response.temp;
            t_h.innerHTML = response.humidity;
            t_w.innerHTML = response.wind_speed;
            t_wd.innerHTML = response.wind_degrees;

        });
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
        options
    )
        .then((response) => response.json())
        .then((response) => {
            d_t.innerHTML = response.temp;
            d_h.innerHTML = response.humidity;
            d_w.innerHTML = response.wind_speed;
            d_wd.innerHTML = response.wind_degrees;

        });
}
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value)
})
getWeather("Hyderabad");

delhi.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(delhi.innerHTML)
})
hyd.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(hyd.innerHTML)
})
mumbai.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(mumbai.innerHTML)
})
tn.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(tn.innerHTML)
})
chennai.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(chennai.innerHTML)
})
ap.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(ap.innerHTML)
})


//Mode change
let dark = document.getElementById('container');
let nav = document.getElementById('nav')
let mode = document.getElementById('modeValue')
let h1 = document.querySelector('.head')
let b_nav = document.querySelector('.b-nav ')
let nav_tog = document.querySelector('.navbar-toggler ')
let tabler = document.querySelectorAll('tbody tr')
let nav_link = document.querySelectorAll('.nav-link')
let card = document.querySelectorAll('.card')

function change() {

    dark.classList.toggle('navbg');
    nav.classList.toggle('navbg');
    b_nav.classList.toggle('navbg');
    nav_tog.classList.toggle('navtog')
    if (mode.innerHTML == 'Dark') {
        mode.innerHTML = 'Light';
        mode.style.color = 'black';
        h1.style.color = 'black';


        for (var i = 0; i < tabler.length; i++) {
            tabler[i].style.color = 'black';
        }
        for (var i = 0; i < nav_link.length; i++) {
            nav_link[i].style.color = 'black';
        }
        for (var i = 0; i < card.length; i++) {
            card[i].classList.remove('cardD')
        }

    } else {
        mode.innerHTML = 'Dark';
        mode.style.color = 'white';
        h1.style.color = 'white';;
        for (var i = 0; i < tabler.length; i++) {
            tabler[i].style.color = 'white';
        }
        for (var i = 0; i < nav_link.length; i++) {
            nav_link[i].style.color = 'white';
        }
        for (var i = 0; i < card.length; i++) {
            card[i].classList.add('cardD')
        }
    }
}

