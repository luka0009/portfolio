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
import finances from './assets/projects/finances.png';

export const isNotDeployed = 'Not Yet Deployed';

export const projects = [
  {
    id: 5,
    image: 'data:image/png;base64,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',
    name: "Full Stack Airbnb Clone",
    description: 'Full stack Airbnb clone created with: Next.js (version 13), Next-auth, Tailwind css, Typescript, Prisma, MongoDb, Zustand, Cloudinary. It has all the feauteres, authentication, hosting, reserving, favoriting functionality and etc. you can also manage your trips, reservations, facorites and your listings.',
    stack: 'Next.js-13, Next-auth, TS, Tailwind, Prisma, MongoDB, Zustand, CLoudinary',  
    website: 'https://next-app-luka0009.vercel.app/',
    code: 'https://github.com/luka0009/Next-js-13-Airbnb-clone',
  },
  {
    id: 6,
    image: carlist,
    name: "Advanced Full Stack App",
    description:
      `WARNING: THE APP WILL TAKE ABOUT A MINUTE TO LOAD, SINCE THE BACKEND IS DEPLOYED WITH A FREE PLAN AND DOESN'T WORK FULLY EFFICIENTLY -  
      
      This App was part of my MERN stack course. This is a Full-Stack Inventory Management App with authentication feature, front-end is created with react, backend with node.js and express and I'm using MongoDB as a database. You first need to sign up or log in to the app. This App has many features, firstly, you can add products (including image) to the database, then you can edit, delete or view the details of the product, you also have to create a profile when registering and then you can edit your profile too, you can update your name, bio, image and password too. If you don't want to sign up, You can use this credentials to log in(since some products are already added and you can check  how the app works): Email - 'user1@email.io', Password: 'user1password'. but you can sign up with any made up email. Then you can use website for Inventory management.`,
    stack: 'MERN, redux-toolkit, Cloudinary',  
    website: 'https://inv-man-app-front.vercel.app/',
    code: 'https://github.com/luka0009/Full-Stack-Inventory-Management-App',
  },
  {
    id: 7,
    image: 'https://cdn-icons-png.flaticon.com/512/225/225932.png',
    name: "Full stack - Community library",
    description:
      "WARNING: THE APP WILL TAKE ABOUT A MINUTE TO LOAD, SINCE THE BACKEND IS DEPLOYED WITH A FREE PLAN AND DOESN'T WORK FULLY EFFICIENTLY - This is Full stack MERN App with authentication feature. front-end is created with react, backend with node.js and express and I'm using MongoDB as a database. You can visit website and see all the books, but if you want to unlock all the features (like editing or deleting books) you have to log in. You can user 'user1@email.io' and 'user1password' to log in or you can sign up with other credentials.",
    stack: 'MERN, tailwind, Bootstrap, RTK-query',  
    website: 'https://lib-front.vercel.app/',
    code: 'https://github.com/luka0009/Lib-Front/tree/main',
  },
  {
    id: 8,
    image: fitness,
    name: "MERN App - Workout management",
    description:
      "WARNING: THE APP WILL TAKE ABOUT A MINUTE TO LOAD, SINCE THE BACKEND IS DEPLOYED WITH A FREE PLAN AND DOESN'T WORK FULLY EFFICIENTLY - Full stack MERN App with authentication, front-end is created with react, backend with node.js and express and I'm using MongoDB as a database. You first need to sign up or log in. If you don't want to sign up, You can use this credentials to log in: Email - 'user1@luka.dev', Password: 'MernStack12!'. but you can sign up with any made up email. Then you can use website for workout management.",
    stack: 'React, Node.js, Express.js, MongoDB',  
    website: 'https://mern-workouts-app.vercel.app/',
    code: 'https://github.com/luka0009/MERN---Workouts',
  },
  {
    id: 9,
    image: 'https://cdn-icons-png.flaticon.com/512/5900/5900198.png',
    name: "Book E-commerce website",
    description:
      "Description of this application is available on 'about' page of this app",
    stack: 'React, Typescript, Bootsrap',  
    website: 'https://react-ts-bootstrap.vercel.app/',
    code: 'https://github.com/luka0009/React-ts-bootstrap',
  },
  {
    id: 10,
    image: finances,
    name: "Financial Management App",
    description:
      "WARNING: THE APP WILL TAKE ABOUT A MINUTE TO LOAD, SINCE THE BACKEND IS DEPLOYED WITH A FREE PLAN AND DOESN'T WORK FULLY EFFICIENTLY - MERN stack app built with RTK query and Tailwind css, you can manage your expenses, incomes and investemnts here. the app has CRUD functioanlity and graphical visualization",
    stack: 'MERN, RTK-Query, Tailwind, chart.js',  
    website: 'https://bufget-fron2.vercel.app/',
    code: 'https://bufget-fron2.vercel.app/',
  },
  {
    id: 11,
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
    id: 12,
    image: shopping_cart,
    name: "Shopping Cart",
    description:
      "This is a shopping Cart Application created With React and Tailwind CSS, and state management is handled with Redux-toolkit. this app has main ecommerce web app feautures, you can add items to shopping cart, remove, add diferent items and see sum total of their costs and etc. ",
    stack: 'React, Tailwind-CSS, Redux-Toolkit',  
    website: 'https://shoppingcart-6wfe-c4knez0po-luka0009.vercel.app/',
    code: 'https://github.com/luka0009/cart-ecommerce',
  },
  {
    id: 13,
    image: hotel,
    name: "Hotel Admin Dashboard",
    description:
      "Hotel Admin Dashboard App created with React, Typescript and Firebase – there is main hotels page, where you can view all the hotels, if you click new hotels button, you go to form page where you can fill out every input and add a new hotel. On each hotel there is ‘view more information’ button, which redirects you to the hotel’s page where you can delete/edit hotel.",
    stack: 'firebase, typescript, react',  
    website: 'https://hotel-app-eafe3.web.app/',
    code: 'https://github.com/luka0009/Hotel-App',
  },
  {
    id: 14,
    image: books,
    name: "CRUD App with firebase",
    description:
      "this is Firebase App created with vanilla javascript. It uses Firebase Authentication and Database. You first need to sign up(with any email and password – no verification)/Log in with existing account, and there is a book list in which you can update, delete or add books – this is list is connected to firebase database.this is Firebase App created with vanilla javascript. It uses Firebase Authentication and Database. You first need to sign up(with any email and password – no verification)/Log in with existing account, and there is a book list in which you can update, delete or add books.",
    stack: 'firebase, Javascript',  
    website: ' https://practice-project-93aa0.web.app/',
    code: 'https://github.com/luka0009/Firebase-Crud-And-Auth',
  },
  // {
  //   id: 5,
  //   image: userlist,
  //   name: "User list management",
  //   description:
  //     "This is User List management App created with react.JS and Tailwind CSS using Redux Toolkit for state management. This App doesn't use any database, but the results/changes are stored in a localstorage. This is a CRUD app where user can add, update or delete users.",
  //   stack: 'React, Tailwind-CSS, Redux-Toolkit',  
  //   website: 'https://user-management-liard.vercel.app/',
  //   code: 'https://github.com/luka0009/user-management',
  // },
  // {
  //   id: 6,
  //   image: watch,
  //   name: "Watch store",
  //   description:
  //     " This is a watch store created with html, javasctipt and scss. Watches (images, names) are taken from amazon randomly. You can  search watches by name or filter them based on maximum price.",
  //   stack: 'Javascript, SCSS',
  //   website: 'https://luka0009.github.io/watch-store/',
  //   code: 'https://github.com/luka0009/watch-store',
  // },
  // {
  //   id: 7,
  //   image: carlist,
  //   name: "Car list",
  //   description:
  //     "website created with react and redux toolkit where, you can add cars (name and price) to the list, delete them if you want or search  any car in the list. There is total cost at the bottom of the list which gets updated each time (either after deleting car or filtering after  search).",
  //   stack: 'React, Redux-toolkit',
  //   website: ' https://luka0009.github.io/react-cars-list-and-search/',
  //   code: 'https://github.com/luka0009/react-cars-list-and-search',
  // },
  {
    id: 15,
    image: gallery,
    name: "Image Gallery",
    description:
      "Image Gallery created with react Firebase and Css grid. You can upload images of your choice to the gallery and it will be added to the firestore database and show up at the end of the gallery.",
    stack: 'firebase, react, CSS-Grid',
    website: 'https://gallery-pi-ten.vercel.app/',
    code: 'https://github.com/luka0009/gallery'
  },
  {
    id: 16,
    image: rtk,
    name: "Advnaced RTK Query Project",
    description:
      "Advanced data fetching + CRUD with Redux toolkit and Redux toolkit query, There is a list of people (user can add user by clicking on a button and it will be added autoamtically to the database and also to the list using rtk query, users can also delete anyone from the list), each of them has album and each album has pictures, similar CRUD operation can be done on each of them, users can add album by clicking on add album button and it will fetch data from database, aslo they can delete those albums or photos inside each album",
    stack: 'React, Redux-toolkit, Tailwind CSS',
    website: isNotDeployed,
    code: 'https://github.com/luka0009/RTK-Query'
  },
];
