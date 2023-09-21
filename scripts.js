
const btn=document.getElementById("btn");
    setTimeout(function(){
        btn.disabled=false;
        btn.style.cursor="pointer";
        
    },1800);

    
    

function toggle(button){  
    

    setTimeout(() => {
        topContainer.style.opacity=0;
    },0);

    const song = document.getElementById("song");
    
    song.play(); 
               
    
    
    const topContainer=document.querySelector(".top-container");
    
    



    

    topContainer.classList.add("to-disable-container");
    
    


    document.querySelector(".sun-container").classList.add("to-enable-sun");
    document.querySelector(".mercury-container").classList.add("to-enable-mercury");
    document.querySelector(".venus-container").classList.add("to-enable-venus");
    document.querySelector(".earth-container").classList.add("to-enable-earth");
    document.querySelector(".mars-container").classList.add("to-enable-mars");
    document.querySelector(".jupiter-container").classList.add("to-enable-jupiter");
    document.querySelector(".saturn-container").classList.add("to-enable-saturn");
    document.querySelector(".uranus-container").classList.add("to-enable-uranus");
    document.querySelector(".neptune-container").classList.add("to-enable-neptune");
    document.querySelector(".pluto-container").classList.add("to-enable-pluto");
    document.querySelector(".planet9-container").classList.add("to-enable-planet9");
    


    const planets=document.querySelectorAll(".planet");

    planets.forEach((planet)=>{
        setTimeout(function(){
            planet.classList.add("hovered");
        },18000)
        
    })

    
        
    
    
    

    const links=document.querySelectorAll(".disable");
            links.forEach(function(link){

                setTimeout(() => {

                    link.style.pointerEvents="auto";
                    link.style.cursor="pointer";
                    
                },18000);

            });
            
}