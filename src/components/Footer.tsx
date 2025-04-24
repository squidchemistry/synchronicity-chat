'use client';

import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">About</h4>
            <p className="text-sm">
              Synchronicity brings together the best in chat, crypto, and AI. Stay connected with real-time conversations and the latest market trends.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul>
              <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
              <li><a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-400 transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-6">
              <a href="https://x.com/arshverma_off" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
                <FaTwitter size={24} />
              </a>
              <a href="https://github.com/squidchemistry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/arsh-verma-squidchemistry/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
            <p className="text-sm">synchronicity,feedin@gmail.com</p>
            <p className="text-sm">+91 62631784XX</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Synchronicity. All rights reserved. Made By <strong>ARSH VERMA</strong>.
          </p>
        </div>
      </div>
    </footer>
  );
}
