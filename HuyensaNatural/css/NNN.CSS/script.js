function openTab(evt, tabName){

    const tabcontent=document.getElementsByClassName("tab-content");

    for(let i=0;i<tabcontent.length;i++){
        tabcontent[i].classList.add("hidden");
    }

    const tabs=document.getElementsByClassName("tab-link");

    for(let i=0;i<tabs.length;i++){
        tabs[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.remove("hidden");

    evt.currentTarget.classList.add("active");
}