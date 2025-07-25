# Pokémon Explorer

A modern, visually stunning Pokémon website built with React, featuring a neomorphic UI, animated gradient background, glowing card effects, and a detailed Pokémon modal. The app fetches data from the [Pokémon API](https://pokeapi.co/) to display the first 151 Pokémon, allows searching by name, and shows detailed information when a Pokémon is clicked.

## Features

- **Neomorphic Design**: Semi-transparent cards, search bar, and modal with soft shadows and a glass-like effect for a modern, futuristic look.
- **Animated Gradient Background**: A smooth, flowing gradient background that cycles through vibrant colors (purple, cyan, red, green) over 15 seconds.
- **Glowing Card Animations**: Pokémon cards feature a periodic blue glow effect and hover interactions for a dynamic experience.
- **Pokémon Details Modal**: Click a card to view detailed information, including high-quality artwork, name, types, stats, and abilities, presented in a neomorphic modal with slide-in animation.
- **Search Functionality**: Real-time search to filter Pokémon by name.
- **Responsive Design**: Optimized for mobile (480px and below), tablet (768px and below), and desktop screens with a flexible grid layout (1–4 columns).
- **Smooth Animations**: Transitions for hover effects, modal appearance, and background gradients enhance the user experience.

## Technologies Used

- **React**: JavaScript library for building the user interface and managing state.
- **Pokémon API**: Fetches data for the first 151 Pokémon, including names, images, types, stats, and abilities.
- **Vanilla CSS**: Custom styles for neomorphic design, animations, and responsive layout (no CSS frameworks like Tailwind CSS).
- **Vite**: Build tool for fast development and production bundling (compatible with other setups like Create React App).

## Project Structure

```
pokemon-explorer/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.jsx           # Main component with search, grid, and modal
│   ├── PokemonCard.jsx   # Component for individual Pokémon cards
│   ├── index.css        # Custom CSS for neomorphic styling and animations
│   └── main.jsx         # Entry point for React app
├── package.json         # Project dependencies and scripts
└── README.md            # This file
```

## Setup Instructions

### Prerequisites
- **Node.js** (v16 or higher) and **npm** installed.
- A modern web browser.

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/pokemon-explorer.git
   cd pokemon-explorer
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   This installs `react` and `react-dom` as specified in `package.json`.

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   - For Vite: Opens at `http://localhost:5173` (or another port if configured).
   - For Create React App (if used): Run `npm start` to open at `http://localhost:3000`.

### Usage
- **Browse Pokémon**: View a grid of the first 151 Pokémon fetched from the Pokémon API.
- **Search**: Type in the search bar to filter Pokémon by name in real-time.
- **View Details**: Click a Pokémon card to open a modal with detailed information (image, types, stats, abilities). Close the modal by clicking the "×" button or outside the modal.
- **Responsive Design**: The app adapts to different screen sizes for a seamless experience on mobile, tablet, and desktop.

## How It Works

1. **Data Fetching**:
   - The app uses the Pokémon API (`https://pokeapi.co/api/v2/pokemon?limit=151`) to fetch data for the first 151 Pokémon.
   - Each Pokémon’s details (image, types, stats, abilities) are retrieved via individual API calls.

2. **Search Functionality**:
   - A stateful search input filters the Pokémon list in real-time based on the entered name.
   - Filtering is case-insensitive and updates the grid instantly.

3. **UI Components**:
   - `App.jsx`: Manages the main layout, search, Pokémon grid, and modal. Fetches data and handles state.
   - `PokemonCard.jsx`: Renders individual Pokémon cards with images, names, and types. Clicking a card triggers the modal.
   - `index.css`: Defines neomorphic styles, gradient background animation, glowing card effects, and modal animations.

4. **Visual Design**:
   - **Neomorphism**: Cards, search bar, and modal use semi-transparent backgrounds (`backdrop-filter: blur`), soft shadows, and a glass-like effect.
   - **Animations**: A 15-second gradient background cycle and 3-second glowing effect on cards create a dynamic feel.
   - **Modal**: Displays detailed Pokémon info with a slide-in animation and neomorphic styling.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Pokémon API](https://pokeapi.co/) for providing Pokémon data.
- Inspired by the Pokémon franchise and modern UI design trends.