let API_KEY = "AIzaSyA9kcuYPAneb2rpTnyDn0XvzPe8SiClAI8";

async function getData() {
    let searchInput = document.querySelector(".search-bar input");
    let search_term = searchInput.value.trim();
    
    if (!search_term) {
        console.log("Search term is empty");
        return;
    }
    
    try {
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(search_term)}&type=video&maxResults=20&key=${API_KEY}`);
        let data = await response.json();
        console.log(data);
        if (data.items) {
            displayVideos(data.items);
        }
    } catch (error) {
        console.error("Error fetching data", error);
    }
}

document.querySelector(".search-bar button").addEventListener("click", getData);

function displayVideos(videos) {
    let videoContainer = document.getElementById("videos");
    videoContainer.innerHTML = ""; // Clear previous results
    
    videos.forEach(({ snippet, id }) => {
        let videobox = document.createElement("div");
        videobox.className = "video";
        
        let img = document.createElement("img");
        img.src = snippet.thumbnails.medium.url;
        img.alt = snippet.title;
        
        let title = document.createElement("p");
        title.innerText = snippet.title;
        
        let channelTitle = document.createElement("p");
        channelTitle.innerText = snippet.channelTitle;
        
        videobox.appendChild(img);
        videobox.appendChild(title);
        videobox.appendChild(channelTitle);
        
        videobox.onclick = () => {
            window.open(`https://www.youtube.com/watch?v=${id.videoId}`, "_blank");
        };
        
        videoContainer.appendChild(videobox);
    });
}