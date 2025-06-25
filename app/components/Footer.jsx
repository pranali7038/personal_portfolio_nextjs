"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#18191E] text-white px-6 sm:px-12 lg:px-20 py-10">
      <div className="max-w-screen-xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Pranali</h2>
          <p className="text-sm text-[#ADB7BE]">
            A passionate developer building modern, responsive web experiences.
            Always open to collaboration and new ideas.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#ADB7BE]">
            <li><Link href="#about" className="hover:text-white transition">About</Link></li>
            <li><Link href="#projects" className="hover:text-white transition">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="#achievements" className="hover:text-white transition">Achievements</Link></li>
            <li><Link href="#timeline" className="hover:text-white transition">My Journey</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-300">Resources</h3>
          <ul className="space-y-2 text-sm text-[#ADB7BE]">
            <li>
              <Link href="/Pranali_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Resume
              </Link>
            </li>
            <li><Link href="mailto:jahagirdarpranali3409@gmail.com" className="hover:text-white transition">Email Me</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-300">Connect</h3>
          <div className="flex gap-4">
            <Link href="https://github.com/pranali7038" target="_blank">
              <Image src="/github-icon.svg" alt="GitHub" width={24} height={24} className="hover:scale-110 transition" />
            </Link>
            <Link href="https://linkedin.com/in/pranali7038" target="_blank">
              <Image src="/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} className="hover:scale-110 transition" />
            </Link>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-[#33353F] pt-6 text-center text-sm text-[#ADB7BE]">
        © {new Date().getFullYear()} Pranali. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
