import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo_gabrielle.png"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"HiStaff"}>
                        <img alt={"Logo"} src={logo}/>
                    </Link>
                </div>

                <ul>
                    <li>
                        <a onClick={() => scrollTo('#quem-sou')}>Quem sou</a>
                    </li>
                    <li>
                        <a onClick={() => scrollTo('#terapia')}>Terapia</a>
                    </li>

                    <li>
                        <a onClick={() => scrollTo('#meu-cantinho')}>Meu Cantinho</a>
                    </li>
                    <li>
                    <div className={"get-started"}>
                        <a onClick={() => scrollTo('#vamos-conversar')}>Vamos conversar? </a>
                    </div>
                    </li>
                </ul>

                
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
