// components/Footer.tsx
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white p-8 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto grid gap-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Company Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">GameEon Studios</h2>
          <p className="text-white/60 text-base font-normal leading-tight break-words">
            402, Samarpan Complex,
            <br />
            Next to Mirador Hotel,
            <br />
            Opposite Solitaire Corporate Park,
            <br />
            Chakala, Andheri East,
            <br />
            Mumbai - 400059
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/gameeonstudios" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/60 flex items-center justify-center opacity-60 hover:opacity-100">
              <FaInstagram className="text-white" />
            </a>
            <a href="https://x.com/GameEon" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/60 flex items-center justify-center opacity-60 hover:opacity-100">
              <FaTwitter className="text-white" />
            </a>
            <a href="https://www.linkedin.com/company/gameeon/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/60 flex items-center justify-center opacity-60 hover:opacity-100">
              <FaLinkedinIn className="text-white" />
            </a>
            <a href="https://youtube.com/@GameEonIndiaGames" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/60 flex items-center justify-center opacity-60 hover:opacity-100">
              <FaYoutube className="text-white" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-base font-medium">Links</h3>
          <ul className="space-y-2 text-white/60 font-normal">
            <li className="hover:text-white transition-colors"><a href="#">Home</a></li>
            <li className="hover:text-white transition-colors"><a href="#">Team</a></li>
            <li className="hover:text-white transition-colors"><a href="#">Press</a></li>
            <li className="hover:text-white transition-colors"><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-base font-medium">Services</h3>
          <ul className="space-y-2 text-white/60 font-normal">
            <li className="hover:text-white transition-colors"><a href="#">Game Development</a></li>
            <li className="hover:text-white transition-colors"><a href="#">Art and Design</a></li>
            <li className="hover:text-white transition-colors"><a href="#">AR/VR Development</a></li>
            <li className="hover:text-white transition-colors"><a href="#">Game Testing</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-base font-medium">Get in touch</h3>
          <p className="text-white/60 font-normal break-words hover:text-white transition-colors">
            <a href="mailto:hello@gameeon.in">hello@gameeon.in</a>
          </p>
          <p className="text-white/60 font-normal break-words hover:text-white transition-colors">
            <a href="tel:+918976989251">(+91) 89769 89251 (WhatsApp Only)</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center">
        <p className="text-white text-base font-normal">
          Designed and Developed 💙 by Ashish Mohapatra
        </p>
      </div>
    </footer>
  );
}
