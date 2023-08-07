import React from 'react';

const Resume = () => {
  const skills = [
    'HTML5', 'CSS', 'JavaScript', 'Express', 'jQuery', 'Jest',
    'Markdown', 'Node.js', 'Bootstrap', 'NPM', 'Sequelize', 'MySQL',
    'Git', 'Heroku', 'Insomnia', 'Visual Studio Code', 'GitHub',
    'JSON', 'MongoDB', 'Handlebars', 'Tailwind CSS', 'Webpack', 'GitLab'
  ];

  const workExperience = [
    '3 Years of Carpentry with Western Technical College',
    'Few months of Work Experience with Paint Machine',
    'Few months of Work Experience with AMA Group (All transport Crash Repairs)'
  ];

  const education = [
    'Mount Carmel College: Completion of Year 12',
    'Vet Courses (WTC): Introduction to trades, Cert I, II & III (Carpentry)',
    'Tool Usages, EWP certificate, safety training & White Card',
    'Bootcamp from "The University of Adelaide": Coding/Web Programmer'
  ];

  return (
    <div>
      <h1>Resume</h1>

      <h2>Summary</h2>
      <p>
        Highly positive and adaptable individual with a strong work ethic. I approach
        challenging tasks with enthusiasm and a willingness to learn. Safety is a top
        priority, and I excel in collaborative environments, communicating effectively
        with colleagues to resolve issues. I thrive on hands-on experiences and enjoy
        exploring new activities to expand my knowledge and skills.
      </p>

      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>Proficient in handling basic PPE/safety protocols</li>
        <li>Experienced in EWP (Elevated Work Platform) operation with BL and SL</li>
        <li>Skilled in painting and carpentry, with a focus on automotive spray painting</li>
        <li>Quick learner and adapt easily to new challenges</li>
      </ul>

      <h2>Licenses & Certifications</h2>
      <ul>
        <li>Learners License (P License anticipated within this year/next year)</li>
        <li>White Card (Construction Induction Card)</li>
        <li>EWP Operator License (Elevated Work Platform Operator)</li>
        <li>Working at Heights certification</li>
      </ul>

      <h2>Experience</h2>
      <ul>
        {workExperience.map((experience, index) => (
          <li key={index}>{experience}</li>
        ))}
      </ul>

      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>{edu}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
