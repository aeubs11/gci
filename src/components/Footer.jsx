import { Link } from "react-router-dom";

import { socialLinks } from "../constants";
import { phone } from "../assets/images";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2023 <strong>Garmyan Private Institut</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
          <a href='tel:0772 225 4546'>
            <img src={phone} className="w-6 h-6 object-contain"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
