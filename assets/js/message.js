$.getJSON("http://gd.geobytes.com/GetCityDetails?callback=?", function (data) {
  JSON.stringify(data);
}).then(function (response) {
  let ip = response.geobytestitle;

  if (ip == "Bosnia and Herzegovina") {
    message_function(ip);
  }

  if (ip == "Serbia") {
    message_function(ip);
  }
});

function message_function(userIP) {
  if (userIP == "Bosnia and Herzegovina") {
    message =
      "Čestitamo! Budući da dolazite iz BiH, aktivirali ste naš poseban popust na usluge web - developmenta od čak 30%! Ne propustite ovu odličnu priliku!";

    localStorage.setItem("on_load_message_ba", message);
  }
  if (userIP == "Serbia") {
    message =
      "Čestitamo! Budući da dolazite iz Srbije, aktivirali ste naš poseban popust na usluge web-designa od čak 30%! Ne propustite ovu odličnu priliku! Vrijedi još danas!";

    localStorage.setItem("on_load_message_sr", message);
  }
}
