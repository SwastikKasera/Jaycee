import React from 'react'
import Counter from './Counter'

const Achievements = () => {
  return (
    <section className='p-10 flex justify-center items-center'>
        <div className='w-full bg-accent min-h-60 h-fit flex flex-col md:flex-row justify-center items-center flex-wrap shadow-md rounded-2xl'>
          <div className='md:w-2/6 w-full container p-6 h-full flex justify-center items-center'>
            <h2 className='text-5xl'>Our Achievements</h2>
          </div>
          <div className='md:w-4/6 w-full min-h-60 flex justify-center items-center bg-secondary rounded-2xl'>
            <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-5xl text-4xl text-background"><Counter start={0} end={400} duration={2000} />+</h2>
                  <p className="leading-relaxed text-background">Students</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-5xl text-4xl text-background">20+</h2>
                  <p className="leading-relaxed text-background">Top Class Faculty</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-5xl text-4xl text-background">100%</h2>
                  <p className="leading-relaxed text-background">Passing Result</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-5xl text-4xl text-background">85</h2>
                  <p className="leading-relaxed text-background">Got 90+ Marks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Achievements