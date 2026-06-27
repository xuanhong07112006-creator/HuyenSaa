
function openTab(evt, tabName) {
    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) { tabcontent[i].classList.add("hidden"); }
    var tablinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tablinks.length; i++) { 
        tablinks[i].classList.remove("border-brown-600", "font-bold", "text-gray-900");
        tablinks[i].classList.add("text-gray-500", "font-semibold");
    }
    document.getElementById(tabName).classList.remove("hidden");
    evt.currentTarget.classList.add("border-brown-600", "font-bold", "text-gray-900");
    evt.currentTarget.classList.remove("text-gray-500", "font-semibold");
}
