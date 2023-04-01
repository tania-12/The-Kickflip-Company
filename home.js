const left = document.querySelector('.left');
const right = document.querySelector('.right');
const splitLanding = document.querySelector('.splitLanding');

left.addEventListener('mouseenter', () => splitLanding.classList.add('hover-left'));
left.addEventListener('mouseleave', () => splitLanding.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => splitLanding.classList.add('hover-right'));
right.addEventListener('mouseleave', () => splitLanding.classList.remove('hover-right'));


const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Tyler Johnson',
    text:
    "If you're a serious skater, you need to check out this shop. They carry all the top brands and have gear for every style and skill level.",
  },
  {
    name: 'Skylar Lee',
    text:
    "This is the only shop I trust to buy my gear from. Their prices are fair and they stand behind their products with excellent warranties and returns policies."
},
  {
    name: 'Hunter Collins',
    text:
    "I recently ordered a new skateboard from this online store and it arrived quickly and in perfect condition. I couldn't be happier with my purchase!"  },
  {
    name: 'Raven Garcia',
    text:
    "This online skateboard store has a great reputation in the skating community. I know I can trust them to provide me with the best gear and advice."  },
  {
    name: 'Jaxson Wong',
    text:
    "I've shopped at many online skateboard stores, but this one is my favorite. Their website is user-friendly and their products are top-notch."  },
  {
    name: 'Blaze Martinez',
    text:
    "The customer service at this online skateboard shop is amazing. They respond quickly to any questions or concerns I have about my orders."  },
  {
    name: 'Axel Martinez',
    text:
     "This online skateboard shop has the best prices I've found anywhere. I always get a great deal on the gear I need.",
  },
]

let idx = 1

function updateTestimonial() {
  const { name, text } = testimonials[idx]

  testimonial.innerHTML = text
  username.innerHTML = name
  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)

//Carousel
const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

console.log(img);

let idy = 0;

let interval = setInterval(run, 4000);

function run() {
    idy++;
    changeImage();
}

function changeImage(){
    if(idy > img.length - 1){
        idy = 0;
    } else if(idy < 0){
        idy = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idy * 1200}px)`
}