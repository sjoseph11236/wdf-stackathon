# WDF STACKATHON:

## SET-UP SERVER:
  - Create a directory: `mkdir directory_name`.
  - `cd directory_name`.
  - Open text editor with `code .`
  - `git init`.
  - `npm init`.
  - Set main to server.js.
  - Create a .gitignore file `touch .gitignore`.
  - Write node_modules in the .gitignore file.
  - Install express and concurrently: `npm i express concrurrently`.
  - Install nodemon `npm i nodemon --save-dev`.
  - Install morgan `npm i morgan`.

  - In the package.json add start in scripts with "node server.js".
  - Also add server in scripts "nodemon server.js".
  - In the terminal create server.js: `touch server.js`


## SET-UP ClIENT: 
  - In main directory run the command `create-react-app client` 
  - In the client folder package.json add a proxy below scripts with url for the server.
