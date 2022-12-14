let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    // number of slides per carousel-item
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

//#fc7c39
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".navbar").css({"background-color":"rgba(5, 5, 5, 1)", 
            "transition":"background-color 200ms linear"});
        }
        else if($(window).scrollTop() > $(".navbar").height()){
            $(".navbar").css({"background-color":"rgba(5, 5, 5, 0.95)", 
            "transition":"background-color 200ms linear"});
        }
        else{
            $(".navbar").css({"background-color":"transparent"});
        }

    })
})
