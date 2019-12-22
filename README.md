# book-search
google book search engine - full stack
## Link to Deployed application: https://calm-dawn-69453.herokuapp.com
## Overview:
A full stack application that lets user search for books through google search and lets users save results into mongoose database and later delete the record if they so choose.
## Developer Notes:
first run `npm install` in the terminal to install all the dependencies
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
    - Heroku add-ons:
        - MongoDB
        - mLab
        
## Things learned:
- How to integrate knowledge from gifTastic project and translate documentations for multiple npm modules to work with JSX instead of Jquery.
- 

## Stretch Goal(s):
- Use React routing and socket.io to create a notification or a component that triggers whenever a user saves an book. Your message should include the title of the saved book.


    - Say you have multiple browsers open, each one visiting your site. If you save an book in one browser, then all of your browsers should notify you that a new book was saved.
    - Use Socket.io NPM package
- Add number of API results in a badge using a component
- Add autocomplete materialize css for the search input- [https://materializecss.com/autocomplete.html](https://materializecss.com/autocomplete.html)