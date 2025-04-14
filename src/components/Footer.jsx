const Footer = () => {
    return (
      <footer className="bg-[#0f0c29] text-white py-4 px-6 border-t border-purple-700">
        {/* Footer content */}
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          {/* Name and Copyright */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-purple-300 mb-1">Arav Mahind</h2>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
  
          {/* Social Icons */}
          <div className="flex gap-8 text-purple-300 text-2xl pb-2">
            <a 
              href="https://github.com/aravmahind" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition hover:scale-110"
              aria-label="Visit GitHub Profile"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/arav-mahind-7602a7281/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition hover:scale-110"
              aria-label="Visit LinkedIn Profile"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
            <a 
              href="https://twitter.com/aravmahind" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition hover:scale-110"
              aria-label="Visit Twitter Profile"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a 
              href="https://instagram.com/_arav_mahind_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition hover:scale-110"
              aria-label="Visit Instagram Profile"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  