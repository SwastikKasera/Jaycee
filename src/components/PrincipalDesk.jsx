import React from "react";
import Button from "./Button";
import { LuLink2 } from "react-icons/lu";
import principal from "../assets/principal.jpg";
import logo from "../assets/logo.png";
import Paragraph from "./TextScroll/Character";
import sign from "../assets/Asset1.png";

const PrincipalDesk = () => {
  const paragraph = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, ipsam adipisci voluptatem rerum harum consequuntur nihil ipsum sed quis necessitatibus excepturi, possimus suscipit tenetur facilis animi ullam iste similique";

  return (
    <>
      <section className="bg-secondary w-full relative body-font flex flex-col md:flex-row p-8 gap-10 justify-center items-start">
        <div className="w-full flex justify-center items-center md:w-4/12">
          <div className="relative w-fit h-fit flex justify-center items-center">
            <div data-aos="fade-right" data-aos-delay="200" className="w-24 h-3 bg-accent absolute bottom-8 -left-6 z-10" />
            <div data-aos="fade-right" data-aos-delay="400" className="w-24 h-3 bg-accent absolute bottom-4 -left-6 z-10" />
            <img src={principal} data-aos="zoom-out" data-aos-duration="1000" className="w-64 rounded-2xl z-0" alt="Principal" />
          </div>
        </div>
        <div className="md:w-8/12">
          <div className="flex flex-col justify-start items-start gap-6 text-neutral-50">
            <h2 data-aos="fade-left" className="text-4xl w-full text-center md:text-left font-vidaloka">Principal's Message</h2>
            <p data-aos="fade-left" data-aos-delay="200" className="text-xl text-justify p-2 font-karla">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quia vitae perspiciatis hic mollitia nostrum quisquam praesentium aliquam? Eaque, maxime iusto? Recusandae debitis cupiditate consequuntur voluptates itaque dolores animi saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint consequuntur consectetur optio cupiditate iste assumenda exercitationem explicabo ipsum fugit facere. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sequi placeat aperiam autem, obcaecati consequuntur explicabo eveniet magni voluptas tempora.
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <img data-aos="fade-up" className="w-32" src={logo} alt="Logo" />
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col justify-center items-center gap-4 p-2">
              <p className="text-white text-xl italic font-martel">- by Swastik Kasera</p>
              <img src={sign} className="w-24" alt="Signature" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrincipalDesk;
