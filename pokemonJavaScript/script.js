

$(document).ready(function () {

  const url = "https://pokebuildapi.fr/api/v1/pokemon/limit/16";
  $.ajax({
    url: url,
    type: "GET",
    dataType: 'json',
    success: (pokemons) => {
      for (const pokemon of pokemons) {
        $(".row").append(` <div class="col-md-3">
          <div class="card" style="width: 18rem;">
              <img src="${pokemon.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${pokemon.name}</h5>
                <p class="card-text"><span>${pokemon.apiTypes[0].name} </span> </a>
              </div>
            </div>
      </div>`

        )
      }

    },
    error: () => {
      console.log("erreur");
    }
  })
});