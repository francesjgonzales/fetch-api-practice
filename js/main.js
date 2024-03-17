/*
Fetch Fundamentals

This example requires you to send a local fetch request for a JSON
file, and to render the following HTML for each of the returned objects
in the array.
    
Sample HTML
    <div class="mt-3 card" >
        <img class="card-img-top" src="CAT PICTURE HERE" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">CAT NAME HERE </h5>
        <p class="card-text">CAT TEXT HERE</p>
        </div>
    </div>

Use the following list as a guide to complete the task:

- select any requried elements from the document
- create a getCats function that will fetch the local cats-with-jobs.json file
    - the function should accept a function parameter, that will be called 
      when the data has been resolved, and passed the array of fetched cats
      as a single argument
- create a renderCats function that will accept a single parameter, which
  should be an array of cat data
    - the function should iterate over the array (e.g. use .forEach()) and render
      each cat using the template HTML provided above
- call the getCats function, and pass in the renderCats function as an argument
    - when the page loads, you should now see the cats rendered on the page
*/


const getAlberta = async () => {
  const dbResponse = await fetch('/data/db.json')
  const dataResponse = await dbResponse.json()
  console.log(dataResponse.alberta);
  return dataResponse.alberta
}

const renderTemplate = (articles) => {
  let dataDisplay = document.querySelector('.cat-display')
  dataDisplay.innerHTML = ""

  articles.map((article) => {
    dataDisplay.innerHTML += `<div class="mt-3 card" >
        <div class="card-body">
        <h5 class="card-id">${article.id} </h5>
        <h5 class="card-title">${article.title}</h5>
        <p class="card-article">${article.article}</p>
        <p class="card-text">theme</p>
        <p class="card-text">year</p>
        </div>
    </div>`
  })
}



const showData = async () => {
  const allData = await getAlberta()
  console.log(allData)
  renderTemplate(allData)
}
showData();

/* console.log(getData())

const renderData = (albertas) => {
  let dataDisplay = document.querySelector('.cat-display')
  dataDisplay.innerHTML = ""

  albertas.map((alberta) => {
    dataDisplay.innerHTML += `<div class="mt-3 card" >
        <img class="card-img-top" src="CAT PICTURE HERE" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">CAT NAME HERE </h5>
        <p class="card-text">CAT TEXT HERE</p>
        </div>
    </div>`
  })
}
console.log(renderData())

const showData = async () => {
  const albertas = await getData()
  renderData(albertas)
}

showData() */