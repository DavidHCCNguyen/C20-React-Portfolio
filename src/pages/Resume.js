import React from 'react';

const Resume = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'Express', 'jQuery', 'Jest',
    'Markdown', 'Node.js', 'Bootstrap', 'NPM', 'Sequelize', 'MySQL',
    'Git', 'Heroku', 'Insomnia', 'Visual Studio Code', 'GitHub',
    'JSON', 'MongoDB', 'Handlebars', 'Tailwind CSS', 'Webpack', 'GitLab',
    'React', 'GraphQL', 'Mongoose'
  ];

  const workExperience = [
    'University of Adelaide - Full Stack Web Developer Student (March 2023 – September 2023)',
    'Western Technical College - Carpentry (3 Years)',
    'Paint Machine - Work Experience (Few months)',
    'AMA Group (All transport Crash Repairs) - Work Experience (Few months)'
  ];

  const education = [
    'University of Adelaide - Certificate of Completion in Web Development (Graduation: 2023)',
    'Mount Carmel College: Completion of Year 12',
    'Vet Courses (WTC): Introduction to trades, Cert I, II & III (Carpentry)',
    'Tool Usages, EWP certificate, safety training & White Card',
    'Bootcamp from "The University of Adelaide": Coding/Web Programmer'
  ];

  const additionalSkills = [
    'Google Data Analytics',
    'SEO (On- and Off-Page)',
    'Communication',
    'Attention to Detail',
    'Team Player'
  ];

  const certifications = [
    {
      name: 'Entrepreneurship & Innovation: Web Development (Forage)',
      date: 'December 2023',
      details: [
        'Developed expertise in planning and structuring websites.',
        'Translated design concepts into responsive web elements.',
        'Applied entrepreneurial thinking to web development.'
      ]
    },
    {
      name: 'Google Data Analytics 4',
      date: 'December 2023',
      details: [
        'Developed data-driven decisions involving analyzing various aspects of the site.',
        'Explored diverse reports covering acquisition, engagement, monetization, retention, user attributes, and tech.'
      ]
    },
    {
      name: 'SEO Certificate (Great Learning)',
      date: 'December 2023',
      details: [
        'Learned about automated marketing, content marketing strategies, search engine advertising, keywords, PPC campaigns, and public relations.',
        'Learned about on-page SEO and off-page SEO strategies.'
      ]
    }
  ];

  return (
    <div>
      <h1>Resume</h1>

      <h2>Summary</h2>
      <p>
        I am a highly positive and adaptable individual with a strong work ethic. I approach challenging tasks with enthusiasm and a willingness to learn. Safety is a top priority, and I excel in collaborative environments, communicating effectively with colleagues to resolve issues. I thrive on hands-on experiences and enjoy exploring new activities to expand my knowledge and skills.
      </p>

      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Skills</h2>
      <ul>
        {additionalSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Certifications</h2>
      {certifications.map((certification, index) => (
        <div key={index}>
          <h3>{certification.name}</h3>
          <p><strong>Date:</strong> {certification.date}</p>
          <ul>
            {certification.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}

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
