# User Story - Current Version #
As a user, I find a rendered map of all the Dark Sky preserves in the United States plotted on a map via latitude and longitude coordinates on Google Maps API.

As a user, I see a search bar upon page load.

 The location inputted here will render a marker on the map using geocoding from the [LocationIQ](https://locationiq.com/docs) API
 to turn an input place address into latitude and longitude coordinates. These coordinates will be inputted into the google maps function to render the marker.

As a user, I can input my location and find major celestial objects that are visible to the naked eye at night in my locality, such as various planets and Star Clusters.

The planets will be rendered from the [Visible Planets API](https://github.com/csymlstd/visible-planets-api) and have icons or gif animated images using [Pixabay Image Library](https://pixabay.com), GIMP Image Editor, and other free to use noncommercial sources.

 As a user, I will also see the current moon phase upon search of my locality which will render an image that displays the phase of the moon via the [Open Weather API](https://openweathermap.org/appid).

 As a user, I can also find the meteor showers that will occur within a ten day range from my current time and location using a JS function that runs code based on current time, location, and if meteor shower will be visible or not if those to are true.

 As a user, I can also see if the weather conditions are ideal or will be ideal to view the night sky. This information will also come from the [Open Weather API](https://openweathermap.org/appid).







# Hive of Heaven #
A Bee Hive is full of... well... bees! The night sky is full of stars. This app is meant to be a culmination of useful information for the average city-dweller to find and get to a place of starry beauty.

A Night Sky Companion APP that integrates features to show what's in your sky tonight, and ultimately to get to somewhere that gives you better view of the Night Sky according to research and user input.
<!-- 
The app will contain:

- A Text Bar for User Location Searches
- Google Maps API Integration - use markers to point out Locations of Dark Sky reserves in the United States 
- Planet API - shows the planets that are above the horizon in client location upon page load and other locations upon search.
- Upcoming Meteor Showers - shows the meteor showers that will be coming up in client's localities.
- Weather in area - important for night sky viewing. Will show if it is cloudy or rainy or clear sky. -->


<!-- 
## How the App Works ##


A map will be displayed that initially shows the locations of ten dark sky reserves from Google Maps API upon load of page.

There will be a Text Input Submission bar and button on the page. If a user searches for a location, the page will refresh with new rendered information. The information will include:
- Map location change to current location
- Meteor Shower Icon GIF with relevant imminent Meteor Showers for that locality and time.
- Planets that will be visible from that locality and time.
- Current Weather : will it be cloudy or rainy or clear skies for optimal starry night observance?
- Code that will show whether or not Pleaides/M45 Star Cluster is Visible at locality and time. -->
 ## LINKS: ##

<!-- Meteor Shower and Other Celestial API

https://github.com/orbitalindex/awesome-space -->

Geocoding API

[LocationIQ](https://locationiq.com/docs)

Planets above Horizon API

[Visible Planets](https://github.com/csymlstd/visible-planets-api)

Moon Phase and Weather API

[Open Weather](https://openweathermap.org/appid)

Google Maps API

[Google Maps Platform](https://developers.google.com/maps)


## Future Additions ##

- Clients may add their own night sky havens to the map for other users to visit. Must Login and validate email.
- Directions functionality -  clients search location to see nearest dark sky havens to their own location with directions.



