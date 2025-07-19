import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  Heart
} from "lucide-react";

const Footer = () => {
  const [language] = useState<'ar' | 'en'>('ar');
  const [email, setEmail] = useState('');

  const quickLinks = {
    ar: [
      { name: 'الرئيسية', path: '/' },
      { name: 'القائمة', path: '/menu' },
      { name: 'طلب سريع', path: '/quick-order' },
      { name: 'تواصل معنا', path: '/contact' },
      { name: 'عنا', path: '/about' },
      { name: 'الأسئلة الشائعة', path: '/faq' }
    ],
    en: [
      { name: 'Home', path: '/' },
      { name: 'Menu', path: '/menu' },
      { name: 'Quick Order', path: '/quick-order' },
      { name: 'Contact', path: '/contact' },
      { name: 'About Us', path: '/about' },
      { name: 'FAQ', path: '/faq' }
    ]
  };

  const locations = {
    ar: [
      'الرياض - حي الملك فهد',
      'جدة - كورنيش جدة',
      'الدمام - شارع الملك عبدالعزيز',
      'مكة المكرمة - العزيزية'
    ],
    en: [
      'Riyadh - King Fahd District',
      'Jeddah - Jeddah Corniche',
      'Dammam - King Abdulaziz Street',
      'Mecca - Al Aziziyyah'
    ]
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="bg-gradient-pizza py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              {language === 'ar' ? 'اشترك في نشرتنا الإخبارية' : 'Subscribe to Our Newsletter'}
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
              {language === 'ar' 
                ? 'احصل على أحدث العروض والخصومات على بيتزاتك المفضلة' 
                : 'Get the latest offers and discounts on your favorite pizzas'
              }
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                className="flex-1 h-12 bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/60"
                required
              />
              <Button 
                type="submit" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary-hover h-12 px-6 font-semibold"
              >
                {language === 'ar' ? 'اشتراك' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="text-3xl font-bold text-secondary mb-4">
                  {language === 'ar' ? 'بيتزا حت' : 'PIZZAS.'}
                </div>
                <p className="text-background/70 leading-relaxed">
                  {language === 'ar' 
                    ? 'نقدم أشهى وألذ أنواع البيتزا المحضرة بأجود المكونات الطازجة لضمان أفضل تجربة طعام لعملائنا الكرام.' 
                    : 'We serve the most delicious pizzas made with the finest fresh ingredients to ensure the best dining experience for our valued customers.'
                  }
                </p>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-secondary mb-6">
                {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h4>
              <ul className="space-y-3">
                {quickLinks[language].map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-background/70 hover:text-secondary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold text-secondary mb-6">
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-background/70">+966 12 345 6789</p>
                    <p className="text-background/70">+966 50 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-background/70">info@pizzas.com</p>
                    <p className="text-background/70">orders@pizzas.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-background/70">
                      {language === 'ar' ? 'السبت - الخميس: 10 ص - 2 ص' : 'Sat - Thu: 10 AM - 2 AM'}
                    </p>
                    <p className="text-background/70">
                      {language === 'ar' ? 'الجمعة: 2 م - 2 ص' : 'Fri: 2 PM - 2 AM'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h4 className="text-xl font-bold text-secondary mb-6">
                {language === 'ar' ? 'فروعنا' : 'Our Locations'}
              </h4>
              <ul className="space-y-3">
                {locations[language].map((location, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-background/70 text-sm">{location}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="mt-4 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                {language === 'ar' ? 'عرض جميع الفروع' : 'View All Locations'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm text-center md:text-left">
              {language === 'ar' 
                ? '© 2025 بيتزا حت. جميع الحقوق محفوظة.' 
                : '© 2025 Pizzas. All rights reserved.'
              }
            </p>
            
            <div className="flex items-center space-x-1 text-background/60 text-sm">
              <span>
                {language === 'ar' ? 'صُنع بـ' : 'Made with'}
              </span>
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
              <span>
                {language === 'ar' ? 'في المملكة العربية السعودية' : 'in Saudi Arabia'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;