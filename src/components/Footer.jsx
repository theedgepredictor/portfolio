import React from 'react';

function Footer() {
  return (
    <footer className="bg-indigo-600 text-white static bottom-0 w-full">
      <div className="">
        <div className="grid grid-cols-2 items-center">
          {/* Privacy Policy */}
          <div className='text-center'>
              <h2 className="text-md sm:text-xl font-semibold text-gray-200 uppercase ">Social</h2>
              <ul className="text-md sm:text-md text-gray-300">
                <li className="">
                <a href="https://www.linkedin.com/in/charlessergeant/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin social-icon discord-icon hover:text-white"></i>
                </a>
                </li>
                <li>
                  <a href="https://github.com/CharlieSergeant" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github social-icon patreon-icon hover:text-white"></i>
                  </a>
                </li>
              </ul>
            </div>

          {/* Contact Info */}

          <div className='text-center'>
              <h2 className="text-md sm:text-xl font-semibold text-gray-200 uppercase ">Contact Info</h2>
              <ul className="text-md sm:text-md text-gray-300">
              <li>
                <a className="hover:text-white" href="/about/">About</a>
                </li>
                <li className="">
                charlesdsgt@gmail.com
                </li>
      
              </ul>
            </div>

        </div>

        <hr className="my-2 border-gray-200 " />
        <div className="grid grid-cols-1 px-2 sm:grid-cols-2 sm:pb-0">

      {/* Social Media Links */}
    <div className="text-center text-sm space-x-4 pb-1 sm:text-right sm:order-2 sm:pr-2 sm:text-md text-gray-400  ">
    <a className="hover:text-white" href="/privacy-policy">Privacy Policy</a>

    <a className="hover:text-white" href="/terms-of-service/">Terms of Use</a>
    </div>
          {/* Copyright */}
          <div className="text-center text-xs pb-1 sm:text-left sm:order-1 sm:text-sm sm:pl-2 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Charles Sergeant</p>
        </div>

      

  </div>
  </div>
    </footer>
  );
}

export default Footer;