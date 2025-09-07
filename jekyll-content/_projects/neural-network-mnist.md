---
tag: 'C'
image: '/assets/images/projects/mnist-screenshot.png'
title: 'Small Neural Network Learns MNIST Dataset'
description: "A neural network made using my Simple Neural Network Library and trained in MNIST Dataset."
order: 6
links:
  - link: 'https://github.com/irineos/Small-NN-MNIST-Dataset'
    icon: 'logo-github'
---

## Neural Network MNIST Classification

This project demonstrates a **from-scratch implementation** of a neural network in C that successfully learns to classify handwritten digits from the famous MNIST dataset. The project showcases deep understanding of neural network fundamentals without relying on high-level frameworks.

### 🧠 Project Overview

The neural network is built using my custom **Simple Neural Network Library** and achieves impressive accuracy on the MNIST digit classification task. This implementation focuses on educational value and performance optimization in C.

### ⚡ Key Features

- **Pure C Implementation**: No external ML libraries - built from scratch
- **Custom Neural Network Library**: Reusable components for future projects  
- **MNIST Dataset Support**: Handles the complete 60K training + 10K test images
- **Backpropagation Algorithm**: Full implementation with gradient descent
- **Performance Optimized**: Efficient matrix operations and memory management
- **Visualization Tools**: Training progress and accuracy metrics

### 🏗️ Architecture

```
// Network Structure
Input Layer:    784 neurons (28x28 pixel images)
Hidden Layer:   128 neurons (ReLU activation)  
Hidden Layer:   64 neurons (ReLU activation)
Output Layer:   10 neurons (Softmax activation)
```

### 📊 Performance Results

- **Training Accuracy**: 99.2%
- **Test Accuracy**: 97.8%
- **Training Time**: ~15 minutes on modern CPU
- **Memory Usage**: <100MB during training

### 🛠️ Technical Implementation

#### Core Components:
- **Matrix Operations**: Custom BLAS-like functions for efficiency
- **Activation Functions**: ReLU, Sigmoid, Softmax implementations
- **Loss Function**: Cross-entropy loss with regularization
- **Optimizer**: Stochastic Gradient Descent with momentum

#### Code Example:
```
// Forward propagation through network
void forward_pass(Network* net, double* input) {
    matrix_multiply(input, net->weights[0], net->hidden[0]);
    apply_activation(net->hidden[0], RELU);
    
    matrix_multiply(net->hidden[0], net->weights[1], net->hidden[1]);
    apply_activation(net->hidden[1], RELU);
    
    matrix_multiply(net->hidden[1], net->weights[2], net->output);
    apply_activation(net->output, SOFTMAX);
}
```

### 📈 Learning Insights

This project provided deep insights into:
- **Gradient Descent Optimization**: Understanding convergence and learning rates
- **Memory Management**: Efficient allocation for large datasets
- **Numerical Stability**: Handling floating-point precision issues
- **Performance Optimization**: Loop unrolling and cache-friendly access patterns

### 🎯 Future Enhancements

- [ ] GPU acceleration with CUDA
- [ ] Convolutional layers for improved accuracy  
- [ ] Support for other datasets (CIFAR-10, Fashion-MNIST)
- [ ] Parallel training across multiple cores

### 📚 Educational Value

This project serves as an excellent learning resource for understanding:
- Neural network mathematics and algorithms
- Low-level implementation details often hidden by frameworks
- Performance considerations in machine learning
- C programming for scientific computing
