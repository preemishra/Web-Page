let http = new XMLHttpRequest();
http.open('get','movie.json',true);
http.send();
http.onload=function(){
    if(this.readyState == 4 && this.status==200){
       let movie = JSON.parse(this.responseText);
       let output ="";
       for(let item of movie){
        output+=`
        <div class ="movie">
            <img src="${item.poster}" alt="${item.image}"></img>
            <p class = "name">${item.title}</p>
            <p class = "description">${item.description}</p>
            <p class = "year">
            <span>${item.year}</span>
            <span>&euro;</span>
            </p>
            
        </div>

       ` ;
       }
     document.querySelector(".movie").innerHTML=output;
    }
}