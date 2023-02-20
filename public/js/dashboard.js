const newPostHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  event.preventDefault();
  const title = document.querySelector("#post-title").value.trim();
  const body = document.querySelector("#post-body").value.trim();

  if (title && body) {
    const response = await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    }
  }
};

document.querySelector(".form").addEventListener("submit", newPostHandler);
document.querySelector(".project-list").addEventListener("click", deleteHandler);
