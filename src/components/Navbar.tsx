import { useState } from "react";
import {  NavLink, useLocation } from "react-router-dom";
import { Link } from 'react-scroll';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Globe,
  Phone,
  MapPin
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, isRTL } = useLanguage();
  const location = useLocation();
  const { cartCount } = useCart();

  const isActive = (path: string) => location.pathname === path;

  const navItems = {
    ar: [
      { name: "الرئيسية", path: "/" },
      { name: "القائمة", path: "menuSection" },
      // { name: "المشروبات", path: "#drinks" },
      // { name: "الحلويات", path: "/desserts" },
      { name: "طلب سريع", path: "QuickOrderSection" },
      { name: "تواصل معنا", path: "/contact" },
    ],
    en: [
      { name: "Home", path: "/" },
      { name: "Menu", path: "menuSection" },
      // { name: "Drinks", path: "/drinks" },
      { name: "Desserts", path: "/desserts" },
      { name: "Quick Order", path: "QuickOrderSection" },
      { name: "Contact", path: "/contact" },
    ]
  };


  return (
    <nav className="bg-card shadow-lg sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="cursor-pointer flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300">
            <div className="text-2xl font-bold text-gradient">
              {language === 'ar' ? 'بيتزا حت' : 'PIZZAS.'}
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {navItems[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                smooth={true} duration={500}
                className={`cursor-pointer font-medium transition-all duration-300 hover:text-primary ${
                  isActive(item.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className={`hidden sm:flex items-center ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'ar' ? 'EN' : 'العربية'}</span>
            </Button>

            {/* Cart */}
            <NavLink to="/cart" className="relative">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </NavLink>

            {/* Auth Buttons */}
            <div className={`hidden sm:flex ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <Link to="/signin">
                <Button variant="outline" size="sm">
                  {language === 'ar' ? 'تسجيل دخول' : 'Sign In'}
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="btn-pizza" size="sm">
                  {language === 'ar' ? 'انشاء حساب' : 'Sign Up'}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems[language].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium py-2 px-3 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className={`flex pt-4 ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <Link to="/signin" className="flex-1">
                  <Button variant="outline" className="w-full">
                    {language === 'ar' ? 'تسجيل دخول' : 'Sign In'}
                  </Button>
                </Link>
                <Link to="/signup" className="flex-1">
                  <Button className="btn-pizza w-full">
                    {language === 'ar' ? 'انشاء حساب' : 'Sign Up'}
                  </Button>
                </Link>
              </div>

              {/* Mobile Language Toggle */}
              <Button
                variant="outline"
                onClick={toggleLanguage}
                className={`flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'ar' ? 'English' : 'العربية'}</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;