import { Link } from "react-router-dom";

import { CTA } from "../components";
import { majors } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Our{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Majors
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        After five years, the institute can award diplomas to students who successfully complete the stages.
        The lessons in all stages are academically 
        determined in which students gradually receive lessons in stages and gain full knowledge of the subjects they study.
          <br />
        and Majors starts from fourth stage and student can choose between three different majors
        </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {majors.map((majors) => (
          <div className='lg:w-[400px] w-full' key={majors.name}>
            <div className='block-container w-12 h-12'>
            
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={majors.iconUrl}
                  alt='threads'
                  className='w-10 h-10 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {majors.name}
              </h4>
              <p className='mt-2 text-slate-500'>{majors.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
