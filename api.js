function API() {
  console.log('fff');
  try {
    fetch('https://api.football-data.org/v2/competitions/PL/matches', {
      method: 'GET',
      headers: {
        'X-Auth-Token': '4603ddaef95c46b2bf627c4da9dbd4f9',
        // 'Access-Control-Allow-Methods' : 'GET',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'x-auth-token, x-response-control',
        // 'Content-Length': '0',
        // 'Content-Type': 'text/plain',
        // 'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    // $.ajax({
    //   headers: { 'X-Auth-Token': '4603ddaef95c46b2bf627c4da9dbd4f9' },
    //   url: "http://api.football-data.org/v2/matches?status='LIVE'",
    //   dataType: 'json',
    //   type: 'GET'
    // }).done(function (response) {
    //   // do something with the response, e.g. isolate the id of a linked resource
    //   console.log(response);
    // });
  } catch (err) {
    console.log(err);
  }
}
// getWeather(2487956);
API(); // zagreb
