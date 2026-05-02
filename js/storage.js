function saveData(key,data){

    localStorage.setItem(key,JSON.stringify(data))

}

function getData(key){

    let d = localStorage.getItem(key)

    if(!d) return null

    return JSON.parse(d)

}