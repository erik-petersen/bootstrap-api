var params = {
  client_id:"JFJKRIE3BWM34PK0MJARBNJ3DAW4WFPQHV1BUC4I0T1NCOR2",
  client_secret:"URVQR5M1H0STFSZXYOF5EULRQ4EJRATZAXVEK2N3YM402RSR",
  v:20130815,
  ll:"40.7,-74",
  query:"sushi"
};

$.ajax({
  dataType: 'json',
  url: 'https://api.foursquare.com/v2/venues/search',
  method: 'GET', // This is the default, but I thought I'd show it,
  data: params
  })
  .done(function (data) {

  var restaurantLi = $( ".restaurant" );
  for( var index = 0; index < 5; index++ ) {
    console.log(data.response.venues[index].name);
    $( restaurantLi[index] ).text( data.response.venues[index].name );
  }

});
