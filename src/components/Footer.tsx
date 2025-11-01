import { useEffect, useState } from 'react'
import { sanityClient, footerQuery } from '../lib/sanityClient'

const Footer = () => {
  const [footerData, setFooterData] = useState<any | null>(null)
  useEffect(() => {
    sanityClient.fetch(footerQuery).then(setFooterData).catch(() => {})
  }, [])
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Company Description */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Inseat Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold">Inseat</span>
          </div>
          <p className="text-gray-400 max-w-md">
            {footerData?.companyDescription || 'Transform your restaurant with smart QR code ordering and comprehensive management tools.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">{footerData?.contactInfo?.address || 'Addis Ababa, Ethiopia'}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">
                    <span className="block">{footerData?.contactInfo?.phone || '+251942150275'}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">{footerData?.contactInfo?.email || 'abenezer.t@achievengine.com'}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">{footerData?.contactInfo?.businessHours || 'Monday - Friday: 9 AM - 6 PM'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {(footerData?.quickLinks || [
                { title: 'About Us', href: '#about-us' },
                { title: 'Services', href: '#services' },
                { title: 'Blog', href: '#blog' },
                { title: 'Contact', href: '#contact' }
              ]).map((link: any, index: number) => (
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
              {(footerData?.supportLinks || [
                { title: 'Help Center', href: '#help' },
                { title: 'Contact Us', href: '#contact' },
                { title: 'Documentation', href: '#docs' },
                { title: 'API Reference', href: '#api' }
              ]).map((link: any, index: number) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {(footerData?.socialLinks || [
                  { platform: 'Twitter', url: 'https://twitter.com/inseat' },
                  { platform: 'LinkedIn', url: 'https://linkedin.com/company/inseat' },
                  { platform: 'Facebook', url: 'https://facebook.com/inseat' }
                ]).map((social: any, index: number) => (
                  <a 
                    key={index}
                    href={social.url} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.platform}</span>
                    {social.platform === 'Twitter' && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    )}
                    {social.platform === 'LinkedIn' && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {social.platform === 'Facebook' && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>{footerData?.copyrightText || `© ${new Date().getFullYear()} Inseat. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
