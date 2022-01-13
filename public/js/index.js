const dev_project_container = document.querySelector('.developer-projects');
const user_background = document.querySelector('.user-image-background');
const emojis = ["one","two","three","four","five","six","seven","eight","nine","ten"]
const memoji_container = document.querySelector('.memoji');
const colors = ["rgb(255, 161, 161)","rgba(78, 250, 116, 0.493)","rgba(96, 47, 255, 0.493)"];





const projects = [
    {
        id:"netflix",
        name:"Netflix Landing Page Clone",
        description:"Netflix Landing Page Clone done with ReactJs.",
        url:"",
        video:"netflix",
        direction:"row",
        
    },
    {
        id:"spotify-home",
        name:"Spotify Landing Page Clone",
        description:"Spotify Landing Page Clone done with Html & CSS3 only.",
        url:"",
        video:"spotifyPage",
        direction:"row-reverse",
        
    },
    {
        id:"spotify",
        name:"Spotify Clone",
        description:"Spotify Desktop Clone using ReactJs",
        url:"",
        video:"spotify",
        direction:"row",
       
    },
    {
        id:"chime",
        name:"Chime Landing page",
        description:"Static Landing page for Chime",
        url:"",
        video:"chime",
        direction:"row-reverse",
        
    }
    ,
    {
        id:"agency",
        name:"Digital Agency",
        description:"Digital Agency Landing Page in React Js",
        url:"",
        video:"agency",
        direction:"row",
        
    },
    {
        id:"zara",
        name:"Zara",
        description:"Zara Landing Page in HTML & CSS Only",
        url:"",
        video:"zara",
        direction:"row-reverse",
        
    },
    {
        id:"apple",
        name:"Apple Music",
        description:"Apple Music Clone using React Js and Spotify Web API",
        url:"",
        video:"apple_music",
        direction:"row",
        
    },
    {
        id:"crypto",
        name:"Crypto",
        description:"Crypto Landing Page in React Js",
        url:"",
        video:"crypto",
        direction:"row-reverse",
        
    },
]

projects.forEach((project)=>{
    dev_project_container.innerHTML+=`<div class="project-section" style="flex-direction:${project.direction}">
    <div class="project-detail" >
        
        <div class="project-decsription">
            <h2>${project.name}</h2>
            <p> ${project.description}</p>
            <!--<p class="subdesc">Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>-->
        </div>
        <a href="#" class="project-link">More shots from this project ↗</a>
    </div>
    <div class="project-thumb ${project.id}" data-tilt">
    
    <div class="loader"></div>
    <button class="play_btn"><i class="fa fa-play"></i></button>
    <video src="./videos/${project.video}.mov" tabindex="1" loop id="video-${project.id}" onload="handleload()"/>
    </div>

   
</div>`;
});



const changeColor = ()=>{
    const random = Math.floor(Math.random()*(0,colors.length));
    const color = colors[random];
    user_background.style.backgroundColor = color;
    

}

const changeEmoji = ()=>{
    memoji_container.setAttribute('src',`./assets/${emojis[Math.floor(Math.random()*(0,emojis.length))]}.gif`)
}

window.onload = ()=>{
    changeEmoji();
    changeColor();
    const netflix_container = document.querySelector('.netflix');
    const spotiy_container = document.querySelector('.spotify');
    const chime_container = document.querySelector('.chime');
    const spotify_home = document.querySelector('.spotify-home');
    const agency_container = document.querySelector('.agency');
    const zara = document.querySelector('.zara');
    netflix_container.addEventListener('mouseover',()=>{
        document.body.style.background = 'red';
    })

    spotiy_container.addEventListener('mouseover',()=>{
        document.body.style.background = '#41f969';
    })

    chime_container.addEventListener('mouseover',()=>{
        document.body.style.background = '#8dfae7';
    })

    agency_container.addEventListener('mouseover',()=>{
        document.body.style.background = 'linear-gradient(117.16deg, rgba(0, 56, 255, 0.8) 41.66%, rgba(255, 108, 0, 0.768) 66.95%)';
    })

    spotify_home.addEventListener('mouseover',()=>{
        document.body.style.background = '#ed6cbf';
    })
    zara.addEventListener('mouseover',()=>{
        document.body.style.background = '#e5e4e6';
    })
    netflix_container.addEventListener('mouseleave',()=>{
        document.body.style.background = '#ebebeb';
    })
    spotiy_container.addEventListener('mouseleave',()=>{
        document.body.style.background = '#ebebeb';
    })

    chime_container.addEventListener('mouseleave',()=>{
        document.body.style.background = '#ebebeb';
    })

    agency_container.addEventListener('mouseleave',()=>{
        document.body.style.background = '#ebebeb';
    })


    spotify_home.addEventListener('mouseleave',()=>{
        document.body.style.background = '#ebebeb';
    })

    zara.addEventListener('mouseleave',()=>{
        document.body.style.background = '#ebebeb';
    })
};



setInterval(()=>{
    changeEmoji();
    changeColor();
},3000)




const buttons = document.querySelectorAll('.play_btn');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',()=>{
        const isPaused = button.parentElement.querySelector('video').paused;
        if(isPaused){
            button.querySelector('i').classList.remove('fa-play');
            button.querySelector('i').classList.add('fa-pause');
            button.parentElement.querySelector('video').play();
        }
        else{
            button.querySelector('i').classList.add('fa-play');
            button.querySelector('i').classList.remove('fa-pause');
            button.parentElement.querySelector('video').pause();
        }
    })
})


const video_elements = document.querySelectorAll('video');

Array.from(video_elements).forEach((video)=>{
    video.addEventListener('loadeddata',()=>{
        handleload();
    })
})




const handleload = ()=>{
    console.log('videoloaded');
    document.querySelectorAll('.loader').forEach((loader)=>{
        loader.style.display = 'none';
    })
    document.querySelectorAll('.play_btn').forEach((button)=>{
        button.style.display = 'block';
    })
}


