let API_KEY = "AIzaSyDV6HPj7Ndyx7XqC9t-hfkseujknKxskDE";
let videoContainer = document.getElementById("videos");
async function getData(defaultTerm = "") {
    let searchInput = document.querySelector(".search-bar input");
    let search_term = searchInput.value.trim() || defaultTerm;

    if (!search_term) {
        console.log("Search term is empty");
        return;
    }
    
    try {
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(search_term)}&type=video&maxResults=20&key=${API_KEY}`);
        let data = await response.json();
        console.log(data);
        displayVideos(data.items);
    } catch (error) {
        console.error("Error fetching data", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getData("trending");
});
document.querySelector(".search-bar button").addEventListener("click", getData);

function displayVideos(videos) {
    videoContainer.innerHTML = "";
    
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
            let videoData = {
                videoId: id.videoId,
                title: snippet.title,
                channelTitle: snippet.channelTitle
            };
            localStorage.setItem("selectedVideo", JSON.stringify(videoData));
            window.location.href = "video.html";
        };
        
        videoContainer.appendChild(videobox);
    });
}