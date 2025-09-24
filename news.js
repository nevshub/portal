// === Grove News Feed System ===
const role = localStorage.getItem("userRole");
const postSection = document.getElementById("postSection");
const postBtn = document.getElementById("postBtn");
const postContent = document.getElementById("postContent");
const postImage = document.getElementById("postImage");
const feed = document.getElementById("feed");

// Only Admins and Members can post
if (role === "admin" || role === "member") {
  postSection.style.display = "block";
}

// Function to add a post
function addPost(content, imageSrc) {
  const postDiv = document.createElement("div");
  postDiv.className = "post";
  postDiv.style.border = "1px solid #333";
  postDiv.style.padding = "10px";
  postDiv.style.margin = "10px auto";
  postDiv.style.maxWidth = "700px";
  postDiv.style.backgroundColor = "#222";

  const text = document.createElement("p");
  text.textContent = content;
  postDiv.appendChild(text);

  if (imageSrc) {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.style.maxWidth = "100%";
    img.style.marginTop = "10px";
    postDiv.appendChild(img);
  }

  feed.prepend(postDiv);
}

// Handle post button click
postBtn.addEventListener("click", () => {
  const content = postContent.value.trim();
  if (!content && !postImage.files[0]) return alert("Add text or an image to post.");

  if (postImage.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      addPost(content, reader.result);
      postContent.value = "";
      postImage.value = "";
    };
    reader.readAsDataURL(postImage.files[0]);
  } else {
    addPost(content);
    postContent.value = "";
  }
});

// Load existing posts (if using localStorage)
const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
savedPosts.forEach(p => addPost(p.content, p.image));

// Save posts to localStorage
function savePosts() {
  const allPosts = [];
  document.querySelectorAll("#feed .post").forEach(div => {
    const content = div.querySelector("p").textContent;
    const img = div.querySelector("img");
    allPosts.push({ content, image: img ? img.src : null });
  });
  localStorage.setItem("posts", JSON.stringify(allPosts));
}

// Save posts whenever new post is added
postBtn.addEventListener("click", savePosts);
