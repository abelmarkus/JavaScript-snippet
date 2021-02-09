javascript: ((function() {
    for (var inputs = document.querySelectorAll("[type=password]"), i = 0; i < inputs.length; i++) inputs[i].setAttribute("type", "text");
    document.body.addEventListener("click", myFunction), setTimeout(myFunction, 5e3)
})())();
