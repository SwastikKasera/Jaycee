import React from "react";
import schoolImg from "../assets/hero_background.png"
const About = () => {
  return (
    <>
      <div className="py-16 bg-background">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12 flex justify-center items-center">
              <img
                src={schoolImg}
                alt="school's structure"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl font-martel">
                About Jaycee Bal Mandir School
              </h2>
              <p className="mt-4 font-karla text-justify text-gray-600">
              Mirzapur Junior Chamber, founded in 1962 with a vision to serve the country, established the Jaycee Bal Mandir Montessori school in 1964 to provide quality education in Mirzapur. This initiative was spearheaded by Mr. Kishan Budhiya and the Junior Chamber. The school premises were inaugurated on February 21, 1965, by Mrs. Sucheta Kriplani, the then Chief Minister of Uttar Pradesh, in memory of Pt. Jawaharlal Nehru, the first Prime Minister of India. Mrs. Surekha Agrawal served as the school's first principal. Since its inception, the school's well-qualified and experienced faculty has significantly contributed to the moral, physical, and educational development of its students.
              </p>
              <h2 className="text-xl mt-6 text-gray-900 font-bold md:text-4xl font-martel">
                Our Vision
              </h2>
              <p className="mt-4 font-karla text-justify text-lg text-gray-600">
              We believe in ensuring opportunity resources and safe learning environment to all students.
              </p>
              <h2 className="text-xl mt-6 text-gray-900 font-bold md:text-4xl font-martel">
                Our Moto
              </h2>
              <p className="mt-4 text-lg text-justify font-karla text-gray-600">
              Learning today leading tomorrow. Valuing our students education
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
