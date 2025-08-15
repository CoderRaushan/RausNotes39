# RausNotes39

RausNotes39 is a comprehensive educational web platform designed to provide engineering students with notes, SGPA calculators, games, project showcases, and various academic resources. Built with HTML, CSS, JavaScript, and Firebase, it aims to simplify study and project management for students across multiple branches.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Authentication](#authentication)
- [Games](#games)
- [SGPA Calculator](#sgpa-calculator)
- [Notes & Resources](#notes--resources)
- [Music Player](#music-player)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Branch-wise Notes:** Download and view notes for all semesters and branches (IT, CSE).
- **SGPA Calculator:** Calculate SGPA for different branches and semesters.
- **Games:** Fun and educational games like Color Generator, Guess a Number, and WhatsApp Link Generator.
- **Project Showcase:** Explore various projects with live demos.
- **PPT Section:** Explore various PPTs on diffrent topics.
- **User Authentication:** Login with Google, logout, and user profile management.
- **Responsive Design:** Mobile-friendly and accessible UI.
- **Downloadable Resources:** Access to PDFs, PPTs, and practical files.
- **Dynamic Header & Footer:** Consistent navigation and theming across all pages.

---

## Project Structure

```
.
├── index.html
├── style.css
├── readme.md
├── sitemap.xml
├── .gitignore
├── .github/
│   └── workflows/
├── .vscode/
│   └── settings.json
├── css/
│   ├── review.css
│   └── sgpa_graph.css
├── database/
│   ├── login.html
│   ├── login.js
│   ├── logout.js
│   └── Notes/
├── game/
│   ├── color_generator.js
│   ├── color_genetator.html
│   └── gues_a_number.html
├── header&footer/
│   ├── completePage.css
│   ├── Header.html
│   ├── main1.js
│   └── ...
├── importants/
├── js/
├── MusicPlayer/
│   ├── index.html
│   ├── mpStyle.css
│   └── mpStyle.js
├── notes/
│   ├── it_3rd_sem_pdfs.html
│   ├── it_4rd_sem_pdfs.html
│   ├── it_5th_sem_pdfs.html
│   ├── it_6th_sem_pdfs.html
│   └── notes_section.html
├── pdf/
├── photos/
├── portfolio/
├── ppt/
├── ppt_section/
├── ppt-image/
├── Project-Card-Slider/
├── sgpa/
│   ├── CE/
│   ├── CSE/
│   ├── ECE/
│   ├── EE/
│   ├── IT/
│   ├── ME/
│   └── sgpa.html
├── TaskCompletionBar/
├── TaskProgressTracker/
├── toss/
├── userProfile/
├── video/
├── weather/
└── ...
```

---

## Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/CoderRaushan/RausNotes39.git
   cd RausNotes39
   ```

2. **Install dependencies:**
   - No build tools required for static hosting.
   - For Firebase or backend integration, configure your environment as needed.

3. **Run locally:**
   - Open `index.html` in your browser.
   - For full functionality (auth, database), deploy to a static host (e.g., Netlify, Vercel) and configure Firebase.

---

## Usage

- **Home Page:** Navigate to [index.html](index.html) for the main dashboard.
- **Notes:** Access notes by branch and semester in the [notes/](notes/) directory.
- **SGPA Calculator:** Use the calculators in [sgpa/](sgpa/) for your branch and semester.
- **PPT:** Access PPTs in the [notes/](ppt/) directory.
- **Games:** Play games in the [game/](game/) directory.
- **Authentication:** Login/logout via Google using the login popup ([database/login.html](database/login.html)).

---

## Authentication

- **Login:** Uses Google OAuth. If not logged in, a popup login form appears.
- **Logout:** Available in the header/footer and via [database/logout.js](database/logout.js).
- **User Info:** Displayed in the header and bottom menu after login.

---

## Games

- **Color Generator:** [game/color_genetator.html](game/color_genetator.html)
- **Guess a Number:** [game/gues_a_number.html](game/gues_a_number.html)
- **WhatsApp Link Generator:** [game/no_to_wa_link_generator.html](game/no_to_wa_link_generator.html)

---

## SGPA Calculator

- **Branch-wise Calculators:** Available for IT, CSE, ME, CE, ECE, EE, etc.
- **Example:** [sgpa/IT/sem6/it_sem6_sgpa.html](sgpa/IT/sem6/it_sem6_sgpa.html)
- **Features:** Input marks, validate, and calculate SGPA with feedback.

---

## Notes & Resources

- **Semester-wise Notes:** [notes/it_3rd_sem_pdfs.html](notes/it_3rd_sem_pdfs.html), [notes/it_4rd_sem_pdfs.html](notes/it_4rd_sem_pdfs.html), etc.
- **Practical Files, Assignments, PYQs:** Downloadable as PDFs.
- **PPTs:** [ppt_section/ppt_page.html](ppt_section/ppt_page.html)

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request.

---

## Contact

- **Author:** Raushan Kumar
- **Website:** [https://rausnotes39.netlify.app/](https://rausnotes39.netlify.app/)
- **Email:** raushankumar23082004@gmail.com
- **GitHub:** [https://github.com/coderraushan](https://github.com/coderraushan)
- **LinkedIn:** [https://www.linkedin.com/in/raushan-kumar-964a75255/)

---

> RausNotes39 is dedicated to making engineering education accessible and organized for everyone.
