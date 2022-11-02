const clockTitle = document.querySelector(".js-clock");

setInterval( 
    function() {
        const thisYear = new Date().getFullYear();
        const dDay = new Date(thisYear,11,24);
        const today = new Date();
        const gap = dDay - today;
        const days = String(Math.floor(gap / (1000*60*60*24))).padStart(3, "0");
        const hours = String(Math.floor((gap / (1000*60*60)) % 24)).padStart(2, "0");
        const minutes = String(Math.floor((gap / (1000*60)) % 60)).padStart(2, "0");
        const seconds = String(Math.floor(gap / 1000 % 60)).padStart(2, "0");
        clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);