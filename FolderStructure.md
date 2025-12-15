public
└── images
    ├── auth
    │   ├── loginimg.jpg
    │   └── signupimg.png
    │
    ├── brand
    │   ├── logo.png
    │   └── favicon.ico
    │
    ├── products
    │   ├── cat1.png
    │   ├── cat2.png
    │   ├── cat3.png
    │   ├── 2.png
    │   ├── 2.svg
    │   ├── 2-Photoroom.png
    │   ├── 22_001.png
    │   ├── 22_001.svg
    │   ├── 22_001-Photoroom.png
    │   └── product-placeholder.svg
    │
    └── ui
        ├── 01.svg
        ├── 03.png
        ├── 03.svg
        ├── avatar-placeholder.svg
        ├── bg.jpg
        ├── floating.svg
        └── hero_bg.jpg
src
├── App.jsx
├── main.jsx
├── App.css
├── index.css
│
├── components
│   ├── layout
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   └── ui
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── Preloader.jsx
│       └── Toast.jsx
│
├── features
│   ├── auth
│   │   ├── components
│   │   │   ├── AuthForm.jsx
│   │   │   └── AuthFormCard.jsx
│   │   ├── context
│   │   │   └── AuthContext.jsx
│   │   └── api
│   │       └── auth.api.js
│   │
│   ├── products
│   │   ├── components
│   │   │   └── ProductCard.jsx
│   │   └── data
│   │       └── products.js
│   │
│   └── cart
│       ├── components
│       └── context
│           └── CartContext.jsx
│
├── pages
│   ├── auth
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── ResetPassword.jsx
│   │   └── ResetConfirm.jsx
│   │
│   ├── shop
│   │   ├── Home.jsx
│   │   ├── CategoryPage.jsx
│   │   └── ProductPage.jsx
│   │
│   ├── user
│   │   ├── Profile.jsx
│   │   ├── Orders.jsx
│   │   └── Addresses.jsx
│   │
│   └── core
│       ├── About.jsx
│       ├── Contact.jsx
│       └── NotFound.jsx
│
├── services
│   └── axios.js
│
├── hooks
│   └── useScrollTop.js
│
└── utils
    ├── formatPrice.js
    └── constants.js
