## Virtual Book Library
## Overview
The Virtual Book Library is a React.js web application that allows users to browse a collection of books, view detailed information about each book, and manage their personal library. Users can add or remove books from their personal library and navigate through various pages using React Router.

This project demonstrates proficiency in React component structure, state management, routing, and reusable component design. It is fully responsive across desktop, tablet, and mobile devices.

## Features
- **Book Listing (Home Page)** : Displays a grid of books with details like title, author, genre, and rating. Includes a search bar to filter books by title, author, or genre.
- **Book Details Page**: Displays detailed information about a selected book, such as title, author, genre, rating, description, and publication year. Users can add books to their personal library from this page.
- **My Library Page**: Shows a list of books added to the user's personal library. Users can remove books from this collection.

## Technologies Used
- **React.js**: Core framework
- **React Router**: For handling navigation between pages
- **Context API**: For global state management (library and books)
- **CSS**: For styling the components and ensuring responsiveness

## Project Structure
📁 src
├── 📁 components
│   ├── BookCard.js
│   ├── BookList.js
│   ├── SearchBar.js
│   ├── SearchBar.css
│   ├── Header.js
├── 📁 pages
│   ├── HomePage.js
│   ├── BookDetailsPage.js
│   ├── BookDetailsPage.css
│   ├── MyLibraryPage.js
├── 📁 context
│   ├── LibraryContext.js
├── 📁 services
│   └── booksData.js
├── App.js
├── App.css
├── index.js
└── README.md


## How to Run the Project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Pages Overview
1. **Home Page (Book Listing)**
- **BookList Component**: Displays books in a responsive grid layout.
- **SearchBar Component**: Allows users to search for books by title, author, or genre.
- **Routing**: Clicking on a book navigates to the Book Details Page.
2. **Book Details Page**
- **Book Details**: Displays detailed information about the selected book.
- **Add to Library Button**: Allows users to add books to their personal library, which is managed via Context API.
3. **My Library Page**
- **Library Management**: Displays books that the user has added to their personal library.
- **Remove from Library**: Users can remove books from their library. This action updates the global state using Context API.

## Styling and Responsiveness
- **CSS**: Each page and component has its own CSS file for better organization.
- **Responsive Design**: The app is fully responsive and adjusts the layout for mobile, tablet, and desktop screens.
- **Book Cards**: The book cards are designed with a clean, modern look, including hover effects and smooth transitions.