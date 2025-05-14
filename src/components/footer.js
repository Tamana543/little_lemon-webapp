import { Link } from "react-router-dom";

export default function Footer(){
return (
     <footer>
          <menu>
               <li className="img-footer">
                    <img
                    src={require("../assets/footer-logo.png")}
                    alt="Logo">

                    </img>
               </li>

          </menu>
          <li>
           <h2 className="footer-header">Contact</h2>
          <ul className="footer-links">
            <a
              href="mailto: tamanafarzami33@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              tamanafarzami33@gmail.com
            </a>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a
              href="https://github.com/Tamana543"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://t.me/tamana_farzami"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
            <a
              href="https://discordapp.com/users/1367338890767237161"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
          </ul>    
          </li>
     </footer>
)
}