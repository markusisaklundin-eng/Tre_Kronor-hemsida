function highlightLink(l){
    l.style.color = "yellow";
}

function resetLink(l){
    l.style.color = "";
}

window.addEventListener("load", function(){
    let menuLinks = document.querySelectorAll(".meny a");

    menuLinks.forEach(function(link){
        link.addEventListener("mouseover", function(){
            highlightLink(link);
        });
        link.addEventListener("mouseout", function(){
            resetLink(link);
        });
    });
});
