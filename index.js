


let coordinates = [{ lat: 41.66322605092642, lng: -77.82340454232315 }]
let searches = ["47-10%20Austell%20Pl%202nd%20floor%2C%20Long%20Island%20City%2C%20NY%2011101"]
var map; // google maps api

console.log(coordinates)
function geocodeME(event){
    event.preventDefault()
let x = document.querySelector("#site-search").value
searches.push(x.replace(" ", "%20"))
}


//GEOCODING API
let geoapiid = "pk.3b76d3390feef27f7d252b1dc6788c2c"
  let city1 = `https://us1.locationiq.com/v1/search?key=${geoapiid}&q=`
  
  let city2 = searches[searches.length-1]
  let city3 = "&format=json"
  let cityMAIN = `${city1}${city2}${city3}`

console.log(cityMAIN)
console.log("___________________________________")


fetch(cityMAIN)
.then((response) => response.json()).then((data) => {

let latitude = data[0].boundingbox[0]
let longitude = data[0].boundingbox[2]

coordinates.push({lat: latitude, lng: longitude})

}).catch((error) => {
    
    console.log(error)
  }) //END OF FETCH FROM GEOCODEME***************************




function initMap() {//GOOGLE MAPS API

//MAPS API WITH MARKERS
// Initialize and add the map




const homelocal = coordinates[coordinates.length-1]
    // The map, centered at Uluru
    
    const marker0 = new google.maps.Marker({
        position: homelocal,
        map: map,
      });
    // The location of big bend
    const bigbend = { lat: 29.281262599614543, lng: -103.25034877571737 };
   
    // The marker, positioned at Big Bend National Park

    const marker = new google.maps.Marker({
      position: bigbend,
      map: map,
    });

    const cherry = { lat: 41.66322605092642, lng: -77.82340454232315 };

    // The marker, positioned at Cherry Springs State Park

    const marker2 = new google.maps.Marker({
      position: cherry,
      map: map,
    });

    const sandDunes = { lat: 37.7940008252381, lng: -105.59327612114384 };

    // The marker, positioned at Great Sand Dunes National Park and Preserve
    const marker3 = new google.maps.Marker({
      position: sandDunes,
      map: map,
    });

if(coordinates.length>2){ map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: homelocal,
  })}
else{
     map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: cherry,})
  }
  
}

  window.initMap = initMap;


  console.log("https://visible-planets-api.herokuapp.com/v2?latitude=32&longitude=-98")
  //VISIBLE PLANETS API
//https://github.com/csymlstd/visible-planets-api  --> github link
  fetch("https://visible-planets-api.herokuapp.com/v2?latitude=32&longitude=-98")
  .then((response) => response.json()).then((data) => {

    console.log(data)


}).catch((error) => {
    
    console.log(error)
  }) 


// //WEATHER API
let apiid = "a6e46b7a3f90a5e45660927441f74edf"
let latty = (coordinates[coordinates.length-1]).lat
let longy = (coordinates[coordinates.length-1]).lng
 
let appidOPENWEATHER = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiid}`
console.log(appidOPENWEATHER)

// fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latty}&lon=${longy}&exclude={part}&appid={${apiid}}`)

  fetch(appidOPENWEATHER)
  .then((response) => response.json()).then((data) => {

}).catch((error) => {
    
    console.log(error)
  })




  let form = document.querySelector("#form");

  form.addEventListener("submit",geocodeME)