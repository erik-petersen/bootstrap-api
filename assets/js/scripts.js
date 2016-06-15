$( function() {
  "use strict";

$( ".btnRestaurant" ).on( "click", function(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log( "So far so good" );

  var location;
  var cuisine;

  location = $('.location-choice[name="location"]').val().toString();
  cuisine = $('.cuisine-choice[name="cuisine"]').val().toString();

  var params = {
    client_id: "JFJKRIE3BWM34PK0MJARBNJ3DAW4WFPQHV1BUC4I0T1NCOR2",
    client_secret: "URVQR5M1H0STFSZXYOF5EULRQ4EJRATZAXVEK2N3YM402RSR",
    v:20130815,
    ll:"40.7,-74",
    near: location,
    query: cuisine
  };

  console.log(location);

  // begin foursquare GET call
  $.ajax({
    dataType: 'json',
    url: 'https://api.foursquare.com/v2/venues/search',
    method: 'GET',
    data: params,
  }) // end ajax GET request
    .done(function (data) {

    var restaurantLi = $( ".restaurant" );
    for( var index = 0; index < 5; index++ ) {
      console.log(data.response.venues[index].name);
      $( restaurantLi[index] ).text( data.response.venues[index].name );
    }

    $(".location-choice").val("");
    $(".cuisine-choice").val("");

    }); // end done()

    // begin giphy GET call
    $.ajax({
      dataType: 'json',
      url: 'http://api.giphy.com/v1/gifs/search?q=' + cuisine + "+food&api_key=dc6zaTOxFJmzC",
      method: 'GET',
      // data: params,
    }) // end ajax GET request
      .done(function (data) {

      console.log(data.data[0].images.fixed_height.url);
      $( ".house-pic" ).attr( "src", data.data[0].images.fixed_height.url );

      }); // end done()
  });
})
