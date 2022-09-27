
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");


const testimonials = [
  {
    name: "name 1",
    position: "position 1",
    photo: "https://raw.githubusercontent.com/DmytroTarasiuk/testimonials-switcher/main/images/image-tanya.jpg",
    text: " testimonial 1 "
  },
  {
    name: "name 2",
    position: "position 2",
    photo: "https://raw.githubusercontent.com/DmytroTarasiuk/testimonials-switcher/main/images/image-john.jpg",
    text: " testimonial 2 "
  }
]

let idx = 1;

function updateTestiomonial() {
  const { name, position, photo, text} = testimonials[idx]

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++

  if(idx > testimonials.length - 1 ) {
    idx = 0;
  }


}
setInterval(updateTestiomonial, 10000)


