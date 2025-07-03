# WonderLust

WonderLust is a dynamic travel platform where users can discover, list, and review unique travel destinations from around the world. Whether you're looking to share your favorite hidden gems or find inspiration for your next adventure, WonderLust makes it easy to connect with a community of explorers. With features like user authentication, interactive maps, and detailed reviews, WonderLust is your go-to site for travel inspiration and sharing experiences.

## Features
- User authentication (sign up, log in, password reset)
- Create, edit, and delete travel listings
- Add and manage reviews for listings
- Responsive UI with EJS templates
- Map integration for listings

## Project Structure
- `controllers/` – Route controllers for listings, reviews, and users
- `models/` – Mongoose models for listings, reviews, and users
- `routes/` – Express route definitions
- `views/` – EJS templates for UI
- `Public/` – Static assets (CSS, JS, images)
- `utility/` – Utility functions and error handling

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- MongoDB (local or Atlas)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Vansh-Raikwar/WonderLust.git
   cd WonderLust
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your MongoDB URI and any other required secrets.

### Running the App
```bash
npm start
```
The app will be available at `http://localhost:3000` by default.

## License
This project is licensed under the MIT License. 