async function getData(url){
    try {
        let res = await fetch(url)

        let data = await res.json()
         data = data.meals;
        return data;
    }
    catch(e){
        console.log("e", e)
    }
}

function appendData(data,location){
    data.forEach(({strMeal,strMealThumb}) => {
        let div = document.createElement("div")
        let h3 = document.createElement("h3");
        h3.innerHTML = strMeal
        let img = document.createElement("img")
        img.setAttribute("class","food")
        img.src = strMealThumb
        div.append(img,h3)
        location.append(div)
    })
}


export {getData, appendData}