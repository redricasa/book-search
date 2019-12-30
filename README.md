# book-search
google book search engine - full stack
## Link to Deployed application: https://calm-dawn-69453.herokuapp.com
## Overview:
A full stack application that lets user search for books through google search and lets users save results into mongoose database and later delete the record if they so choose.
## Developer Notes:
- First run `npm install` in the terminal to install all the dependencies.
- Use <React.Fragment> tag to encompass all the components in a return statement.
- refer to package.json for build commands(make sure you're in the right folder before doing `npm run build` the first time!)
- for `gh-pages` to show up under settings in github, one needs to npm run build  and then npm run deploy  after adding  to the scripts in `package.json`.
- After running `npm run build` in the client folder, run `serve -s build` (make sure you `npm install -g serve` if you don't have it globally installed). This way, you can look at what you built
## Technologies Used:
    - React JS
    - HTML
    - JavaScript
    - JSX
    - mongoose
    - materialise css
    - npm modules:
        - AXIOS
        - Express
        - if-env
        - mongoose
        - path
        - body-parser
        - gh-pages
        - nodemon
        - file-loader
        - concurrently
    - Heroku add-ons:
        - MongoDB
        - mLab
        
## Things learned:
- How to integrate knowledge from gifTastic project and translate documentations for multiple npm modules to work with JSX instead of Jquery.
- In order to see the react app locally, you have to have a build folder created and served

## Stretch Goal(s):
- Use React routing and socket.io to create a notification or a component that triggers whenever a user saves an book. Your message should include the title of the saved book.


    - Say you have multiple browsers open, each one visiting your site. If you save an book in one browser, then all of your browsers should notify you that a new book was saved.
    - Use Socket.io NPM package
- Add number of API results in a badge using a component
- Add autocomplete materialize css for the search input- [https://materializecss.com/autocomplete.html](https://materializecss.com/autocomplete.html)
- Create a Favicon.io! :D 