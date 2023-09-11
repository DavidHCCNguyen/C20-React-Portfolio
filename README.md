# 20: React Portfolio

## Task

As a dedicated web developer, I understand the importance of having a portfolio that showcases my projects and skills in the most modern and impressive way possible. Therefore, I took up the challenge to create a portfolio using the latest technologies, specifically using React. With this React-powered portfolio, I aim to set myself apart from other developers and present my work in a visually appealing and user-friendly manner.

This is going to be a portfolio that will be filled with 4 tabs powered by js/react:

```md
-Home:
The Home tab will be a brief introduction of myself and my goals as a developer.

-Resume:
The Resume tab will be a downloadable pdf of my resume.


-Portfolio:
The Portfolio tab will be a showcase of my projects.

-ContactL:
The Contact tab will be a form that will allow users to contact me.
```

[This is the repo that contains the Portfolio code.](https://github.com/DavidHCCNguyen/C20-React-Portfolio)

And this will be the deployed site's look:
![This is the deployed site's look.](./Assets/CaptureNone.PNG)

To make sure it runs fine for you if you have the repo in your local machine, run the following commands in your terminal (First remove build to grab a fresh one):

npm i && npm run build && npm run start:

This would update the npm and create the folder that would be used for the start npm,
making the page work!

## User Story

```md
As an employer looking for candidates with experience building single-page applications,
I want to view a potential employee's deployed React portfolio of work samples,
So that I can assess whether they're a good candidate for an open position.

```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```