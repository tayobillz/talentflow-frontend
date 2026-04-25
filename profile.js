const bioInput = document.getElementById("bio");
const roleInput = document.getElementById("role");
const expLevel = document.getElementById("expLevel");

const photoUpload = document.getElementById("photoUpload");
const photoInput = document.getElementById("photoInput");
const photoIcon = document.getElementById("photoIcon");
const photoPreview = document.getElementById("photoPreview");

const previewName = document.getElementById("previewName");
const previewRole = document.getElementById("previewRole");
const previewBio = document.getElementById("previewBio");
const previewBadge = document.getElementById("previewBadge");

const startBtn = document.getElementById("start-btn");

const slider = ["Beginner", "Intermediate", "Advanced"];


bioInput.addEventListener("input", function () {
  previewBio.textContent = bioInput.value;
});


roleInput.addEventListener("input", function () {
  previewRole.textContent = roleInput.value;
});


expLevel.addEventListener("input", function () {
  const value = slider[expLevel.value - 1] || "";
  previewBadge.textContent = value;
});


photoUpload.addEventListener("click", function () {
  photoInput.click();
});


photoInput.addEventListener("change", function () {
  const file = photoInput.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function () {
    photoPreview.src = reader.result;
    photoPreview.style.display = "block";
    photoIcon.style.display = "none";
  };

  reader.readAsDataURL(file);
});


startBtn.addEventListener("click", function () {
  const profile = {
    bio: bioInput.value,
    role: roleInput.value,
    linkedin: document.getElementById("linkedin")?.value || "",
    github: document.getElementById("github")?.value || "",
    level: slider[expLevel.value - 1] || ""
  };

  console.log(profile);
});