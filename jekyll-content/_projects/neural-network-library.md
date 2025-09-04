---
tag: 'C'
image: '/assets/images/projects/nnlibrary.png'
title: 'Primitive Neural Network library'
description: "A simple neural network implementation in pure C"
order: 7
links:
  - link: 'https://github.com/irineos/simple-Neural-Network-library-in-C'
    icon: 'logo-github'
---

## Primitive Neural Network Library

A lightweight, educational neural network library implemented from scratch in pure C. This library provides the fundamental building blocks for creating and training neural networks without any external dependencies, making it perfect for learning and understanding the core concepts of machine learning.

### 🧠 Library Overview

This library was designed as a foundational tool for understanding neural networks at a low level. It implements the essential components needed to build, train, and use feedforward neural networks, with a focus on clarity and educational value.

### ⚡ Core Features

- **Pure C Implementation**: No external dependencies, just standard C libraries
- **Modular Design**: Clean separation of components for easy understanding
- **Memory Management**: Efficient allocation and deallocation of network structures
- **Flexible Architecture**: Support for arbitrary network topologies
- **Training Algorithms**: Backpropagation with gradient descent
- **Activation Functions**: Multiple activation function implementations

### 🏗️ Library Architecture

```
// Core data structures
typedef struct {
    int num_layers;
    int* layer_sizes;
    double** weights;
    double** biases;
    double** activations;
} NeuralNetwork;

// Function prototypes
NeuralNetwork* create_network(int num_layers, int* layer_sizes);
void forward_propagation(NeuralNetwork* nn, double* input);
void backward_propagation(NeuralNetwork* nn, double* target);
void train_network(NeuralNetwork* nn, TrainingData* data, int epochs);
```

### 🔧 Implementation Details

#### Memory Management
- **Dynamic Allocation**: Efficient memory usage with malloc/free
- **Error Handling**: Robust error checking for memory operations
- **Cleanup Functions**: Proper deallocation to prevent memory leaks

#### Mathematical Operations
- **Matrix Operations**: Custom implementations for matrix multiplication
- **Activation Functions**: Sigmoid, ReLU, and Tanh implementations
- **Loss Functions**: Mean squared error and cross-entropy
- **Gradient Computation**: Analytical derivatives for backpropagation

### 📚 Educational Components

```
// Example: Creating a simple 3-layer network
int layers[] = {784, 128, 10};  // Input, Hidden, Output
NeuralNetwork* nn = create_network(3, layers);

// Training loop
for (int epoch = 0; epoch < 1000; epoch++) {
    for (int i = 0; i < training_size; i++) {
        forward_propagation(nn, training_data[i].input);
        backward_propagation(nn, training_data[i].target);
    }
}
```

### 🎯 Key Learning Objectives

- **Understanding Backpropagation**: Step-by-step implementation of the learning algorithm
- **Matrix Mathematics**: Practical application of linear algebra in programming
- **Memory Management**: Efficient handling of dynamic data structures in C
- **Numerical Stability**: Dealing with floating-point precision issues
- **Algorithm Optimization**: Performance considerations in numerical computing

### 📊 Supported Operations

#### Network Creation
- **Flexible Topology**: Define any number of layers and neurons
- **Weight Initialization**: Xavier/Glorot initialization for stable training
- **Bias Management**: Proper bias term handling for each layer

#### Training Features
- **Batch Processing**: Support for mini-batch gradient descent
- **Learning Rate Control**: Adjustable learning parameters
- **Convergence Monitoring**: Track training progress and loss reduction
- **Validation**: Separate validation set evaluation

### 🔬 Technical Specifications

- **Language**: ANSI C (C89/C90 compatible)
- **Dependencies**: None (uses only standard C library)
- **Memory Footprint**: Minimal, scales with network size
- **Performance**: Optimized for educational clarity over speed
- **Platform**: Cross-platform (Windows, Linux, macOS)

### 💡 Use Cases

- **Educational Tool**: Learn neural network fundamentals
- **Research Prototype**: Quick experimentation with network architectures
- **Embedded Systems**: Lightweight ML for resource-constrained environments
- **Algorithm Development**: Test new training algorithms or activation functions

### 🚀 Getting Started

{% raw %}
```
#include "neural_network.h"

int main() {
    // Define network architecture
    int topology[] = {2, 4, 1};  // XOR problem
    NeuralNetwork* nn = create_network(3, topology);
    
    // Train on XOR dataset
    double inputs[4][2] = {{0,0}, {0,1}, {1,0}, {1,1}};
    double targets[4][1] = {{0}, {1}, {1}, {0}};
    
    train_network(nn, inputs, targets, 4, 10000);
    
    // Test the trained network
    test_network(nn, inputs, targets, 4);
    
    destroy_network(nn);
    return 0;
}
```
{% endraw %}
