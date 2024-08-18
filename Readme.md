# Flipkart Clone - [DEMO](https://e-commerce-shivam3223s-projects.vercel.app/)

A simple e-commerce application clone of Flipkart built using React.js for the frontend and JSON Server for the backend. This project demonstrates how to create a basic shopping platform with product listings, cart functionality, and user management.

## Features

- Product listing with images, titles, prices, and discounts
- Add, update, and delete items in the cart
- Simulated backend with JSON Server for CRUD operations
- Responsive design using Chakra UI

## Technologies Used

- **Frontend:** React.js, Chakra UI
- **Backend:** JSON Server
- **Routing:** React Router
- **State Management:** React Context API
- **Development Tools:** npm, Node.js

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SHIVAM3223/E-Commerce.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd flipkart-clone
   ```

3. **Install dependencies:**

   ```bash
   npm install --force
   ```

4. **Setup JSON Server:**

   Make sure `json-server` is installed globally. If not, you can install it using:

   ```bash
   npm install -g json-server
   ```

5. **Run the React application:**

   ```bash
   npm start
   ```

   The application will start and be available at [http://localhost:3000](http://localhost:3000).

## Folder Structure

- `public/` - Static files and the HTML template
- `src/` - Source code for the React application
  - `components/` - Reusable React components
  - `Context/` - Context API for state management
  - `pages/` - Page components (e.g., CartPage, HomePage)
  - `styles/` - CSS and styling
- `server.js` - Local API for json data reciever
- `dbHome.json/` - JSON Server database file
- `package.json` - Project metadata and dependencies

## Configuration

- **JSON Server:** The JSON Server runs on `http://localhost:4000`. Ensure that the `carturl` and other API endpoints in the React code match this URL.
- **React Application:** Update the `CartPage` component and other relevant parts to handle API endpoints correctly.

## Usage

- **Homepage:** Displays product listings.
- **Cart Page:** Allows users to view and manage items in their cart.
- **Add/Delete Items:** Users can add items to the cart and update or remove them.

## Deployment

For deploying the application, you can use services like Vercel, Netlify, or GitHub Pages for the frontend, and you can deploy the JSON Server on services like Heroku or Railway if needed.

## Contributing

Feel free to fork the repository, make changes, and submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [JSON Server](https://github.com/typicode/json-server)

---

Feel free to customize this template according to your project’s details and your preferred deployment options!
