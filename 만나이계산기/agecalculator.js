let insertedBirthday = document.getElementById("birthday");
let showResult = document.getElementById("result");
let submitButton = document.getElementById("submit");

const today = new Date();

function calculateAge() {
    let age = 0;
    let birthDate = new Date(insertedBirthday.value);

    if (today.getMonth() > birthDate.getMonth() || 
        (today.getMonth() == birthDate.getMonth() && today.getDate() >= birthDate.getDate())
        ) { age = today.getFullYear() - birthDate.getFullYear(); }
    else { age = today.getFullYear() - birthDate.getFullYear() - 1; }

    showResult.innerText = "만 나이는 " + age + "입니다."

    return age;
}

submitButton.addEventListener("click", calculateAge);