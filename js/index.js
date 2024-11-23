//console.log("index file added")

//load categories 
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.forEach((item) => {
    //console.log(item);
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    categoryContainer.append(button)
  });
};


//load videos 
const loadPets = ()=>{
  fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
  .then((res)=> res.json())
  .then((data)=>displayPets(data.pets))
}
const displayPets = (pets) =>{
  console.log(pets)
  const petsContainer = document.getElementById("pets");
  pets.forEach((pet)=>{
    const card = document.createElement("div");
    card.classList = "card card-compact"
    card.innerHTML = 
    `
    <figure>
    <img class="h-full w-full object-cover"
      src=${pet.image}
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2">
    <div>
      <h2>${pet.pet_name}</h2>
      <ul>
        <li>Breed: ${pet.breed}</li>
        <li>Birth: ${pet.data_of_brith}</li>
        <li>Gender: ${pet.gender}</li>
        <li>Price: ${pet.price}</li>

      </ul>

    
    </div>
    <div></div>
    
  </div>
    `
    petsContainer.append(card);

  })
}

loadCategories();
loadPets();
