---
tag: 'Java'
image: '/assets/images/projects/weather-app-screenshot.png'
title: 'Simple Weather App'
description: "A Simple JavaFX Weather App that uses OpenWeatherMap's API"
order: 1
links:
  - link: 'https://github.com/irineos/OpenWeatherMap-Weather-App'
    icon: 'logo-github'
---

## Simple Weather Application

A clean and intuitive weather application built with JavaFX that provides real-time weather information using the OpenWeatherMap API. This project demonstrates modern Java GUI development and API integration.

### 🌤️ Key Features

- **Real-time Weather Data**: Current weather conditions and forecasts
- **Location Search**: Search weather by city name or coordinates
- **Clean UI**: Modern JavaFX interface with responsive design
- **API Integration**: Seamless integration with OpenWeatherMap API
- **Cross-platform**: Runs on Windows, macOS, and Linux

### 🛠️ Technologies Used

- **Java 11+**: Core programming language
- **JavaFX**: Modern UI framework for desktop applications
- **OpenWeatherMap API**: Weather data provider
- **JSON Processing**: For API response handling
- **Maven**: Build and dependency management

### 🏗️ Architecture

```
├── src/main/java/
│   ├── controllers/     # UI controllers
│   ├── models/         # Data models
│   ├── services/       # API service layer
│   └── utils/          # Helper utilities
├── src/main/resources/
│   └── fxml/           # UI layout files
└── pom.xml             # Maven configuration
```

### 🎯 Features Implemented

- **Current Weather Display**: Temperature, humidity, pressure, wind speed
- **5-Day Forecast**: Extended weather predictions
- **Search Functionality**: Find weather for any city worldwide
- **Unit Conversion**: Celsius/Fahrenheit temperature switching
- **Error Handling**: Graceful handling of API errors and network issues

### 📱 User Interface

The application features a clean, modern interface with:
- Intuitive search functionality
- Clear weather information display
- Responsive layout that adapts to different screen sizes
- Visual weather icons and indicators

### 🔗 API Integration

Utilizes the OpenWeatherMap API for:
- Current weather conditions
- Weather forecasts
- Location-based weather data
- Multiple data formats and units
