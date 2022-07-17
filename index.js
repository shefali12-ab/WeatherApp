// let clientID="fFZsHc_cDi0C2dwq8bSZ9xsTmPoOcO2eFdkZjjLo0Gg"
// let endpoint=`https://api.unsplash.com/photos/random/?client_id=${clientID}`;
// let imageElement=document.querySelector('#unsplashimage');
// let imageLink=document.querySelector('#imagelink')
// fetch(endpoint).then(function(response){
//     return response.json;
// }).then(function(jsonData){
// imageElement.src=jsonData.urls.regular;
// })

let weather={
    apikey:"db3fd34dd71234f072e38d7cae55683c",
    // city:()=>{
    //     const usercity=document.getElementsByName("input").text;
    //     return usercity;
    // }
    featchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+this.apikey).then((response)=>response.json()).then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
    const {name} = data;
    const {icon,description} =data.weather[0];
    const {temp,humidity} = data.main;
    const {speed} = data.wind;
    console.log(name,icon,description,temp,humidity,speed);
     document.querySelector(".city").innerHTML= "Weather in " +name;
     document.querySelector('.temp').innerHTML= temp +"℃";
     document.querySelector('.description').innerText= description ;
     document.querySelector('.humidity').innerHTML= "Humidity: " + humidity +"%";
     document.querySelector('.wind').innerHTML= "Wind Speed: " + speed +"km/h";

     document.querySelector(".weather").classList.remove("loading");


    },
    search: function(){
       this.featchWeather(document.querySelector(".searchbar").value);
    }
}
document.querySelector(".search button").addEventListener("click",function(){
   weather.search();
})
document.querySelector(".searchbar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
})
 weather.featchWeather("Lucknow");