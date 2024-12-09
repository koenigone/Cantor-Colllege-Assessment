import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className="get-in-touch-container" id="getInTouch">
      <div>
        <h2>Get in Touch</h2>
      </div>

      <div>
        <p>
          Ready to explore how Cantor College can help your business grow?
          Contact our Business Services team today to discuss your needs and
          learn more about our offerings. We look forward to working with you to
          achieve your business goals.{" "}
          <Link href="/#homeFooter">how to find us</Link>
        </p>
      </div>
    </section>
  );
};

export default GetInTouch;
