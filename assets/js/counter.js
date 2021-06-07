function counter_function() {
  $.getJSON("http://gd.geobytes.com/GetCityDetails?callback=?", function (
    data
  ) {
    JSON.stringify(data);
  }).then(function (response) {
    let ip = response.geobytestitle;

    if (ip == "Bosnia and Herzegovina") {
      fetch(
        "https://api.countapi.xyz/update/snow-visitors-ba/visitors-ba/?amount=1"
      )
        .then((result) => result.json())
        .then((result) => {
          localStorage.setItem("on_load_counter_ba", result.value);
        });
    }

    if (ip == "Serbia") {
      fetch(
        "https://api.countapi.xyz/update/snow-visitors-rs/visitors-rs/?amount=1"
      )
        .then((result) => result.json())
        .then((result) => {
          localStorage.setItem("on_load_counter_rs", result.value);
        });
    }
    if (ip == "Croatia") {
      fetch(
        "https://api.countapi.xyz/update/snow-visitors-hr/visitors-hr/?amount=1"
      )
        .then((result) => result.json())
        .then((result) => {
          localStorage.setItem("on_load_counter_hr", result.value);
        });
    }
    if (ip == "Slovenia") {
      fetch(
        "https://api.countapi.xyz/update/snow-visitors-slo/visitors-slo/?amount=1"
      )
        .then((result) => result.json())
        .then((result) => {
          localStorage.setItem("on_load_counter_sl", result.value);
        });
    }
    if (ip == "Montenegro") {
      fetch(
        "https://api.countapi.xyz/update/snow-visitors-mne/visitors-mne/?amount=1"
      )
        .then((result) => result.json())
        .then((result) => {
          localStorage.setItem("on_load_counter_me", result.value);
        });
    }
    if (ip == "Albania") {
      fetch(
        "https://api.countapi.xyz/update/snow-visitors-al/visitors-al/?amount=1"
      )
        .then((result) => result.json())
        .then((result) => {
          localStorage.setItem("on_load_counter_al", result.value);
        });
    }
    if (ip == "North Macedonia") {
      fetch(
        "https://api.countapi.xyz/update/snow-visitors-mk/visitors-mk/?amount=1"
      )
        .then((result) => result.json())
        .then((result) => {
          localStorage.setItem("on_load_counter_mk", result.value);
        });
    }
    if (ip == "Bulgaria") {
      fetch(
        "https://api.countapi.xyz/update/snow-visitors-bg/visitors-bg/?amount=1"
      )
        .then((result) => result.json())
        .then((result) => {
          localStorage.setItem("on_load_counter_bg", result.value);
        });
    }
    if (ip == "Romania") {
      fetch(
        "https://api.countapi.xyz/update/snow-visitors-ro/visitors-ro/?amount=1"
      )
        .then((result) => result.json())
        .then((result) => {
          localStorage.setItem("on_load_counter_ro", result.value);
        });
    }
  });

  fetch("https://api.countapi.xyz/update/snow-agency/visitor/?amount=1")
    .then((result) => result.json())
    .then((result) => {
      localStorage.setItem("on_load_counter", result.value);
    });
}

window.onload = counter_function;
