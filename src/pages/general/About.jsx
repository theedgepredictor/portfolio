import React from 'react';

function AboutPage() {
  return (
    <div className="text-center bg-gray-100 px-12 sm:px-20 pb-12">
      <h2 className="text-3xl text-center font-bold">About Me</h2>

      <p className="text-xs sm:text-sm mt-2">
        Hi, I'm Charlie.
      </p>

      <p className="text-xs sm:text-sm mt-2">
        I'm a data scientist based out of Bradenton, FL. My passion for AI and data science began in research on Pollen Grain Classification Using Deep Learning Object Detection for my Master's Thesis. I took every AI class I could 
        and obtained a Deep learning Specialization from Coursera to gain additional insight on Computer Vision and Machine Learning project structure. My thesis work got published and I worked as a full stack developer for a year to round out my software
        development skills before fully switching over to work as a data scientist. 
      </p>
      <p className="text-xs sm:text-sm mt-2">
      I always highlight the difference between academic data science vs on the job data science. Both hold value and have their place but should not cross domains. I follow CRISP-DM 
        management workflows for any data science project I take on, focusing on agile, lean development to get end results to the business stakeholders/users quickly to drive future project iterations. I love what I do and am always ready to learn more! Check out my
        RESOURCES page to see all of the books, articles, courses, etc.. that have helped shape my career thus far! 
        Currently, I am a data scientist at one of the leading online EHR software companies for behavioral health specializing in claim denial prediction and custom treatment planning solutions. I always want to be committed to being an integral part
        of a data team that harnesses the power of AI for good and builds meaningful and safe solutions. 
      </p>

      <h2 className="text-3xl text-center font-bold">Education</h2>

      <p className="text-xs sm:text-sm mt-2">
        Masters of Science: Computational Science and Engineering (Sep 2019 - May 2021)
      </p>

      <p className="text-xs sm:text-sm mt-2">
        Bachelor of Science: Science and Technology (Sep 2016 - May 2020)
      </p>

    </div>
  );
}

export default AboutPage;