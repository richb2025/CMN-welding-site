document.addEventListener("DOMContentLoaded", () => {
    fetch("/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(err => console.error("Footer load error:", err));
});



/*<div id="footer-placeholder"></div>
<script src="/js/footer.js"></script>*/