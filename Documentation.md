<!---
This is React Project Based Learing From Scratch to Build React App not using create-react-app.
Whole package is installing and make a react app.
Thanks🙂...
-->

# Fisrt We Need to create some files

# GitHub

- Before We Move forward Create a new Repositry on GitHub And Push it{
  git init
  git branch -M main
    <!-- Add Folder To Git Respositry -->
  git add .
  git commit -m "First Commit"
  git remote add origin https://github.com/znabhi/FoodOrderingApp.git
  git push -u origin main
  }
- index.html
- App.js
- npm init (Some Question asked)
- .gitignore

# parcel {

- npm i -D parcel
- npx parcel index.html (run server )
- npm i react
- npm i react-dom
  }

<!--Ready to Create Components -->

- src/components/{my-component}
- npm i react-router-dom
- npm install @reduxjs/toolkit
- npm i react-redux

- 1. npm i -D @testing-library/react
- 2. npm install -d jest
- 3. npm install --save-dev babel-jest @babel/core @babel/preset-env
- 4. config babel.config.js (going jest docs)
- 5. create {.parcelrc}(Going parcel docs search jest)
  (If you use Babel create babel.config.js )
- 6. npx jest --init
- npm install --save-dev jest-environment-jsdom (install jsdom)
-  npm i -d @babel/preset-react { to make JSX work in test case}
- Iclude babel preset inside babel config
- npm i -D @testing-library/jest-dom






<!-- npx is mean execusion only -->
