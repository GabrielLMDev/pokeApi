const search = document.getElementById("searchPokemon");
const random = document.getElementById("randomPokemon")
const closeM = document.getElementById("cerrarModal");
const showM = document.getElementById("mostrarModal");
const modal = document.getElementById("infoPokemon");

search.addEventListener("click", function () {
  var textPokemon = document.getElementById('idPokemon').value;
  fetch('https://pokeapi.co/api/v2/pokemon/' + textPokemon)
    .then(response => {
      if (!response.ok) {
        alert('Sin resultados');
      }
      return response.json();
    })
    .then(data => {
      let imagenPokemon = document.getElementById('imgPokemon');
      imagenPokemon.src = data.sprites.front_default;

      let nombrePokemon = document.getElementById('nombre');
      nombrePokemon.innerHTML = data.name;

      let nombreP = document.getElementById('NombreP');
      nombreP.innerHTML = data.name;

      let tipoPokemon = document.getElementById('TipoP');
      tipoPokemon.innerHTML = data.types[0].type.name;

      let habilidadPokemon = document.getElementById('HabilidadP');
      habilidadPokemon.innerHTML = data.abilities[0].ability.name;

      let alturaPokemon = document.getElementById('AlturaP');
      alturaPokemon.innerHTML = data.height;

      let pesoPokemon = document.getElementById('PesoP');
      pesoPokemon.innerHTML = data.weight;
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
});

closeM.addEventListener("click", function () {
  closeModal();
});

showM.addEventListener("click", function () {
  showModal();
});

random.addEventListener("click", function () {
  var textPokemon = document.getElementById('idPokemon');
  textPokemon.value = randomNumber();
})

function showModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function randomNumber() {
  let number = Math.floor(Math.random() * 1017) + 1;
  return number;
}
