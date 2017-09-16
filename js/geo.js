// geo
$.getJSON( "http://freegeoip.net/json/", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<tr><td>" + key + "</td><td>" + val + "</td><tr>" );
  });
 
  $( "<table/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "#geo" );
});
// ipapi
$.getJSON( "http://ipapi.co/json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<tr><td>" + key + "</td><td>" + val + "</td><tr>" );
  });
 
  $( "<table/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "#ipapi" );
});
// header
$.getJSON( "http://headers.jsontest.com/", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<tr><td>" + key + "</td><td>" + val + "</td><tr>" );
  });
 
  $( "<table/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "#header" );
});
