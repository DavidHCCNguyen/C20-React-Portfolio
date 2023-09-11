import React, { useState, useEffect } from "react";
import "./Portfolio.css";

const popularRepos = [
  {
    name: "F1-Wondering-Swordsman",
    link: "https://github.com/DavidHCCNguyen/F1-Wondering-Swordsman",
    image: "Capture.PNG",
  },
  {
    name: "C06-Weather-Forcast",
    link: "https://github.com/DavidHCCNguyen/C06-Weather-Forcast",
    image: "Capture1.PNG",
  },
  {
    name: "C05-Work-Day-Scheduler",
    link: "https://github.com/DavidHCCNguyen/C05-Work-Day-Scheduler",
    image: "Capture2.PNG",
  },
  {
    name: "C19-Text-Editor",
    link: "https://github.com/DavidHCCNguyen/C19-Text-Editor",
    image: "Capture3.PNG",
  },
  {
    name: "C17-Regex-Assistance",
    link: "https://github.com/DavidHCCNguyen/C17--Regex-Assistance",
    image: "Capture4.PNG",
  },
  {
    name: "C12-Employee-Tracker",
    link: "https://github.com/DavidHCCNguyen/C12-Employee-Tracker",
    image: "Capture5.PNG",
  },
];


export default function Portfolio() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch repositories from GitHub API
    fetch("https://api.github.com/users/DavidHCCNguyen/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>
        I have created numerous repositories and projects on my 
        GitHub profile to explore a wide range of technologies, 
        learn continuously, and contribute to open-source communities.
      </p>

      <h2>Popular Repositories:</h2>
      <div className="popular-repos">
        {popularRepos.map((repo) => (
          <a key={repo.name} href={repo.link} target="_blank" rel="noopener noreferrer">
            <div className="repo-block">
              <img src={process.env.PUBLIC_URL + repo.image} alt={repo.name} />
              <p>{repo.name}</p>
            </div>
          </a>
        ))}
      </div>

      <h2>My GitHub Repositories:</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
