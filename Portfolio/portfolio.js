let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks) {
        tablink.classList.remove("active-link")        
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

    let menu = document.getElementById("menu")
    function openmenu()
    {
        menu.style.right="0px";
    }
    function closemenu()
    {
        menu.style.right="-200px";
    }
}
