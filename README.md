# Tic-Tac-Toe

A modern, interactive Tic-Tac-Toe game built with React, TypeScript, and TailwindCSS. Play against a friend or challenge AI opponents with different difficulty levels.

## Features

- **Player vs Player**: Classic two-player mode on the same device
- **Player vs AI**: Two difficulty levels:
  - **Beginner**: Random move AI for casual play
  - **Hardcore**: Minimax algorithm AI that plays optimally
- **Score Tracking**: Persistent score tracking across game modes
- **Responsive Design**: Clean, modern UI built with TailwindCSS
- **Type-Safe**: Full TypeScript implementation

## Tech Stack

- **React 19.2.0**: UI framework
- **TypeScript 5.9.3**: Type safety and developer experience
- **React Router 7.9.6**: Client-side routing
- **Jotai 2.15.1**: Atomic state management with Immer integration
- **Tailwind CSS 4.1.17**: Utility-first styling
- **Vite 7.2.2**: Fast build tool and dev server
- **Biome 2.3.0**: Code formatting and linting

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/AhmedOsman101/tic-tac-toe.git

# Navigate to project directory
cd tic-tac-toe

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Run type checking
pnpm typecheck

# Lint code
pnpm lint

# Format code
pnpm format
```

### Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Game.tsx        # Main game orchestrator
│   ├── Board.tsx       # Game board grid
│   ├── Cell.tsx        # Individual cell component
│   ├── MainMenu.tsx    # Game mode selection
│   ├── ChooseDifficulty.tsx  # AI difficulty selection
│   ├── StatsBar.tsx    # Score display
│   └── DisplayTurns.tsx      # Turn indicator
├── lib/
│   ├── gameLogic.ts    # Pure game logic functions
│   ├── atoms.ts        # Jotai state atoms
│   └── types.ts        # TypeScript type definitions
├── hooks/
│   └── use-game-actions.ts   # State management actions
└── App.tsx             # Route definitions
```

## Architecture

The application follows a layered architecture with clear separation of concerns:

- **UI Layer**: React components handle rendering and user interaction
- **State Layer**: Jotai atoms manage application state with Immer for immutability
- **Logic Layer**: Pure functions implement game rules independently of UI
- **Routing Layer**: React Router handles navigation between game modes

### Game Logic

The core game logic is implemented as pure functions in `gameLogic.ts`:

- `makeMove()`: Validates and applies moves to the board
- `isWinner()`: Checks for winning combinations
- `isDraw()`: Detects stalemate conditions
- `miniMaxMove()`: Implements optimal AI strategy using minimax algorithm
- `randomMove()`: Implements random AI for beginner difficulty

## Routes

- `/` - Main menu (game mode selection)
- `/pvp` - Player vs Player mode
- `/ai` - AI difficulty selection
- `/ai/beginner` - Play against random AI
- `/ai/advanced` - Play against minimax AI

## Code Quality

The project uses several tools to maintain code quality:

- **TypeScript**: Static type checking
- **Biome**: Fast linting and formatting
- **Husky**: Pre-commit hooks for quality gates

## License

This project is licensed under the [MIT license](LICENSE). The full text is available in the [LICENSE](LICENSE) file.
