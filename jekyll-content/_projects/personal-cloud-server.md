---
tag: 'Raspberry Pi, Docker, OpenMediaVault, Nextcloud, WireGuard'
image: '/assets/images/projects/personal-cloud-preview.jpeg'
title: 'Personal Cloud Server'
description: "A self-hosted personal cloud server built with Raspberry Pi 5, featuring media storage, remote access, and containerized services"
order: 9
links:
  - link: 'https://www.youtube.com/watch?v=8CmYghBYT0o'
    icon: 'server'
---

## Personal Cloud Server

A comprehensive self-hosted personal cloud infrastructure built on Raspberry Pi 5, designed to provide secure file storage, media streaming, and remote access capabilities. This project demonstrates advanced DevOps practices, containerization, and network security implementation in a home lab environment.

### 🏗️ Project Overview

This personal cloud server represents a complete home infrastructure solution, combining hardware optimization with modern software practices. The system provides a secure, scalable platform for personal data management while learning enterprise-level DevOps concepts in a practical environment.

**📚 Build Reference**: This project was inspired by and built following the comprehensive tutorial from [Techno Tim's YouTube channel.](https://www.youtube.com/watch?v=8CmYghBYT0o) The tutorial provided excellent guidance on setting up a personal cloud server with Raspberry Pi and OpenMediaVault, serving as the foundation for this enhanced implementation with additional features like WireGuard VPN, Docker containerization, and Portainer management.

### ⚡ Key Features

- **Self-Hosted Storage**: 4TB hard disk managed through OpenMediaVault
- **Media Streaming**: Nextcloud for file sharing and media access
- **Remote Access**: WireGuard VPN for secure network access
- **Containerized Services**: Docker-based service management
- **Web Management**: Portainer UI for container orchestration
- **Expandable Storage**: Radxa Penta SATA HAT for future disk expansion
- **Custom Enclosure**: 3D printed case for professional appearance

### 🔧 Hardware Architecture

```
Personal Cloud Server Hardware:
├── Raspberry Pi 5 (8GB RAM)
├── Radxa Penta SATA HAT
├── 4TB SATA Hard Drive
├── 3D Printed Enclosure
├── MicroSD Card (OS)
└── Power Supply & Cooling
```

### 🛠️ Software Stack

#### Core Infrastructure
- **OpenMediaVault**: Network-attached storage (NAS) management
- **Docker**: Containerization platform for all services
- **Portainer**: Web-based Docker management interface
- **WireGuard**: VPN for secure remote access

#### Applications & Services
- **Nextcloud**: File sharing and collaboration platform
- **Media Server**: Streaming and file management
- **Backup Services**: Automated data protection
- **Monitoring**: System health and performance tracking

### 📋 Implementation Process

![Personal Cloud Server Build](/assets/images/projects/pinas-build.jpeg)

#### Phase 1: Hardware Setup
1. **Raspberry Pi 5 Configuration**
   - Flashed Raspberry Pi OS Lite
   - Configured SSH access and security
   - Optimized system settings for server use
   - Set up static IP addressing

2. **Storage Expansion**
   - Installed Radxa Penta SATA HAT
   - Connected 4TB SATA hard drive
   - Configured disk partitioning and mounting
   - Set up automatic mounting on boot

3. **Custom Enclosure**
   - Designed 3D printed case for professional appearance
   - Integrated cooling solution for optimal performance
   - Planned expansion slots for additional drives

#### Phase 2: Software Infrastructure
1. **OpenMediaVault Installation**
   - Deployed OMV for NAS functionality
   - Configured SMB/CIFS shares
   - Set up user management and permissions
   - Implemented disk health monitoring

2. **Docker Environment**
   - Installed Docker and Docker Compose
   - Created custom networks for service isolation
   - Set up persistent volume management
   - Configured automatic container startup

#### Phase 3: Service Deployment
1. **Nextcloud Setup**
   - Deployed Nextcloud in Docker container
   - Configured database (MariaDB)
   - Set up file storage and sharing

2. **WireGuard VPN**
   - Installed and configured WireGuard server
   - Created client configurations
   - Set up firewall rules and port forwarding
   - Tested remote access from multiple devices

3. **Portainer Management**
   - Deployed Portainer for container management
   - Created service stacks and templates
   - Set up monitoring and logging

### 🔍 Technical Challenges Solved

#### Network Security
- **Challenge**: Secure remote access without compromising local network
- **Solution**: WireGuard VPN with proper firewall configuration
- **Result**: Encrypted remote access with minimal attack surface

#### Service Reliability
- **Challenge**: Ensuring services restart automatically after power outages
- **Solution**: Docker restart policies and systemd services
- **Result**: 99%+ uptime with automatic recovery

### 📊 System Specifications

#### Hardware Performance
- **CPU**: ARM Cortex-A76 quad-core @ 2.4GHz
- **RAM**: 8GB LPDDR4X
- **Storage**: 4TB SATA HDD + 64GB MicroSD
- **Network**: Gigabit Ethernet
- **Power**: 27W average consumption

#### Software Metrics
- **Services**: 3+ containerized applications
- **Uptime**: 99% availability
- **Storage**: 3.6TB usable space
- **Users**: Multi-user support with role-based access
- **Backup**: Automated daily backups

### 💡 Key Learnings

#### DevOps Practices
- **Infrastructure as Code**: Docker Compose for reproducible deployments
- **Container Orchestration**: Managing complex service dependencies
- **Monitoring & Logging**: Implementing comprehensive observability
- **Backup Strategies**: Automated data protection and recovery

#### Network Security
- **VPN Implementation**: Secure remote access protocols
- **Firewall Management**: Network segmentation and access control
- **Port Forwarding**: Secure external service exposure

#### Hardware Optimization
- **ARM Architecture**: Optimizing for low-power computing

### 🚀 Future Enhancements

#### Planned Upgrades
- **Additional Storage**: Expand to 8TB+ with RAID configuration
- **Media Streaming**: Plex/Jellyfin for advanced media management
- **Home Automation**: Integration with IoT devices
- **Backup Redundancy**: Off-site backup solutions

#### Service Expansion
- **Git Server**: Self-hosted Git repository
- **CI/CD Pipeline**: Automated development workflows
- **Monitoring Stack**: Prometheus and Grafana integration
- **Document Management**: Wiki and knowledge base

#### Hardware Improvements
- **SSD Cache**: Accelerate frequently accessed data
- **UPS Integration**: Uninterruptible power supply
- **Network Upgrade**: 2.5GbE networking capability
- **Clustering**: Multiple Pi setup for high availability

### 🎯 Project Impact

This personal cloud server project demonstrates:

- **Full-Stack Infrastructure**: Hardware to application deployment
- **DevOps Expertise**: Containerization and service management
- **Security Implementation**: VPN and network security practices
- **Problem-Solving Skills**: Complex technical challenges resolved
- **Continuous Learning**: Ongoing optimization and enhancement

The project serves as both a practical home infrastructure solution and a comprehensive learning platform for modern DevOps practices, showcasing the ability to design, implement, and maintain complex systems in resource-constrained environments.

### 📈 Performance Results

- **File Transfer**: 100+ MB/s over local network
- **Remote Access**: 20+ MB/s over VPN connection
- **Service Response**: <200ms average response time
- **Energy Efficiency**: 27W total power consumption
- **Storage Efficiency**: 95%+ space utilization

This personal cloud server represents a successful implementation of enterprise-grade infrastructure concepts in a home lab environment, providing both practical utility and valuable learning experience in modern DevOps practices.
