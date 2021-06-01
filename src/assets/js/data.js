import cakeImg from '../images/cake.png'
import drinkImg from '../images/drink.png'
import userImg from '../images/user.png'
import ourskyImg from '../images/oursky.png'
import cakeVideo from '../images/cake.mp4'

export const portfolio = [
    {
        id: 1,
        title: 'E-Commerce Website - Secret Cake',
        desc:
            'A bakery website that can create your own custom greeting cards.',
        imageSrc: cakeImg,
        videoSrc: cakeVideo,
        demoUrl: 'https://secret-cake.netlify.app/',
        tags: [
            'react',
            'konva',
            'styled-components',
            'canvas',
            'shopping cart',
        ],
    },
    {
        id: 2,
        title: 'Users List App',
        desc:
            'feature: signup, login, logout, edit user information, upload profile picture, delete user.',
        imageSrc: userImg,
        videoSrc: null,
        demoUrl: 'https://user-login-signup-app.netlify.app',
        tags: ['react', 'CRUD', 'styled-components', 'login', 'signup', 'jwt'],
    },
    {
        id: 3,
        title: 'Drink Order App',
        desc: 'simple record drink order.',
        imageSrc: drinkImg,
        videoSrc: null,
        demoUrl: 'https://drink-order-app.netlify.app/',
        tags: ['react', 'CRUD'],
    },
    {
        id: 4,
        title: 'Pure Css Oursky Homepage',
        desc: 'pure css oursky homepage',
        imageSrc: ourskyImg,
        videoSrc: null,
        demoUrl: 'https://iris1114.github.io/pure-css-oursky-homepage/',
        tags: ['sass', 'rwd', 'gulp'],
    },
]
