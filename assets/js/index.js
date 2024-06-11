
// nav handler
const menu_btn = document.querySelector('nav .menu');
const links = document.querySelector('nav ul');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('active')
    links.classList.toggle('active')
    document.body.classList.toggle('no_scroll') 
})
 
links.addEventListener('click', (e) => { 
  if (e.target.tagName === 'A') { 
    menu_btn.classList.remove('active')
    links.classList.remove('active')
    document.body.classList.remove('no_scroll')
  } 
})


// copied 
document.addEventListener('DOMContentLoaded', function() {
  
  let light_left = document.querySelector('.light_left');
  let light_right = document.querySelector('.light_right');

   const copyContractBtns = document.querySelectorAll('.copy-contract');
  
    copyContractBtns.forEach(copyContractBtn => {
      copyContractBtn.addEventListener('click', function() { 
        
      let copiedMessage = copyContractBtn.querySelector('.copied');
      let contractInput = copyContractBtn.querySelector('.contractInput');
      let movingColor_container = copyContractBtn.querySelector('.moving-color_container');

        contractInput.select();
        document.execCommand('copy');
    
        // Tampilkan pesan terkopikan
        copiedMessage.classList.add('flex')
        movingColor_container.classList.add('hidden')
        copiedMessage.classList.remove('hidden');

        light_left.src = './assets/images/light_off_left.png'
        light_right.src = './assets/images/light_off_right.png'
     
        setTimeout(function() {
          copiedMessage.classList.remove('flex')
          copiedMessage.classList.add('hidden')
        }, 2000);
      });
      
    })
     
  });




// controller ScrollMagic
let controller = new ScrollMagic.Controller();

// animation scroll effext
const animations = [
  { selector: ".biden_container", duration: 7000, x: -200 },
  { selector: ".og_image", duration: 7000, x: 200 },
  { selector: ".trumpOg_image", duration: 7000, y: 100 },
  { selector: ".plan._1", duration: 10000, x: -100 },
  { selector: ".plan._2", duration: 10000, x: 50 },
  { selector: ".plan._3", duration: 10000, x: 50 },
  { selector: ".plan._4", duration: 10000, x: -100 },
  { selector: ".image_plan1", duration: 11000, x: -100 },
  { selector: ".image_plan2", duration: 11000, x: 100 },
  { selector: ".image_plan3", duration: 11000, x: 100 },
  { selector: ".image_plan4", duration: 11000, x: -100 },
  { selector: ".text_footer", duration: 11000, x: -100 },
  { selector: ".footer_image", duration: 6000, x: -100 },
  { selector: ".trump_biden", duration: 5000, x: 300 },
  { selector: ".jet", duration: 5000, x: 300 }, 
];

function adjustXValue() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1200) { 
    animations.forEach(animation => {
      animation.x = animation.x * 4; 
    });
  }
}
 
adjustXValue();
window.addEventListener('resize', adjustXValue);



var tween1, tween2,tween3;

animations.forEach(animation => {
  var tween = gsap.to(animation.selector, {duration: 300, x: animation.x});

  var scene = new ScrollMagic.Scene({
    triggerElement: animation.selector,
    duration: animation.duration
  })
  .setTween(tween)
  .addTo(controller);
});
