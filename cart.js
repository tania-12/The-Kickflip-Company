const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('mouseover', function (e) {
        const x = e.pageX
        const y = e.pageY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})

let i = 0;
let txt = 'Free Shipping on Orders Over $50';
let speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("saleBanner").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}