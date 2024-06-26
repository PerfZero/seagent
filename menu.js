document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.getElementById("menu-btn");
    var sidebar = document.querySelector(".sidebar");
  
    if (menuBtn && sidebar) {
      menuBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // предотвращает закрытие при клике на кнопку меню
        sidebar.classList.toggle("active");
      });
  
      document.addEventListener("click", function(event) {
        if (!sidebar.contains(event.target) && sidebar.classList.contains("active")) {
          sidebar.classList.remove("active");
        }
      });
  
      sidebar.addEventListener("click", function(event) {
        event.stopPropagation(); // предотвращает закрытие при клике внутри сайдбара
      });
    } else {
      console.error("Не удалось найти элементы кнопки меню или сайдбара.");
    }
  });
  
  