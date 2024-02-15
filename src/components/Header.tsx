// import logo from '../../public/images/logo.svg';
import { Logofylo } from './Logofylo';

export const Header = () => {
  return (
    <div className="main-div">
      <header>
          <div>
            {/* <img src={logo} alt="" /> */}
            <Logofylo />
          </div>
          <ul>
              <li>Features</li>
              <li>Team</li>
              <li>Sign In</li>
          </ul>
      </header>
    </div>
  )
}
