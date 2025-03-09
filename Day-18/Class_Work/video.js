document.addEventListener("DOMContentLoaded", () => {
    let videoData = JSON.parse(localStorage.getItem("selectedVideo"));
    if (videoData) {
        document.getElementById("video-player").src = `https://www.youtube.com/embed/${videoData.videoId}`;
        document.getElementById("video-title").innerText = videoData.title;
        document.getElementById("channel-title").innerText = "Channel: " + videoData.channelTitle;
    } else {
        document.getElementById("video-container").innerHTML = "<p>Video not found.</p>";
    }
});