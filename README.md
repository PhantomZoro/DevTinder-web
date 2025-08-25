# DevTinder

- Create a Vite + React application
- Remove unecessary files and create Hello World 
- Configure and install tailwind css 
- Prepare the index.css and tailwind.config.js
- Daisy UI gives a lot of components with tailwind css
- npm install daisy UI and then in tailwind.config.js keep this [require('daisyui')]
- Create a navbar separate component file and then import in app.jsx

- Install react router dom (All routing will be done in app.jsx)
- After you define the children routes you have to define the Outlet in the body so that it renders the children components
- Import the outlet from react router dom in your body 
- Create a footer and add it in the body directly without route like the header 
- Create a login page  
- Install axios
- CORS - install cors in backend, add middleware in app.js with config: origin:frontend URL and credentials:true
- Whenever you are making API, pass { withCredentials: true }
- This is required to extract the token into the browser application and cookies tab 
- Install Redux Toolkit and react-redux
- Configure store => Provide the store to your application => createSlice => addReducer to your main store
- Add redux dev tools in chrome 
- Login and see if your data is coming properly in store 
- Navbar should update as soon as user logs in 
- Refactor our code to add constants file + create a components folder 


- COMPONENT DESIGN 

- Body
    Navbar
    Route = / => Feed
    Route = /login => Login
    Route = /connections => Connections
    Route = /profile => Profile
