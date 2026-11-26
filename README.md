# React Project 4 — Online Learning Website

A responsive online learning and course catalog platform built with **React**, **Vite**, **JavaScript**, and modular **CSS**.

## Features

- Sticky platform navbar displaying live enrollment count (`Navbar.jsx`)
- Reusable course cards (`CourseCard.jsx`) accepting course props with title, instructor, duration, lesson count, level, price, and interactive enrollment toggle
- Level-filtered course grid rendered with `map()` (`CourseList.jsx`)
- Expert mentor showcase with instructor profiles and learner metrics (`Instructor.jsx`)
- Responsive footer summarizing catalog and enrollment state (`Footer.jsx`)

## Project Structure

```text
react-project-4-courses/
├── src/
│   ├── assets/
│   │   ├── inst-1.svg
│   │   ├── inst-2.svg
│   │   └── inst-3.svg
│   ├── components/
│   │   ├── CourseCard.css
│   │   ├── CourseCard.jsx
│   │   ├── CourseList.css
│   │   ├── CourseList.jsx
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   ├── Instructor.css
│   │   ├── Instructor.jsx
│   │   ├── Navbar.css
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── coursesData.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Getting Started

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```
