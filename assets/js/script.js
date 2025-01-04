// Get elements
const openSidebarBtn = document.getElementById("openSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");

// Open Sidebar
openSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  sidebar.classList.add("block");
});

// Close Sidebar
closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("block");
  sidebar.classList.add("hidden");
});

// Close Sidebar when clicking outside
window.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !openSidebarBtn.contains(e.target)) {
    sidebar.classList.remove("block");
    sidebar.classList.add("hidden");
  }
});
