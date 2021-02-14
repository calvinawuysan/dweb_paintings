const endpoint_url = 'https://51018003.p-web.click/backend/api';

function getPaintings() {
  fetch(endpoint_url + "/paintings/paintingdetail")
    .then(status)
    .then(json)
    .then(function(data) {
      var paintingsHTML = "";
      data.paintings.forEach(function(pa) {
        paintingsHTML += `
          <div class = "col s6">
            <div class="card">
              <a href="./paintings.html?painting_id=${pa.Painting_ID}">
                <div class="card-image waves-effect waves-block waves-light">
                  <img src="img/${pa.Image}" />
                </div>
              </a>
              <div class="card-content text-center">
                <h6><strong>${pa.Tittle}</strong></h6>
              </div>
            </div>
          </div>
        ` ;
        $("#section_title").html( "Paintings" );
    });
              document.getElementById("listpaintings").innerHTML = paintingsHTML;
              document.getElementById("section_title").innerHTML = sectiontitle;
      })
    .catch(error);
}


function getPainters() {
  fetch(endpoint_url + "/painters/painterdetail")
    .then(status)
    .then(json)
    .then(function(data) {
      var paintersHTML = "";
      data.painters.forEach(function(pt) {
        paintersHTML += `
          <div class = "col m3 s6">
            <div class="card">
              <a href="./painters.html?painter_id=${pt.painter_ID}">
                <div class="card-image waves-effect waves-block waves-light">
                  <img src="img/${pt.Img}" />
                </div>
              </a>
              <div class="card-content text-center">
                <h6><strong>${pt.Name}</strong></h6>
              </div>
            </div>
          </div>
        ` ;
        $("#section_title").html( "Painters" );
    });
              document.getElementById("listpaintings").innerHTML = paintersHTML;
              document.getElementById("section_title").innerHTML = sectiontitle;
      })
    .catch(error);
}

function getRecommendations() {
  fetch(endpoint_url + "/recommendations/recommendationdetail")
    .then(status)
    .then(json)
    .then(function(data) {
      var recomsHTML = "";
      data.recommendations.forEach(function(re) {
        recomsHTML += `
          <div class = "col s6">
            <div class="card">
              <a href="./recommendations.html?r_code=${re.R_code}">
                <div class="card-image waves-effect waves-block waves-light">
                  <img src="img/${re.Image}" />
                </div>
              </a>
              <div class="card-content text-center">
                <h6><strong>${re.name}</strong></h6>
              </div>
            </div>
          </div>
        ` ;
        $("#section_title").html( "Recommendations" );
    });
              document.getElementById("listpaintings").innerHTML = recomsHTML;
              document.getElementById("section_title").innerHTML = sectiontitle;
      })
    .catch(error);
}


function getPaintingDetail( painting_id ){
  fetch(endpoint_url+ "/paintings/paintingdetail/paintingid/" +painting_id)
 .then(status)
 .then(json)
 .then(function(data) {
  var paintinginfo = "";
  data.paintings.forEach(function(pa) {
  paintinginfo += `
  <div class="container">
  <h4 id="section_title">Painting Detail</h4>
  <div class="col s6">
      <img class="responsive-img" src="img/${pa.Image}"/>
      <p> Biodata
        <a href="./painters.html?painter_id=${pa.Painter_ID}">${pa.Name}</a>
      </p>
  </div>
  <div class="col s6">
  <table class="">
  <thead>
    <tr>
        <th>Painting ID</th>
        <td class="grey-text text-darken-2">${pa.Painting_ID}</td>
    </tr>
    <tr>
    <th>Title</th>
      <td class="grey-text text-darken-2">${pa.Tittle}</td>
    </tr>
    <tr>
      <th>Media</th>
      <td class="grey-text text-darken-2"> ${pa.Media}</td>
    </tr>
    <tr>
      <th>Size</th>
      <td class="grey-text text-darken-2"> ${pa.Size}</td>
    </tr>
    <tr>
      <th>Painter</th>
      <a href="./painters.html?painter_id=${pa.Painter_ID}">
      <td class="grey-text text-darken-2"> ${pa.Name}</td>
      </a>
    </tr>


  </div>
  </div>

`;
});
      document.getElementById("paintingsdetail").innerHTML = paintinginfo;
})

  .catch(error);

}

