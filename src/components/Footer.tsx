import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    MapPin,
    Mail,
    Phone,
    MessageCircle,
} from 'lucide-react'
import logo from '../assets/logo.png'

interface FooterProps {
    onJoinTeamClick: () => void
}

export function Footer({ onJoinTeamClick }: FooterProps) {
    const socialLinks = [
        { Icon: Facebook, href: '#' },
        { Icon: Twitter, href: '#' },
        { Icon: Linkedin, href: '#' },
        { Icon: Instagram, href: 'https://www.instagram.com/baruah.group?igsh=NHVpbzZia2gxbjli' },
    ]

    return (
        <footer className="bg-[#050B14] text-white pt-20 pb-10 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <img src={logo} alt="Baruah EPC" className="h-12 w-auto" />
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Building the infrastructure of tomorrow with precision, innovation,
                            and unwavering reliability.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target={href !== '#' ? '_blank' : undefined}
                                    rel={href !== '#' ? 'noopener noreferrer' : undefined}
                                    className="text-gray-400 hover:text-[#FDB913] transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'EPC', 'Portfolio', 'Consultation'].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                                            className="text-gray-400 hover:text-[#FDB913] transition-colors"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ),
                            )}
                            <li>
                                <button
                                    onClick={onJoinTeamClick}
                                    className="text-gray-400 hover:text-[#FDB913] transition-colors"
                                >
                                    Join Our Team
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
                        <ul className="space-y-4">
                            {[
                                'EPC Contracting',
                                'Structural Engineering',
                                'Project Management',
                                'Industrial Construction',
                                'Infrastructure Development',
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-[#FDB913] transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-[#FDB913] flex-shrink-0 mt-1" />
                                <span>
                                    Ganesh Turning, Main Road, Kahilipara, Guwahati - 781019,
                                    Assam
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-5 h-5 text-[#FDB913] flex-shrink-0" />
                                <a href="tel:+918811090483" className="hover:text-[#FDB913] transition-colors">+91 8811090483</a>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                                <a href="https://wa.me/918486574602" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">+91 8486574602 (WhatsApp)</a>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-5 h-5 text-[#FDB913] flex-shrink-0" />
                                <span>baruahepc@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()} Baruah EPC and Group. All rights
                        reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
