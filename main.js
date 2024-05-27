import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
    <div>
        <h1>Sokken Webshop</h1>
        <h2>Sokken voor ieder mens en weertype</h2>
        <p>Wie wil er nou niet warmpjes bij zitten</p>
        <h3>Sokken voor katten</h3>
    </div>
`

setupCounter(document.querySelector('#counter'))
