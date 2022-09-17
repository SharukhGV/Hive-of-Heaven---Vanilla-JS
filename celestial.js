


let planetrender = document.querySelector("div.planetrender")

let coordinatesArrayLAT =[40]
let coordinatesArrayLON =[-73]
//DECLARING THE GOOGLE MAPS MAP VARIABLE

 //---------------------------------------->THIS ONE
//**********************************************************************************************************

//DDING THIS LINE OF COMMENTED CODE TO TEST GIT PUSH
//FROM THE SEARCH BAR, WHEN A USER CLICKS 
function celestialME(event){

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
 const result =  fetch(`${cityMAIN}`)
  //THE CODE BELOW WILL TAKE THE JSON DATA AND CONVERT IT TO JAVASCRIPT FOR EASY ACCESS THEN TAKE THAT SAME DATA TO BE IMPLEMENTED IN VARIOUS WAYS
  .then((response) => response.json()).then((data) => {
  //THE DATA FETCHED WILL RENDER FORWARD GEOCODED ADDRESS , WHICH MEANS IT WILL TAKE THE STREET INPUTTED FROM THE SEARCH BAR AND CONVERT IT TO LATITUDE AND LONGITUDE COORDINATES
  var latitude = Number(data[0].lat);
  var longitude = Number(data[0].lon);
  //the code below pushes values into array for alter access by other APIs
  coordinatesArrayLAT.push(latitude);
  coordinatesArrayLON.push(longitude)
//THE CODE BELOW TAKES THE RENDERED LATITUDE & LONGITUDE AND SAVES IT TO A VARIABLE

    event.preventDefault()

return  fetch(`https://visible-planets-api.herokuapp.com/v2?latitude=${latitude.toFixed(0)}&longitude=${longitude.toFixed(0)}`)
  .then((response) => response.json()).then((data1) => {
//   console.log(data.data[0].name)
//   console.log(data.data[0].aboveHorizon)

//     if(data.data[0].name ==="mercury"){
//         if(data.data[0].aboveHorizon ===true){
//             let mercury = document.createElement("div");
//             mercury.innerHTML = "<p>Mercury</p>"
//             planetrender.after(mercury)

//     }
// }
// Object.values(data1.data[0]).aboveHorizon
let planets = document.querySelector(".planetrender")
planets.innerHTML = `<div class="insertPlanetINFO"><br>LOCATION</br>  <br> <h3> ${x}</h3> </br> <br>PLANETS VIEWABLE</br><div>`
    let plonets = document.querySelector(".planetclass")
    console.log(plonets)


for (i=0;i<data1.data.length;i++){

  console.log(data1.data[i].name)
  if(data1.data[i].name ==="Mercury"){
    plonets.innerHTML += `<br><img src= "mercury.png"></br>`
  }
  if(data1.data[i].name ==="Venus"){
    plonets.innerHTML += `<br><img src= "venus.png"</br>`
  }
  if(data1.data[i].name ==="Mars"){
    plonets.innerHTML += `<br><img src= "mars.png"></br>`
  }
  if(data1.data[i].name ==="Jupiter"){
    plonets.innerHTML += `<br><img src= "jupiter.png"></br>`
  }
  if(data1.data[i].name ==="Saturn"){
    plonets.innerHTML += `<br><img src= "saturn.png"></br>`
  }
  if(data1.data[i].name ==="Uranus"){
    plonets.innerHTML += `<br><img src= "uranus.png"></br>`
  }
  if(data1.data[i].name ==="Neptune"){
    plonets.innerHTML += `<br><img src= "neptune.png"></br>`
  }
// document.querySelector
//     let divPlanet = document.createElement("div")
//     divPlanet.innerHTML =`<br>${data1.data[i].name}</br>`
//     planetrender.append(divPlanet)

    

}

// if(data1.data[i].name.includes("mercury")){
//    let mercury= document.createElement("br")
//    mercury.setAttribute("class","mercury")
//    let themercury = document.querySelector(".mercury")
//    themercury.innerHTML=`<img src="mercury.png">`

//      let divPlanet = document.createElement("div")
//     divPlanet.innerHTML =  `<p>${data1[0].name}</p>
//     <p>${}</p>`
//      planetrender.append(divPlanet)
// }

    

  
  
  }).catch((error) => {
    
    console.log(error)
  }) 


})

result.catch((error) => {
      
      console.log(error)
    }) 

  //  console.log(coordinatesArrayLAT[coordinatesArrayLAT.length-1].toFixed(0))
    
  }

  
  //PLANET API CALL
// function planetCAll(){
// fetch(`https://visible-planets-api.herokuapp.com/v2?latitude=${coordinatesArrayLAT[coordinatesArrayLAT.length-1].toFixed(0)}&longitude=${coordinatesArrayLON[.length-1].toFixed(0)}`)
// .then((response) => response.json()).then((data) => {

//   console.log(data)


// }).catch((error) => {
  
//   console.log(error)
// }) 
// }
//**********************************************************************************************************
//**********************************************************************************************************
//**********************************************************************************************************
// GOOGLE MAPS - THE CODE BELOW CREATES THE MARKERS FOR THE DARK SKY PRESERVES
//**********************************************************************************************************
//**********************************************************************************************************
//**********************************************************************************************************

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



//THE CODE BELOW IS THE EVENT LISTENSER THAT WILL RUN THE LOCATION IQ API AND INTEGRATE IT WITH THE GOOGLE API ABOVE( WHEN IT IS CLICKED):
//THIS CODE WILL SELECT THE BUTTON IN THE HTML DOCUMENT
  let button = document.querySelector("#button");
  // THIS CODE WILL "LISTEN" FOR THE BUTTON CLICK TO RUN THE FUNCTION "GEOCODEME"
  button.addEventListener("click",celestialME);
  // button.addEventListener("click",planetCAll);



// THE CODE BELOW WILL INITIALIZE THE INITMAP INITIAL GOOGLE MARKER AND MAP CREATION FUNCTION
  // window.initMap = initMap;


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
// fetch(`https://visible-planets-api.herokuapp.com/v2?latitude=${coordinatesArrayLAT[coordinatesArrayLAT.length-1].toFixed(0)}&longitude=${coordinatesArrayLON[.length-1].toFixed(0)}`)
// .then((response) => response.json()).then((data) => {

//   console.log(data)


// }).catch((error) => {
  
//   console.log(error)
// }) 
// }

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

//   window.initMap = initMap;

// // Set the date we're counting down to
// var countDownDate = new Date("Aug 11, 2023 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);