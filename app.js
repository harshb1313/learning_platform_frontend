var tl = gsap.timeline()

tl.from('.nav-bar h2',{
    y:100,
    duration:0.5,
    delay:1,
    opacity:0,
    
})

tl.from('.nav-content li',{
    y:100,
    duration:0.5,
    delay:1,
    opacity:0,
    stagger:0.5

})

tl.from('.int-right h1',{
    y: -100,
    duration:1,
    delay:1,
    opacity:0,
    
})



tl.from('.scroll h5',{
    scale:0,
    opacity:0
})

tl.to('.scroll h5',{
    y:30,
    repeat:-1,
    duration:0.7,
    yoyo:true
})

tl.from('.topics h1',{
    y: -100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.2

})

tl.from('.card1',{
    y: -100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.2
})