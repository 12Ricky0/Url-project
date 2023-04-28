$(".burger").click(() => {
    $("nav").css("display", "block");
    $(".close").css("display", "block");
    $(".burger").css("display", "none");
})

$(".close").click(() => {
    $("nav").css("display", "none");
    $(".close").css("display", "none");
    $(".burger").css("display", "block");
});



function validation() {

    var x = document.forms["myForm"]["url"].value;

    let substring = "."

    if (x == "") {
        $("span").css("display", "block");
        $("form input").addClass("input-warning ph-warning");
        return false;

    }

    else if (x.includes(substring)) {
        return true
    }

    else {
        $("span").css("display", "block");
        $("span").text("Please enter a valid URL")
        return false;
    }

}




const botton = document.querySelectorAll(".copy-btn");
for (let i = 0; i < botton.length; i++) {

    const itemCopied = botton[i].value

    botton[i].addEventListener("click", function () {


        botton[i].innerHTML = "Copied!";
        botton[i].style.backgroundColor = "hsl(260, 8%, 14%)"
        navigator.clipboard.writeText(itemCopied);


    })

}

