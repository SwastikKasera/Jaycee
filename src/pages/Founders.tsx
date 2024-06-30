import React from "react";
import schoolImg from "../assets/jc_founder_photo.jpg"
const Founders = () => {
  return (
    <>
      <div className="py-16 bg-background">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-12">
            <div className="md:5/12 lg:w-5/12 flex justify-center items-center">
              <img
                src={schoolImg}
                alt="founder's portrait"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl font-martel">
                Our Founder
              </h2>
              <p className="mt-4 font-karla text-gray-600">
              Mirzapur Junior Chamber, Mirzapur was founded in 1962 with Vision to serve the country. Aligned to its vision, Chamber established Jaycee Bal Mandir Montessori school with the aim of providing quality education in Mirzapur. The school was established in 1964 as a result of the fruitful efforts by Mr. Kishan Budhiya and junior chamber. The school premise was inaugurated on 21.02.1965 by Mrs. Sucheta Kriplani, Contemporaneous CM UP in the loving memory of Pt. Jawaharlal Nehru, the first PM of the Indian Republic. Mrs. Surekha Agrawal was the first Principal of the school. Since then the well qualified and experienced faculty of the school has given a significant contribution to moral, physical and educational development of the students.
              </p>
              <p className="mt-4 font-karla text-gray-600">
              For the overall development of the students the junior chamber founded Jaycee Bal Mandir, civil lines in 1974 and Raja Shri Niwas Prasad Singh Jaycee Girls inter college in 1987. All three institutes founded by Junior chamber have a good reputation in the city . The onus of which goes to the alumni of the schools , who are well settled in different fields. Jaycee Bal Mandir Montessori Musaffaraganj owes its development to the significant contribution by the respected citizens of Mirzapur and the respected members of Jaycee .
In 1976 , Padam Vibhushan Shri Ghanshyam Das JI Birla donated a sum of fifty thousand through Prakash Foundation, New Delhi in the tenure of Shri Kailash Nath Agrawal Ji , the Contemporaneous Manager of the school .
              </p>
              <p className="mt-4 font-karla text-gray-600">
              Earlier the school was till class fifth only, but keeping in mind the demand for higher education the classes for junior High school were started in 1983.The second floor of the school premises was constructed by Chairman J C Devendra Pratap Singh and Manager J C Sanjay Malviya, which was inaugurated by Shri S.B. Vaishya, the Contemporaneous District Judge, Mirzapur on 19th June 1997.
To keep pace with the change in the educational system of the country, the medium of education has been changed to English. The school also has facility for the computer education. It has a state of art computer lab which was inaugrated by Shri Kailash Chaurasia, state minister Child Development and Nutrition, Primary Education on 20th May 2010. At Present J C Lolarak Nath Singh is the president , J C Renu Agrawal is the manager and Smt. Chinmayi Majumdar is the principal of the Jaycee Bal Mandir Junior high school Musaffarganj Mirzapur , J C Dharam Pal Singh is the manager of the Jaycee Bal Mandir Junior High School Civil Line Mirzapur , J C Sushma Singh is the manager of Raja Shri Niwas Prasad Singh Jaycee Girls inter College Mirzapur .
              </p>
              <p className="mt-4 font-karla text-gray-600">
              The school is undergoing a lot of positive changes which are the fruits of the efforts put in by J C Dharampal Singh, J C Manish Agrawal , All the J C members and Mr. Amit Srivastava . Today more than thousand students are studying in the school and the alumni are well settled and are at apex positions of various organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founders;
