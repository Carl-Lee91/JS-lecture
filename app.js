const age = parseInt(prompt("나이를 말씀해 주십시오."));

if (isNaN(age) || age < 0) {
    console.log("양수를 입력해 주십시오.")
} else if(age < 18) {
    console.log("미성년자 이므로 음주를 할 수 없습니다.");
} else if(age >=18 && age < 50) {
    console.log("음주 가능 나이입니다.");
} else if(age >=51 && age <80) {
    console.log("음주를 자제하여 주십시오.");
} else if (age > 80) {
    console.log("그만 마시셈");
} else if (age !== 100) {
    console.log("장수하셨네요");
} 
