import cakeImg from '../images/cake.png'
import drinkImg from '../images/drink.png'
import userImg from '../images/user.png'
import ourskyImg from '../images/oursky.png'
import restCountries from '../images/restCountries.png'
import userManage from '../images/userManage.jpg'
import gulp4 from '../images/gulp4.png'

export const portfolio = [
    {
        id: 5,
        title: 'REST Countries API with color theme switcher',
        desc: '',
        imageSrc: restCountries,
        videoSrc: null,
        demoUrl: 'https://secret-cake.netlify.app/',
        tags: ['react', 'dark mode', 'search', 'sort'],
    },
    {
        id: 1,
        title: 'E-Commerce Website - Secret Cake',
        desc:
            'A bakery website that can create your own custom greeting cards.',
        imageSrc: cakeImg,
        videoSrc: null,
        demoUrl: 'https://secret-cake.netlify.app/',
        tags: ['react', 'canvas', 'shopping cart'],
    },
    {
        id: 2,
        title: 'Users List App',
        desc:
            'feature: signup, login, logout, edit user information, upload profile picture, delete user.',
        imageSrc: userImg,
        videoSrc: null,
        demoUrl: 'https://user-login-signup-app.netlify.app',
        tags: ['react', 'CRUD', 'login', 'signup', 'jwt'],
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
    {
        id: 6,
        title: 'CRUD Data Table without framework',
        desc: '',
        imageSrc: userManage,
        videoSrc: null,
        demoUrl: 'https://iris1114.github.io/javascript_CRUD-data-table/',
        tags: ['javascript', 'html', 'css'],
    },
    {
        id: 7,
        title: 'Gulp 4 demo',
        desc: '',
        imageSrc: gulp4,
        videoSrc: null,
        demoUrl: 'https://iris1114.github.io/javascript_CRUD-data-table/',
        tags: ['gulp', 'npm'],
    },
]
