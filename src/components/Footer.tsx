const quickLinks = [
  { title: 'About Us', href: '#about-us' },
  { title: 'Services', href: '#services' },
  { title: 'Blog', href: '#blog' },
  { title: 'Contact', href: '#contact' }
]

const supportLinks = [
  { title: 'Help Center', href: '#help' },
  { title: 'Contact Us', href: '#contact' },
  { title: 'Documentation', href: '#docs' },
  { title: 'Product Guides', href: '#guides' }
]


const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Company Description */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <img src="/logo.png?v=20260226" alt="Inseat Logo" className="h-11 w-11 object-contain" />
            <span className="text-2xl font-bold">INSEAT</span>
          </div>
          <p className="text-gray-400 max-w-md">
            Transform your restaurant with smart QR code ordering and comprehensive management tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-2xl">🌍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Locations</h4>
                  <p className="text-gray-400">
                    <span className="block">Sharjah, UAE</span>
                    <span className="block">Addis Ababa, Ethiopia</span>
                    <span className="block">Chennai, India</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Phone</h4>
                  <p className="text-gray-400">
                    <span className="block">UAE &amp; Global: +971 50 731 3961</span>
                    <span className="block">Ethiopia: +251 94 215 0275</span>
                    <a
                      href="https://wa.me/971507313961"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-violet-400 hover:text-violet-300 mt-2 transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Email</h4>
                  <p className="text-gray-400">
                    <span className="block">General: business.inseat@achievengine.com</span>
                    <span className="block">Support: support@achievengine.com</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">Monday - Friday: 9 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="mb-2">{`© ${new Date().getFullYear()} Inseat. All rights reserved.`}</p>
          <p className="text-sm">
            INSEAT is a product of{' '}
            <a href="https://achievengine.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">
              Achievengine
            </a>
            {' '}(achievengine.com). Achievengine is a subsidiary of{' '}
            <a href="https://vizasia.co" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">
              Vizasia
            </a>
            {' '}(vizasia.co).
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
