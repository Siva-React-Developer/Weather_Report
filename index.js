let input=document.getElementById('Input')
let WeatherCondition=document.getElementById('weatherCondition')
let CityName=document.getElementById('cityname')
let CountryName=document.getElementById('countryname')
let Degrees=document.getElementById('degrees')
let Type=document.getElementById('type')
let WeatherImage=document.getElementById('weatherImage')
let BackgroundVideo=document.getElementById('backgroundVideo')

let search=async()=>{
  if (input.value.length == 0) {
    alert('please enter a cityname before search')
  } else {
    try {
        let url="https://api.openweathermap.org/data/2.5/weather?q=" +input.value+ "&units=metric&appid=1cb6532aea3c298a830a71380eace21e"
        let response=await fetch(url)
        let data=await response.json()
        // console.log(data);
        Degrees.textContent=data.main.temp
        CityName.textContent=data.name
        CountryName.textContent=data.sys.country
        if (Degrees.textContent <= 20) {
          BackgroundVideo.src="181916-867576005_tiny.mp4"
          WeatherImage.src='rainy.png'
          WeatherCondition.textContent="Rainy"
          WeatherCondition.style.color="white"
          CityName.style.color="white"
          CountryName.style.color="white"
          Degrees.style.color="white"
          Type.style.color="white"
        }
        else if(Degrees.textContent > 20 && Degrees.textContent < 30){
          BackgroundVideo.src="istockphoto-454413422-640_adpp_is.mp4"
          WeatherImage.src='cloudy.png'
          WeatherCondition.textContent="Cloudy"
          WeatherCondition.style.color="white"
          CityName.style.color="white"
          CountryName.style.color="white"
          Degrees.style.color="white"
          Type.style.color="white"
        }
        else if(Degrees.textContent >= 30){
          BackgroundVideo.src="istockphoto-481953611-640_adpp_is.mp4"
          WeatherImage.src='sunny.png'
          WeatherCondition.textContent="Sunny"
          WeatherCondition.style.color="black"
          CityName.style.color="black"
          CountryName.style.color="black"
          Degrees.style.color="black"
          Type.style.color="black"
        }
    } catch{
        alert('please provide correct cityname')
    }
  }
}