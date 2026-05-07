const videoUpload = document.getElementById("videoUpload");
const festivalVideo = document.getElementById("festivalVideo");

if (videoUpload && festivalVideo) {
  videoUpload.addEventListener("change", function () {
    const file = this.files && this.files[0];
    if (!file) return;

    const fileURL = URL.createObjectURL(file);
    festivalVideo.src = fileURL;
    festivalVideo.load();

    festivalVideo.play().catch(() => {
      console.log("Autoplay was blocked by the browser.");
    });
  });
}
