const clock = document.querySelector("#clock")

function getClock() {
    const date = new Date();

    const week = ['일', '월', '화', '수', '목', '금', '토']
    const weekday = String(week[date.getDay()]);

    const years = String(date.getFullYear()).padStart(4, "0");
    const monthes = String(date.getMonth()+1);
    const days = String(date.getDate());
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${years}년 ${monthes}월 ${days}일 ${weekday}요일
    ${hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000)