# Frontend Mentor - URL Shortening API Landing Page Solution

## Table of Contents

- [Preview](#preview)
- [Introduction](#introduction)
- [Built Using](#built-using)
- [Features](#features)
- [How to Use](#how-to-use)
- [Acknowledgements](#acknowledgements)
- [License](#license)

![Shortly Landing Page Preview](./src/assets/design/desktop-preview.jpg)

## Introduction

Welcome to the [URL Shortening API Landing Page](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G) project, my solution to the Frontend Mentor challenge. This project was developed using React, Sass (SCSS), and JavaScript to integrate with the [shrtcode API](https://shrtco.de/), allowing users to create shortened URLs effortlessly. The user-friendly interface ensures easy URL shortening, error handling for empty input fields, and responsive design for optimal user experience. Enjoy seamless URL management with the ability to copy, delete, and limit up to 5 shortened links.


## Built Using

[![](https://skillicons.dev/icons?i=react,scss,javascript)](https://skillicons.dev)

## Features

- **URL Shortening**: Users can shorten any valid URL using the shrtcode API.

- **Saved Shortened Links**: Shortened links are saved and displayed, even after refreshing the browser.

- **Clipboard Copy**: Users can easily copy the shortened link to their clipboard with a single click.

- **Error Handling**: The project provides error messages when the form is submitted with an empty input field.

- **Manage Shortened Links**: Users can delete the shortened links they created to keep their list organized.

- **Link Limit**: Users can have a maximum of 5 shortened links at a time. When attempting to create a new shortened link with 5 links already displayed, the oldest link will be automatically deleted.

- **Responsive Design**: The interface adapts to different screen sizes and devices for an optimal user experience.

- **Interactive Elements**: Hover and focus states are implemented for all interactive elements on the page.

## How to Use

1. Access the live demo [here](https://maorbezalel.github.io/url-shortening-api-landing-page/).
2. Enter a valid URL in the input field.
3. Click the "Shorten It!" button to generate a shortened URL.
4. The shortened link will appear below, and you can click the "Copy" button to copy it to your clipboard.
5. Your shortened links will be saved and displayed even after refreshing the page.

## Acknowledgements

- **Frontend Mentor**: Thanks to [Frontend Mentor](https://www.frontendmentor.io/) for providing this challenge and design assets.

- **shrtcode API**: Many Thanks to the creators at [tibush Labs](https://tibush.com/) for providing the [shrtcode API](https://shrtco.de/), which enabled to seamlessly generate and manage shortened URLs in this project.

- **ui.dev Team**: Special thanks to the [ui.dev team](https://ui.dev/) for creating [useHooks](https://usehooks.com/), a collection of modern, server-safe React hooks. These hooks have greatly contributed to the development of this project.


## License

This solution is based on a Frontend Mentor challenge and designs and is subject to the terms and conditions of the [Frontend Mentor License](https://www.frontendmentor.io/license).