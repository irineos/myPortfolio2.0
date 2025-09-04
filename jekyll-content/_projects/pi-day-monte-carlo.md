---
tag: 'Python'
image: '/assets/images/projects/pi-day.png'
title: 'Pi Day 2019'
description: "Estimating Pi using the Monte Carlo Method"
order: 6
links:
  - link: 'https://github.com/irineos/PiDay2019'
    icon: 'logo-github'
---

## Pi Day 2019 - Monte Carlo Estimation

A Python implementation of the Monte Carlo method for estimating the mathematical constant π (pi). This project was created to celebrate Pi Day 2019 and demonstrates the power of statistical simulation in mathematical computation.

### 🎯 Project Overview

The Monte Carlo method uses random sampling to solve mathematical problems that might be deterministic in principle. In this case, we estimate π by randomly throwing "darts" at a square containing a quarter circle and calculating the ratio of darts that land inside the circle.

### 🔢 Mathematical Concept

The algorithm is based on the geometric relationship:
- **Square Area**: 1 (unit square)
- **Quarter Circle Area**: π/4
- **Ratio**: (Points in circle) / (Total points) ≈ π/4
- **Therefore**: π ≈ 4 × (Points in circle) / (Total points)

### 🛠️ Technologies Used

- **Python 3**: Core programming language
- **NumPy**: Numerical computations and random number generation
- **Matplotlib**: Data visualization and plotting
- **Statistics**: Convergence analysis and error estimation

### 📊 Visualization Features

```
# Core Monte Carlo simulation
def estimate_pi(num_points):
    inside_circle = 0
    for _ in range(num_points):
        x, y = random.uniform(-1, 1), random.uniform(-1, 1)
        if x*x + y*y <= 1:
            inside_circle += 1
    return 4 * inside_circle / num_points
```

### 🎨 Visual Components

- **Real-time Plotting**: Watch the estimation improve as points are added
- **Convergence Graph**: Track how the estimate approaches π over iterations
- **Scatter Plot**: Visual representation of random points and circle boundary
- **Error Analysis**: Statistical analysis of estimation accuracy

### 📈 Performance Analysis

- **Convergence Rate**: Analysis of how quickly the estimate approaches π
- **Error Bounds**: Statistical confidence intervals
- **Sample Size Impact**: Effect of increasing the number of random points
- **Computational Efficiency**: Runtime analysis for different sample sizes

### 🎲 Algorithm Features

- **Random Number Generation**: High-quality pseudo-random sampling
- **Parallel Processing**: Multi-threaded implementation for faster computation
- **Memory Optimization**: Efficient handling of large sample sizes
- **Progress Tracking**: Real-time updates on estimation progress

### 📊 Results and Accuracy

- **10,000 points**: Typically accurate to 2 decimal places
- **1,000,000 points**: Usually accurate to 3-4 decimal places  
- **100,000,000 points**: Can achieve 4-5 decimal place accuracy
- **Statistical Analysis**: Confidence intervals and standard deviation

### 🔬 Educational Value

This project demonstrates:
- **Probability Theory**: Law of large numbers in action
- **Statistical Simulation**: Monte Carlo methods in practice
- **Numerical Analysis**: Approximation techniques and error analysis
- **Python Programming**: Efficient numerical computing practices

### 🎉 Pi Day Celebration

Created specifically for Pi Day (March 14th, 2019), this project celebrates the beauty of mathematics through:
- Interactive visualization of a fundamental mathematical constant
- Demonstration of how randomness can solve deterministic problems
- Educational tool for understanding statistical methods
