import "../assets/styles/Testimonials.scss";
import img1 from "../assets/images/testi-author-1-150x150.png";
import img2 from "../assets/images/testi-author-2-150x150.png";
import img3 from "../assets/images/testi-author-3-150x150.png";

const testimonials = [
  {
    id: 1,
    name: "Daniel Joseph",
    role: "WRITER",
    image: img1,
    feedback:
      "Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat"
  },
  {
    id: 2,
    name: "Victoria Madison",
    role: "WRITER",
    image: img2,
    feedback:
      "Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat"
  },
  {
    id: 3,
    name: "Sarah Wilson",
    role: "WRITER",
    image: img3,
    feedback:
      "Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonialsHeader">
        <span className="testimonialsLabel">TESTIMONIALS</span>
        <h2 className="testimonialsTitle">CLIENTS FEEDBACK</h2>
      </div>

      <div className="testimonialsGrid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonialCard">
            <div className="testimonialImageWrapper">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonialImage"
              />
            </div>
            <div className="testimonialContent">
              <h3 className="testimonialName">{testimonial.name}</h3>
              <span className="testimonialRole">{testimonial.role}</span>
              <p className="testimonialFeedback">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
