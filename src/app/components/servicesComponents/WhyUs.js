import "./services.css";
import Image from "next/image";

const WhyUs = () => {
  const benefits = [
    {
      title: "Cutting-Edge Expertise",
      description:
        "Our programs are at the forefront of industry trends, ensuring that our services reflect the latest advancements in technology and design.",
    },
    {
      title: "Innovation at the Core",
      description:
        "We foster a culture of creativity and problem-solving, making us the ideal partner for businesses seeking innovative solutions.",
    },
    {
      title: "Tailored Solutions",
      description:
        "We understand that every business is unique. Our services are customized to meet your specific objectives and challenges.",
    },
    {
      title: "Future-Ready Talent",
      description:
        "Our students are trained to excel in the modern workplace, equipped with both theoretical knowledge and practical skills.",
    },
  ];

  return (
    <section className="why-us-container" id="whyUs">
      <div>
        <h2>Why Partner with Cantor College?</h2>
      </div>

      <div className="items-container">
        {benefits.map((benefit, index) => (
          <div key={index}>
            <div>
              <h4>-{benefit.title}</h4>
            </div>
            <div className="why-us-description">
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <Image
          src="/IMG_1005.jpeg"
          alt="image of a welcoming banner"
          width={500}
          height={600}
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default WhyUs;
