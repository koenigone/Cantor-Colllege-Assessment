import './services.css';

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
    <section className='why-us-container' id='whyUs'>
      <h2>Why Partner with Cantor College?</h2>
      <ul>
        {benefits.map((benefit, index) => (
          <li key={index}>
            <strong>-{benefit.title}:</strong> {benefit.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyUs;