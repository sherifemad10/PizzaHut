import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from "lucide-react";

const SignUp = () => {
  const [language] = useState<'ar' | 'en'>('ar');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert(language === 'ar' ? 'كلمات المرور غير متطابقة' : 'Passwords do not match');
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert(language === 'ar' ? 'يجب الموافقة على الشروط والأحكام' : 'You must agree to the terms and conditions');
      return;
    }
    
    // Handle sign up logic
    console.log('Sign up:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-secondary/10 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-secondary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/10 rounded-full animate-bounce-gentle"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Back to Home */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</span>
        </Link>

        <Card className="card-pizza">
          <CardHeader className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">
              {language === 'ar' ? 'بيتزا حت' : 'PIZZAS.'}
            </div>
            <CardTitle className="text-2xl">
              {language === 'ar' ? 'إنشاء حساب جديد' : 'Create Account'}
            </CardTitle>
            <p className="text-muted-foreground">
              {language === 'ar' 
                ? 'انضم إلينا واستمتع بأفضل عروض البيتزا' 
                : 'Join us and enjoy the best pizza offers'
              }
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">
                  {language === 'ar' ? 'كلمة المرور' : 'Password'}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder={language === 'ar' ? 'أدخل كلمة المرور' : 'Enter your password'}
                    className="pl-10 pr-10 h-12"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">
                  {language === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    placeholder={language === 'ar' ? 'أعد إدخال كلمة المرور' : 'Re-enter your password'}
                    className="pl-10 pr-10 h-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData({...formData, agreeToTerms: checked as boolean})}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    {language === 'ar' 
                      ? 'أوافق على ' 
                      : 'I agree to the '
                    }
                    <Link to="/terms" className="text-primary hover:text-primary-hover transition-colors">
                      {language === 'ar' ? 'الشروط والأحكام' : 'Terms and Conditions'}
                    </Link>
                    {language === 'ar' ? ' و ' : ' and '}
                    <Link to="/privacy" className="text-primary hover:text-primary-hover transition-colors">
                      {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                    </Link>
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData({...formData, newsletter: checked as boolean})}
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    {language === 'ar' 
                      ? 'أريد الحصول على العروض والخصومات عبر البريد الإلكتروني' 
                      : 'I want to receive offers and discounts via email'
                    }
                  </Label>
                </div>
              </div>

              {/* Sign Up Button */}
              <Button 
                type="submit" 
                className="btn-pizza w-full h-12 text-base font-semibold"
              >
                {language === 'ar' ? 'إنشاء الحساب' : 'Create Account'}
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    {language === 'ar' ? 'أو' : 'or'}
                  </span>
                </div>
              </div>

              {/* Social Sign Up */}
              <div className="space-y-3">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full h-12 border-2"
                >
                  <span className="mr-2">🔍</span>
                  {language === 'ar' ? 'التسجيل مع Google' : 'Sign up with Google'}
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full h-12 border-2"
                >
                  <span className="mr-2">📱</span>
                  {language === 'ar' ? 'التسجيل مع رقم الهاتف' : 'Sign up with Phone'}
                </Button>
              </div>

              {/* Sign In Link */}
              <div className="text-center">
                <p className="text-muted-foreground">
                  {language === 'ar' ? 'لديك حساب بالفعل؟' : 'Already have an account?'}{' '}
                  <Link 
                    to="/signin" 
                    className="text-primary hover:text-primary-hover font-medium transition-colors"
                  >
                    {language === 'ar' ? 'تسجيل الدخول' : 'Sign in'}
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;