import books from './assets/projects/books.png';
import carlist from './assets/projects/carlist.png';
import chat from './assets/projects/chat.png';
import hotels from './assets/projects/hotels.png';
import hotel from './assets/projects/hotel.png';
import shopping_cart from './assets/projects/shopping_cart.png';
import userlist from './assets/projects/userlist.png';
import watches from './assets/projects/watches.png';
import watch from './assets/projects/watch.png';
import gallery from './assets/projects/gallery.png';
import rtk from './assets/projects/rtk.png';
import fitness from './assets/projects/fitness.png';

export const isNotDeployed = 'Not Yet Deployed';

export const projects = [
  {
    id: 101,
    image: 'https://o.remove.bg/downloads/8421a69c-c04c-437f-95a9-7b2998099e8e/imgbin-inventory-management-software-computer-icons-price-business-business-WmfA8a2KedCML5Fkn9Ues5T6M-removebg-preview.png',
    name: "Full Stack - Inventory management",
    description:
      "This App was part of my MERN stack course. This is a Full-Stack App with authentication feature, front-end is created with react, backend with node.js and express and I'm using MongoDB as a database. You first need to sign up or log in to the app. This App has many features, firstly, you can add products (including image) to the database, then you can edit, delete or view the details of the product, you also have to create a profile when registering and then you can edit your profile too, you can update your name, bio, image and password too. If you don't want to sign up, You can use this credentials to log in(since some products are already added and you can check  how the app works): Email - 'user1@email.io', Password: 'user1password'. but you can sign up with any made up email. Then you can use website for Inventory management.",
    stack: 'React, Node.js, Express.js, MongoDB',  
    website: 'https://inv-man-app-front.vercel.app/',
    code: 'https://github.com/luka0009/Full-Stack-Inventory-Management-App',
  },
  {
    id: 102,
    image: fitness,
    name: "MERN App - Workout management",
    description:
      "Full stack App MERN App with authentication, front-end is created with react, backend with node.js and express and I'm using MongoDB as a database. You first need to sign up or log in. If you don't want to sign up, You can use this credentials to log in: Email - 'user1@luka.dev', Password: 'MernStack12!'. but you can sign up with any made up email. Then you can use website for workout management.",
    stack: 'React, Node.js, Express.js, MongoDB',  
    website: 'https://mern-workouts-app.vercel.app/',
    code: 'https://github.com/luka0009/MERN---Workouts',
  },
  {
    id: 103,
    image: 'https://cdn-icons-png.flaticon.com/512/5900/5900198.png',
    name: "Book E-commerce website",
    description:
      "Description of this application is available on 'about' page of this web app",
    stack: 'React, Typescript, Bootsrap',  
    website: 'https://react-ts-bootstrap.vercel.app/',
    code: 'https://github.com/luka0009/React-ts-bootstrap',
  },
  {
    id: 1,
    // image: "https://m.media-amazon.com/images/I/41EpGHYVvkL.png",
    image: chat,
    name: "Chat App UI",
    description:
      "Responsive Chat App UI with log in and register pages created with react and scss. Links are shown when you click burger-bar at the top. The app has some  very basic functionalities, for example, when clicking log out you go to log in page and several others, but it is mainly UI project.",
    stack: 'React, Scss',  
    website: 'https://chat-app-tan-three.vercel.app/',
    code: 'https://github.com/luka0009/chat-app',
  },
  {
    id: 2,
    image: shopping_cart,
    name: "Shopping Cart",
    description:
      "This is a shopping Cart Application created With React and Tailwind CSS, and state management is handled with Redux-toolkit. this app has main ecommerce web app feautures, you can add items to shopping cart, remove, add diferent items and see sum total of their costs and etc. ",
    stack: 'React, Tailwind-CSS, Redux-Toolkit',  
    website: 'https://shoppingcart-6wfe-c4knez0po-luka0009.vercel.app/',
    code: 'https://github.com/luka0009/cart-ecommerce',
  },
  {
    id: 3,
    image: hotel,
    name: "Hotel Admin Dashboard",
    description:
      "Hotel Admin Dashboard App created with React, Typescript and Firebase – there is main hotels page, where you can view all the hotels, if you click new hotels button, you go to form page where you can fill out every input and add a new hotel. On each hotel there is ‘view more information’ button, which redirects you to the hotel’s page where you can delete/edit hotel.",
    stack: 'firebase, typescript, react',  
    website: 'https://hotel-app-eafe3.web.app/',
    code: 'https://github.com/luka0009/Hotel-App',
  },
  {
    id: 4,
    image: books,
    name: "CRUD App with firebase",
    description:
      "this is Firebase App created with vanilla javascript. It uses Firebase Authentication and Database. You first need to sign up(with any email and password – no verification)/Log in with existing account, and there is a book list in which you can update, delete or add books – this is list is connected to firebase database.this is Firebase App created with vanilla javascript. It uses Firebase Authentication and Database. You first need to sign up(with any email and password – no verification)/Log in with existing account, and there is a book list in which you can update, delete or add books.",
    stack: 'firebase, Javascript',  
    website: ' https://practice-project-93aa0.web.app/',
    code: 'https://github.com/luka0009/Firebase-Crud-And-Auth',
  },
  {
    id: 5,
    image: userlist,
    name: "User list management",
    description:
      "This is User List management App created with react.JS and Tailwind CSS using Redux Toolkit for state management. This App doesn't use any database, but the results/changes are stored in a localstorage. This is a CRUD app where user can add, update or delete users.",
    stack: 'React, Tailwind-CSS, Redux-Toolkit',  
    website: 'https://user-management-liard.vercel.app/',
    code: 'https://github.com/luka0009/user-management',
  },
  {
    id: 6,
    image: watch,
    name: "Watch store",
    description:
      " This is a watch store created with html, javasctipt and scss. Watches (images, names) are taken from amazon randomly. You can  search watches by name or filter them based on maximum price.",
    stack: 'Javascript, SCSS',
    website: 'https://luka0009.github.io/watch-store/',
    code: 'https://github.com/luka0009/watch-store',
  },
  {
    id: 7,
    image: carlist,
    name: "Car list",
    description:
      "website created with react and redux toolkit where, you can add cars (name and price) to the list, delete them if you want or search  any car in the list. There is total cost at the bottom of the list which gets updated each time (either after deleting car or filtering after  search).",
    stack: 'React, Redux-toolkit',
    website: ' https://luka0009.github.io/react-cars-list-and-search/',
    code: 'https://github.com/luka0009/react-cars-list-and-search',
  },
  {
    id: 8,
    image: gallery,
    name: "Image Gallery",
    description:
      "Image Gallery created with react Firebase and Css grid. You can upload images of your choice to the gallery and it will be added to the firestore database and show up at the end of the gallery.",
    stack: 'firebase, react, CSS-Grid',
    website: 'https://gallery-pi-ten.vercel.app/',
    code: 'https://github.com/luka0009/gallery'
  },
  {
    id: 9,
    image: rtk,
    name: "Advnaced RTK Query Project",
    description:
      "Advanced data fetching + CRUD with Redux toolkit and Redux toolkit query, There is a list of people (user can add user by clicking on a button and it will be added autoamtically to the database and also to the list using rtk query, users can also delete anyone from the list), each of them has album and each album has pictures, similar CRUD operation can be done on each of them, users can add album by clicking on add album button and it will fetch data from database, aslo they can delete those albums or photos inside each album",
    stack: 'React, Redux-toolkit, Tailwind CSS',
    website: isNotDeployed,
    code: 'https://github.com/luka0009/RTK-Query'
  },
];
