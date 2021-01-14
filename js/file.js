

 let btn=document.getElementById("searchBtn")
let searchInput=document.getElementById("searchInput")



allRecipes=[]



async function getRecipe(term)
{
let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);//Async
      apiResponse = await  apiResponse.json();
      allRecipes = apiResponse.recipes;
      displayAllRecipes();
}

function displayAllRecipes(){
    let item=``;
    for(let i = 0; i<allRecipes.length ; i++){

        let myId="'"+allRecipes[i].recipe_id+"'"//3shan lw fi 7rof fi id
        item+=` <div "  class="col-md-4">
        <div class="recipe" onclick="getRecipeDetails(${myId})">
          <img src="${allRecipes[i].image_url}" class="w-100" alt="">
            <h5 class="color-mine font-weight-bolder py-2">${allRecipes[i].title}</h5>
            <p>${allRecipes[i].publisher}</p>
          </div>
      </div>`;
    }

    document.getElementById("recipesRow").innerHTML=item
}

    btn.addEventListener("click",function(){
        getRecipe(searchInput.value)
    })

  

let recipeDetails ={}; 

async function getRecipeDetails(id)
{
  

   let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
      apiResponse = await apiResponse.json();
      recipeDetails = apiResponse.recipe;
      showRecipeDetails()
     
}

function showRecipeDetails()
{
   let item2 
   = `
   <div class="recipesdetails">
         <h4 class="color-mine py-2 font-weight-bolder">${recipeDetails.title}</h4>
         <img src="${recipeDetails.image_url}" class="w-75">
         <p class='p-2'>${recipeDetails.publisher}</p>

         <ul>`;
         for(let x of recipeDetails.ingredients )
        {

            item2+=`<li class='font-weight-bolder py-2'>${x}</li>`;
        }        
           
        item2+=`  </ul>
   </div>`

 document.getElementById("recipeDetails").innerHTML=item2
}



     