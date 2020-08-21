//<!--Capturamos Variable de la id URl-->

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    var id = getParameterByName('id');
  console.log("Id: " + id)


//<!--Capturamos Variable de la lang URl-->

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    var lang = getParameterByName('lang');
  console.log("lang: " + lang)


//<!--Capturamos Variable de la units URl-->

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    var units = getParameterByName('units');
  console.log("units: " + units)


//<!--Capturamos Variable de la units URl-->

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    var APPID = getParameterByName('APPID');
  console.log("APPID: " + APPID)


//<!--Capturamos Variable de la city -->

    fetch('http://api.openweathermap.org/data/2.5/weather?id='+id+'&lang='+lang+'&units='+units+'&APPID='+APPID+'')
        .then(data1=>data1.json())
            .then(data1=>{
                console.log("sys: " + data1.name)
                
                cityname.innerHTML = '';
                cityname.innerHTML += `
                       <h4> - ${data1.name}</h4>  
                `

                country.innerHTML = '';
                country.innerHTML += `
                       <h4> - Country: ${data1.sys.country}</h4>  
                `          
                Longitud.innerHTML = '';
                Longitud.innerHTML += `
                       <h4> - Longitud: ${data1.coord.lon}</h4>  
                ` 
                latitud.innerHTML = '';
                latitud.innerHTML += `
                       <h4> - latitud: ${data1.coord.lat}</h4>  
                ` 
    })



//<!--Capturamos Variable de la Weather URl-->

    fetch('http://api.openweathermap.org/data/2.5/weather?id='+id+'&lang='+lang+'&units='+units+'&APPID='+APPID+'')
        .then(data1=>data1.json())
            .then(data1=>{
                console.log("Weather Main: " + data1.weather[0].main)
                
                Weathermain.innerHTML = '';
                Weathermain.innerHTML += `
                       <h4> - Main: ${data1.weather[0].main}</h4>  
                `
                
    })


//<!--Capturamos Variable de la Weather description URl-->

    fetch('http://api.openweathermap.org/data/2.5/weather?id='+id+'&lang='+lang+'&units='+units+'&APPID='+APPID+'')
        .then(data1=>data1.json())
            .then(data1=>{
                console.log("Weather Main: " + data1.weather[0].description)
                
                Weatherdescription.innerHTML = '';
                Weatherdescription.innerHTML += `
                       <h4> - Desc: ${data1.weather[0].description}</h4>  
                `
                
    })


//<!--Capturamos Variable de la Weather description URl-->

    fetch('http://api.openweathermap.org/data/2.5/weather?id='+id+'&lang='+lang+'&units='+units+'&APPID='+APPID+'')
        .then(data1=>data1.json())
            .then(data1=>{
                console.log("Weather icon: " + data1.weather[0].icon)
                
                Weathericon.innerHTML = '';
                Weathericon.innerHTML += `
                        <img src="http://openweathermap.org/img/w/${data1.weather[0].icon}.png" class="img-rounded"  width="50%" height="50%">  
                `
                
    })


//<!--Capturamos Variable de la temeprature URl-->
 
    fetch('http://api.openweathermap.org/data/2.5/weather?id='+id+'&lang='+lang+'&units='+units+'&APPID='+APPID+'')
        .then(data=>data.json())
            .then(data=>{
                console.log("Temperarture: " + data.main.temp)
                temp.innerHTML = '';
                temp.innerHTML += `
                       <h4> - Temperature: ${data.main.temp}</h4>  
                `
    })


//<!--Capturamos Variable de la pressure URl-->

    fetch('http://api.openweathermap.org/data/2.5/weather?id='+id+'&lang='+lang+'&units='+units+'&APPID='+APPID+'')
        .then(data1=>data1.json())
            .then(data1=>{
                console.log("Temperarture pressure: " + data1.main.pressure)
                
                pressure.innerHTML = '';
                pressure.innerHTML += `
                       <h4> - Pressure: ${data1.main.pressure}</h4>  
                `
                
    })


//<!--Capturamos Variable de la humedad URl-->

    fetch('http://api.openweathermap.org/data/2.5/weather?id='+id+'&lang='+lang+'&units='+units+'&APPID='+APPID+'')
        .then(data1=>data1.json())
            .then(data1=>{
                console.log("Temperarture pressure: " + data1.main.humidity)
                
                humidity.innerHTML = '';
                humidity.innerHTML += `
                       <h4> - Humidity: ${data1.main.humidity}</h4>  
                `
                
    })




//</script><!--Capturamos Variable de la wind URl-->

    fetch('http://api.openweathermap.org/data/2.5/weather?id='+id+'&lang='+lang+'&units='+units+'&APPID='+APPID+'')
        .then(data=>data.json())
            .then(data=>{
                console.log("Speed: " + data.wind.speed)
                
                speed.innerHTML += `
                       <h4> - Speed: ${data.wind.speed}</h4>  
                `
    })
