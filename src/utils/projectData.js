import voeskaImage from "../assets/voeskaImage.jpg";
import nnLibraryImage from "../assets/nnlibrary.png";

const projectData = {
    projects: [
        {
            tag: 'Flutter/Dart',
            image: voeskaImage,
            title: 'Voeska Mobile App',
            description: "A gamification mobile app, that is part of Voeska Project.",
            links: [
                {link:'https://www.voeska.com', icon: 'logo-github'}
            ]
        },
        {
            tag: 'C',
            image: 'https://github.com/irineos/Small-NN-Learns-MNIST-Dataset/raw/main/testMNISTScreenshot.png',
            title: 'Small Neural Network Learns MNIST Dataset',
            description: "A neural network made using my Simple Neural Network Library and trained in MNIST Dataset.",
            links: [
                {link:'https://github.com/irineos/Small-NN-MNIST-Dataset', icon: 'logo-github'}
            ]
        },
        {
            tag: 'Java',
            image: 'https://github.com/irineos/Beginner-Weather-App/raw/main/weatherAppScreenshot.png',
            title: 'Simple Weather App',
            description: "A Simple JavaFX Weather App that uses OpenWeatherMap's API",
            links: [
                {link:'https://github.com/irineos/OpenWeatherMap-Weather-App', icon: 'logo-github'}
            ]
        },
        {
            tag: 'C',
            image: 'https://github.com/irineos/Rock-Scissors-Paper-Board-Game/raw/main/gameplay.png',
            title: 'Rock-Scissors-Paper Board Game(OpenGL/ GLUT)',
            description: "A Board Game that combines 'Rock Scissors Paper' and 'Connect 4' game rules",
            links: [
                {link:'https://github.com/irineos/Rock-Scissors-Paper-Board-Game', icon: 'logo-github'}
            ]
        },
        {
            tag: 'Java',
            image: 'https://github.com/irineos/SimpleText2SpeechEditor/raw/main/packageDiagram.png',
            title: 'Text To Speech Editor',
            description: "A Simple Editor Application that can turn text into audio",
            links: [
                {link:'https://github.com/irineos/SimpleText2SpeechEditor', icon: 'logo-github'}
            ]
        },
        {
            tag: 'Python',
            image: 'https://github.com/irineos/PiDay2019/raw/main/mc_piday2019.png',
            title: 'Pi Day 2019',
            description: "Estimating Pi using the Monte Carlo Method",
            links: [
                {link:'https://github.com/irineos/PiDay2019', icon: 'logo-github'}
            ]
        },
        {
            tag: 'C',
            image: nnLibraryImage,
            title: 'Primitive Neural Network library',
            description: "A simple neural network implementation in pure C",
            links: [
                {link:'https://github.com/irineos/simple-Neural-Network-library-in-C', icon: 'logo-github'}
            ]
        }
    ]
}

export default projectData;