



let coordinatesArrayLAT =[40]
let coordinatesArrayLON =[-73]
//DECLARING THE GOOGLE MAPS MAP VARIABLE
var map;
//**********************************************************************************************************
//THE LINE OF CODE BELOW WILL SELECT THE DIV THAT HAS AN ID OF MAP IN THE HTML DOCUMENT AND RENDER THE GOOGLE MAPS UPON PAGELOAD
let googleMAPS = document.getElementById("map");

//**********************************************************************************************************
//DARK SKY RESERVE COORDINATES THAT WILL BE RENDERED ON MAP UPON PAGE LOAD
//**********************************************************************************************************
var cherry = { lat: 41.66322605092642, lng: -77.82340454232315 };
var sandDunes = { lat: 37.7940008252381, lng: -105.59327612114384 };
var bigbend = { lat: 29.281262599614543, lng: -103.25034877571737 };
 //---------------------------------------->THIS ONE
//**********************************************************************************************************

//DDING THIS LINE OF COMMENTED CODE TO TEST GIT PUSH
//FROM THE SEARCH BAR, WHEN A USER CLICKS 
function geocodeME(event){

  event.preventDefault()

  // setTimeout(() => {
    //THE CODE BELOW WILL TAKE THE VALUE THAT IS IN THE TEXT FIELD IN THE SEARCH BAR AND SAVE IT TO VARIABLE X
    var x = document.getElementById("site-search").value;
    // THE CODE BELOW WILL CHANGE THE STRING VALUE FROM THE SEARCH AND CONVERT IT TO A STIRING THAT CAN BE READ BY THE LOCATION IQ API. IT REPLACES THE SPACES WITH %20 AND COMMAS WITH %2C. THIS CODE WILL BE INSERTED INTO CITYMAIN AS PART OF THE COMPLETE URL FOR FETCHING THE API
    var y = x.replaceAll(" ", "%20").replaceAll(",","%2C")
//THE CODE BELOW IS THE API KEY
  let geoapiid = "pk.3b76d3390feef27f7d252b1dc6788c2c"
  //THE CODE BELOW WILL TAKE THE FIRT PART OF THE API URL WHICH INCLUDESS THE API KEY INSERTED VIA OBJECT LITERAL
  let city1 = `https://us1.locationiq.com/v1/search?key=${geoapiid}&q=`
    //THE CODE BELOW WILL TAKE THE LAST PART OF THE API URL WHICH INCLUDES THE API KEY
  let city3 = "&format=json"
  //THE CODE BELOW WILL COMBINE THE THREE STRINGS TO MAKE A COMPLETE URL FOR THE FETCH API FOR LOCATION-IQ API
  let cityMAIN = `${city1}${y}${city3}`
//THE CODE BELOW WILL GET THE DATA FROM THE URL WHICH BASICALLY IS THE STREET ADDRESS CONVERTED INTO COORDINATES FOR A MAP (LATITUDE AND LONGITUDE)
  fetch(`${cityMAIN}`)
  //THE CODE BELOW WILL TAKE THE JSON DATA AND CONVERT IT TO JAVASCRIPT FOR EASY ACCESS THEN TAKE THAT SAME DATA TO BE IMPLEMENTED IN VARIOUS WAYS
  .then((response) => response.json()).then((data) => {
  //THE DATA FETCHED WILL RENDER FORWARD GEOCODED ADDRESS , WHICH MEANS IT WILL TAKE THE STREET INPUTTED FROM THE SEARCH BAR AND CONVERT IT TO LATITUDE AND LONGITUDE COORDINATES
  var latitude = Number(data[0].lat);
  var longitude = Number(data[0].lon);
  //the code below pushes values into array for alter access by other APIs
  coordinatesArrayLAT.push(latitude);
  coordinatesArrayLON.push(longitude)
//THE CODE BELOW TAKES THE RENDERED LATITUDE & LONGITUDE AND SAVES IT TO A VARIABLE
let homelocal = { lat: latitude, lng: longitude }
//THE CODE BELOW MAKES A NEW MARKER EVERY TIME THE BUTTON IS CLICKED WITH A VALID ADDRESS INPUTTED
    let marker0 = new google.maps.Marker({
      position: homelocal,
      icon: {                             
        url: "telescopeicon.png"
      }
    })
    marker0.setMap(map);

    event.preventDefault()

}).catch((error) => {
      
      console.log(error)
    }) 

   console.log(coordinatesArrayLAT[coordinatesArrayLAT.length-1].toFixed(0))

//PLANET API CALL
// fetch(`https://visible-planets-api.herokuapp.com/v2?latitude=${coordinatesArrayLAT[coordinatesArrayLAT.length-1].toFixed(0)}&longitude=${coordinatesArrayLON[.length-1].toFixed(0)}`)
// .then((response) => response.json()).then((data) => {

//   console.log(data)


// }).catch((error) => {
  
//   console.log(error)
// }) 
    
  }

  
