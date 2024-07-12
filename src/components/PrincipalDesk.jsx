import React from "react";
import principal from "../assets/sqp.jpg";
import sign from "../assets/Asset1.png";
import { LuExternalLink } from "react-icons/lu";
import Button from "./Button";

const PrincipalDesk = () => {
  const hanldeClick = () => {
    window.location.href =
      "https://res.cloudinary.com/dxlqy4p04/image/upload/v1720010856/Jaycee_Principal_List_9ff7648bea.pdf";
  };
  return (
    <>
      <section className="bg-secondary w-full relative body-font flex flex-col md:flex-row p-8 gap-10 justify-center items-start">
        <div className="w-full flex justify-center items-center md:w-4/12">
          <div className="relative w-fit h-fit flex justify-center items-center">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="w-24 h-3 bg-accent absolute bottom-8 -left-6 z-10"
            />
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              className="w-24 h-3 bg-accent absolute bottom-4 -left-6 z-10"
            />
            <img
              src={principal}
              data-aos="zoom-out"
              data-aos-duration="1000"
              className="aspect-square rounded-2xl z-0"
              alt="Principal"
            />
          </div>
        </div>
        <div className="md:w-8/12">
          <div className="flex flex-col justify-start items-start gap-6 text-neutral-50">
            <h2
              data-aos="fade-left"
              className="text-4xl p-2 w-full text-center md:text-left font-vidaloka"
            >
              Principal's Desk
            </h2>
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="md:text-lg text-base text-justify p-2 font-karla"
            >
              Dear parents and student,

Welcome to Jaycee Bal Mandir Junior High School, an English medium co-education institution, Musaffarganj Mirzapur.

<em> "Education is not the learning of facts, but the training of the mind to think."</em><br />

When children are small, they are like small plants. As they grow, they become big trees. However, in the journey of this small plant becoming a tree, if a gardener does not provide good air, water, and fertilizers, then it gets spoiled in the middle, dries up, and breaks. We work together to take care of this small plant and make it a good tree. We want your support in making this work successful so that we can create a bright future for the children coming to our school. This will enable them to face all the difficulties in their lives and become truly successful, hardworking individuals who build a better nation. <br /><br />

<em>"Education is the manifestation of the perfection already in man."</em>
            </p>
          </div>
          <div className="flex justify-between items-start mt-4">
            <Button
              text="View"
              onClick={hanldeClick}
              hasIcon={true}
              icon={<LuExternalLink />}
              styles="mt-4 w-1/4"
            />
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col justify-center items-center gap-4 p-2"
            >
              <p className="text-white md:text-lg text-sm italic font-martel">
                - by Kamla Devi Jauhari
              </p>
              <img src={sign} className="md:w-24 w-16" alt="Signature" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrincipalDesk;
