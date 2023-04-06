export default function Testimonials() {
  return (
    <div className="slider">
    <div className="slides">
    <div id="slide-1">
    {/* <!-- <h2>Dr. Decruise</h2> --> */}
    <p>“The only way you could improve is have Dr. Decruise do every single evaluation for VA
    claims insider PTSD. This is my 2nd eval with Telemedica so I was apprehensive about how
    the second exam would go. Dr. Decruuse is absolutely the most genuine and sincere mental
    health care provider possible. I know she sees thousands of patients but I honestly felt
    as though I was her one and only patient. She was kind, caring, compassionate and
    sincere. Her patience and concern for myself as a human (not just a number) are top
    notch. She is a world class human and physician. Dr. Decruise made me feel safe, secure,
    welcomed and as if she actually listened. I could not be more satisfied with how my exam
    went.<br /><br />And another short kudos for customer service team: “Your customer service
    follow up and care is to be commended and appreciated”</p>
    </div>
    <div id="slide-2">
    <p>“I feel that the whole process from beginning (scheduling) to end (the actual
      appointment) was very easy and stress free! Ms. Mia was so helpful that she went above
      and beyond to help me reschedule and answer a few questions I had with ease. The doctor
      was very personable and professional but at the same time made me feel extremely
      comfortable with the evaluation process.”</p>
      </div>
      <div id="slide-3">
      <p>Testimonial 3</p>
      </div>
      <div id="slide-4">
      <p>Testimonial 4</p>
      </div>
      </div>
      <a href="#slide-1">1</a>
      <a href="#slide-2">2</a>
      <a href="#slide-3">3</a>
      <a href="#slide-4">4</a>
      {/* <!-- <div className="carousel__nav">
      <button className="carousel__indicator"></button>
      <button className="carousel__indicator"></button>
      <button className="carousel__indicator"></button>
      </div>
    <div className="carousel__item"><a href="#" className="button teal">Write a Review</a></div> --> */}
    </div>
  )
}



// .carousel {
//   position: relative;
//   background-color: var(--clr-primary-white);
//   text-align: center;
// }
// @media (min-width: 40em) {
//   .carousel {
//     height: auto;
//   }
// }
// .carousel .container {
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }
// .carousel h1:after {
//   background-color: var(--clr-primary-teal);
//   content: "";
//   display: block;
//   height: 2px;
//   position: relative;
//   margin: 0.9375rem auto 0;
//   max-width: 100%;
//   width: 7.5rem;
// }
// .carousel .slider {
//   width: 300px;
//   text-align: center;
//   overflow: hidden;
// }
// @media (min-width: 40em) {
//   .carousel .slider {
//     width: 800px;
//   }
// }
// .carousel .slides {
//   display: flex;
//   overflow-x: auto;
//   -ms-scroll-snap-type: x mandatory;
//       scroll-snap-type: x mandatory;
//   scroll-behavior: smooth;
// }
// .carousel .slides::-webkit-scrollbar {
//   width: 10px;
//   height: 10px;
// }
// .carousel .slides::-webkit-scrollbar-thumb {
//   background: var(--clr-primary-teal);
//   border-radius: 10px;
// }
// .carousel .slides::-webkit-scrollbar-track {
//   background: transparent;
// }
// .carousel .slides > div {
//   scroll-snap-align: start;
//   flex-shrink: 0;
//   width: 300px;
//   height: 300px;
//   margin-right: 50px;
//   border-radius: 10px;
//   background: #eee;
//   transform-origin: center center;
//   transform: scale(1);
//   transition: transform 0.5s;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 6.25rem;
// }
// @media (min-width: 40em) {
//   .carousel .slides > div {
//     width: 800px;
//     height: 600px;
//   }
// }
// .carousel .slider > a {
//   display: inline-flex;
//   width: 1.5rem;
//   height: 1.5rem;
//   background: grey;
//   text-decoration: none;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   margin: 0 0 0.5rem 0;
//   position: relative;
// }
// .carousel .slider > a:active {
//   top: 1px;
// }
// .carousel .slider > a:focus {
//   background: #000;
// }