function getPainterDetail( painter_id ){
  fetch(endpoint_url+ "/painters/painterdetail/painterid/" +painter_id)
 .then(status)
 .then(json)
 .then(function(data) {
  var painterinfo = "";
  data.painters.forEach(function(pt) {
  painterinfo += `
  <div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
        <h1 class="header center white-text">Painter Informations</h1>
      </div>
    </div>
    <div class="parallax">
      <img src="img/gambar2_1080.jpg"
      srcset="img/gambar2_480.jpg 480w,
      img/gambar2_720.jpg 720w,
      img/gambar2_1080.jpg 1080w"

      size="100vw"
      alt="painters"
      style="transform: translate3d(-50%, 0px, 0px);opacity: 1;"
      >
    </div>
  </div>
  <div class="container">
  <div class="col s6">
  <br>
  <table class="">
  <thead>
    <tr>
    <th>Painter ID</th>
        <td class="grey-text text-darken-2">${pt.painter_ID}</td>
    </tr>
    <tr>
    <th>Name</th>
      <td class="grey-text text-darken-2">${pt.Name}</td>
    </tr>
    <tr>
      <th>City/District</th>
      <td class="grey-text text-darken-2"> ${pt.City_District}</td>
    </tr>
    <tr>
      <th>Province</th>
      <td class="grey-text text-darken-2"> ${pt.Province}</td>
    </tr>
    <tr>
      <th>Phone/WA</th>
      <td class="grey-text text-darken-2"> ${pt.Phone_WA}</td>
    </tr>
    <tr>
      <th>E-mail</th>
      <td class="grey-text text-darken-2"> ${pt.Email}</td>
    </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  </div>
  <div class="col s15 m6">
    <br>
      Works : ${pt.Tittle}
  <br>
  <div class="card">
    <a href="./paintings.html?painting_id=${pt.Painting_ID}">
      <div class="card-image waves-effect waves-block waves-light z-depth-3">
      <img src = "img/${pt.Image}"/>
    </div>
    </a>
  </div>
  </div>
  </div>
`;
});
      document.getElementById("paintersdetail").innerHTML = painterinfo;
})

  .catch(error);

}

function getRecommendationDetail( r_code ){
  fetch(endpoint_url+ "/recommendations/recommendationdetail/code/" +r_code)
 .then(status)
 .then(json)
 .then(function(data) {
  var recominfo = "";
  data.recommendations.forEach(function(re) {
    recominfo = `
  <div class="container">
  <h4 id="section_title">Recommedations</h4>
  <div class="col s6">
     <img class="responsive-img" src="img/${re.Image}"/>
  </div>
  <div class= "col s6">
  <table class="">
  <thead>
    <tr>
    <th>R_Code</th>
        <td class="grey-text text-darken-2">${re.R_code}</td>
    </tr>
    <tr>
    <th>Name</th>
      <td class="grey-text text-darken-2">${re.name}</td>
    </tr>
    <tr>
      <th>Price</th>
      <td class="grey-text text-darken-2"> ${re.Price}</td>
    </tr>
    <tr>
      <th>Recommended by</th>
      <td class="grey-text text-darken-2"> ${re.Name}</td>
    </tr>
  </thead>
  <tbody>
  </tbody>
  </table>
  <p> Biodata
    <a href="./painters.html?painter_id=${re.Painter_ID}">${re.Name}</a>
  </p>
  </div>
  </div>

`;
});
      document.getElementById("recommendationsdetail").innerHTML = recominfo;
})

  .catch(error);

}
