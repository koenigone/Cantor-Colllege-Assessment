import './forStudents.css';
import Image from 'next/image';

const Introduction = () => {
  return(
    <section className='forStudents-intro' id='introduction'>
      <div>
        <h1 className='forStudents-title'>
          Explore Cantor College: World-Class Facilities for Your Success
        </h1>
      </div>
      
      <div>
        <p className='forStudents-description'>
          At Cantor College, we are committed to providing our students with 
          the best possible environment to learn, create, and innovate. 
          Our state-of-the-art facilities are designed to support your academic 
          journey and help you thrive in your chosen field. Whether you’re studying 
          computing, design, or technology, our campus offers everything you need to excel.
        </p>
      </div>

      <div className='forStudents-image-container'>
        <Image 
          src='/IMG_0170.jpeg'
          alt='image of pictures on the wall'
          width={600}
          height={400}
          layout='responsive'
        />
      </div>
    </section>
  );
}

export default Introduction;