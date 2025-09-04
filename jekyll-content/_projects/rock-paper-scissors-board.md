---
tag: 'C'
image: '/assets/images/projects/rock-paper-scissors.png'
title: 'Rock-Scissors-Paper Board Game(OpenGL/ GLUT)'
description: "A Board Game that combines 'Rock Scissors Paper' and 'Connect 4' game rules"
order: 4
links:
  - link: 'https://github.com/irineos/Rock-Scissors-Paper-Board-Game'
    icon: 'logo-github'
---

## Rock-Scissors-Paper Board Game

An innovative board game that creatively combines the classic "Rock, Paper, Scissors" mechanics with "Connect 4" strategy. Built using OpenGL and GLUT for cross-platform 3D graphics rendering.

### 🎮 Game Concept

This unique game merges two beloved games:
- **Rock, Paper, Scissors**: Classic hand game mechanics
- **Connect 4**: Strategic board placement and winning conditions

Players must strategically place their pieces (rock, paper, or scissors) on a board while following both games' rules to achieve victory.

### 🛠️ Technologies Used

- **C Programming**: Core game logic and implementation
- **OpenGL**: 3D graphics rendering and visualization
- **GLUT**: Window management and user input handling
- **Cross-platform**: Compatible with Windows, macOS, and Linux

### 🏗️ Technical Implementation

```
// Core game structures
typedef enum {
    ROCK,
    PAPER,
    SCISSORS,
    EMPTY
} PieceType;

typedef struct {
    PieceType board[ROWS][COLS];
    int currentPlayer;
    GameState state;
} GameBoard;
```

### 🎯 Key Features

- **3D Visualization**: OpenGL-rendered game board and pieces
- **Interactive Gameplay**: Mouse and keyboard controls
- **Game Logic**: Combined rule validation for both game types
- **Win Detection**: Multiple winning conditions based on both games
- **Visual Effects**: Smooth animations and piece placement effects

### 🎲 Game Rules

1. **Placement Phase**: Players take turns placing rock, paper, or scissors pieces
2. **Battle Resolution**: Adjacent pieces battle using rock-paper-scissors rules
3. **Connect 4 Victory**: Align 4 pieces in a row (horizontal, vertical, or diagonal)
4. **Domination Victory**: Control the majority of the board through battles

### 🖥️ Graphics Features

- **3D Board Rendering**: Perspective view of the game board
- **Piece Models**: Distinct 3D models for rock, paper, and scissors
- **Lighting Effects**: Dynamic lighting to enhance visual appeal
- **Smooth Animations**: Piece placement and battle animations
- **Camera Controls**: Multiple viewing angles and zoom levels

### 🏆 Technical Achievements

- **Real-time 3D Rendering**: Efficient OpenGL implementation
- **Cross-platform Compatibility**: GLUT ensures portability
- **Memory Management**: Efficient C memory handling
- **Game State Management**: Clean separation of game logic and rendering