//**********************************************************************************************************
//**********************************************************************************************************
//**********************************************************************************************************
// GOOGLE MAPS - THE CODE BELOW CREATES THE MARKERS FOR THE DARK SKY PRESERVES
//**********************************************************************************************************
//**********************************************************************************************************
//**********************************************************************************************************

//Google MAp initialized at startup that will contain markers of the Dark Sky preserves
function initMap() {
map = new google.maps.Map(googleMAPS, {
  zoom: 4,
  center: cherry})

    const marker = new google.maps.Marker({
      position: bigbend,
      map: map,
    });

    const marker2 = new google.maps.Marker({
      position: cherry,
      map: map,
    });

    const marker3 = new google.maps.Marker({
      position: sandDunes,
      map: map,
    });

}
//**********************************************************************************************************
//**********************************************************************************************************
//**********************************************************************************************************
// GOOGLE MAPS - THE CODE ABOVE CREATES THE MARKERS FOR THE DARK SKY PRESERVES
//**********************************************************************************************************
//**********************************************************************************************************
//**********************************************************************************************************
//**********************************************************************************************************
//**********************************************************************************************************
//******************************************************************************************************* */

//**********************************************************************************************************
//********************************************************************************************************** */
//PLANT APIS
// function planetsRENDER(){
//   fetch(`https://visible-planets-api.herokuapp.com/v2?latitude=${coordinatesArrayLAT[coordinatesArrayLAT.length-1].toFixed(0)}&longitude=${coordinatesArrayLON[.length-1].toFixed(0)}`)
//   .then((response) => response.json()).then((data) => {
  
//     console.log(data)
  
  
//   }).catch((error) => {
    
//     console.log(error)
//   }) 
//   }



//THE CODE BELOW IS THE EVENT LISTENSER THAT WILL RUN THE LOCATION IQ API AND INTEGRATE IT WITH THE GOOGLE API ABOVE( WHEN IT IS CLICKED):
//THIS CODE WILL SELECT THE BUTTON IN THE HTML DOCUMENT
  let button = document.querySelector("#button");
  // THIS CODE WILL "LISTEN" FOR THE BUTTON CLICK TO RUN THE FUNCTION "GEOCODEME"
  button.addEventListener("click",geocodeME);



// THE CODE BELOW WILL INITIALIZE THE INITMAP INITIAL GOOGLE MARKER AND MAP CREATION FUNCTION
  window.initMap = initMap;


      //WILL WORK ON OTHER APIS LATER TIME BELOW

//**********************************************************************************************************
//******************************************************************************************************* */
//**********************************************************************************************************
//********************************************************************************************************** */
//**********************************************************************************************************
//******************************************************************************************************* */
//**********************************************************************************************************
//********************************************************************************************************** */
//**********************************************************************************************************
//********************************************************************************************************** */
// //**********************************************************************************************************

//**********************************************************************************************************
//WEATHER AND MOON API
// let apiid = "a6e46b7a3f90a5e45660927441f74edf"
// // let latty = (coordinates[coordinates.length-1]).lat
// // let longy = (coordinates[coordinates.length-1]).lng
 
// let appidOPENWEATHER = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiid}`
// console.log(appidOPENWEATHER)

// // fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latty}&lon=${longy}&exclude={part}&appid={${apiid}}`)

//   fetch(appidOPENWEATHER)
//   .then((response) => response.json()).then((data) => {

// }).catch((error) => {
    
//     console.log(error)
//   })
//**********************************************************************************************************


// console.log(coordinates);
// console.log(homelocal)
// console.log(searches)


//       var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
// var mapOptions = {
//   zoom: 4,
//   center: myLatlng
// }
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);

// var marker = new google.maps.Marker({
//     position: myLatlng,
//     title:"Hello World!"
// });

  window.initMap = initMap;
