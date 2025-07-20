// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";

// const SignIn = () => {
//   const [language] = useState<'ar' | 'en'>('ar');
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     remember: false
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle sign in logic
//     console.log('Sign in:', formData);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-muted to-secondary/10 flex items-center justify-center p-4">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
//         <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/20 rounded-full animate-bounce-gentle"></div>
//       </div>

//       <div className="w-full max-w-md relative z-10">
//         {/* Back to Home */}
//         <Link 
//           to="/" 
//           className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
//         >
//           <ArrowLeft className="w-4 h-4" />
//           <span>{language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</span>
//         </Link>

//         <Card className="card-pizza">
//           <CardHeader className="text-center">
//             <div className="text-3xl font-bold text-gradient mb-2">
//               {language === 'ar' ? 'بيتزا حت' : 'PIZZAS.'}
//             </div>
//             <CardTitle className="text-2xl">
//               {language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
//             </CardTitle>
//             <p className="text-muted-foreground">
//               {language === 'ar' 
//                 ? 'أدخل بياناتك للوصول إلى حسابك' 
//                 : 'Enter your credentials to access your account'
//               }
//             </p>
//           </CardHeader>

//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Email Field */}
//               <div className="space-y-2">
//                 <Label htmlFor="email">
//                   {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
//                 </Label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
//                   <Input
//                     id="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
//                     className="pl-10 h-12"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Password Field */}
//               <div className="space-y-2">
//                 <Label htmlFor="password">
//                   {language === 'ar' ? 'كلمة المرور' : 'Password'}
//                 </Label>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
//                   <Input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={formData.password}
//                     onChange={(e) => setFormData({...formData, password: e.target.value})}
//                     placeholder={language === 'ar' ? 'أدخل كلمة المرور' : 'Enter your password'}
//                     className="pl-10 pr-10 h-12"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
//                   >
//                     {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//                   </button>
//                 </div>
//               </div>

//               {/* Remember Me & Forgot Password */}
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="remember"
//                     checked={formData.remember}
//                     onCheckedChange={(checked) => setFormData({...formData, remember: checked as boolean})}
//                   />
//                   <Label htmlFor="remember" className="text-sm">
//                     {language === 'ar' ? 'تذكرني' : 'Remember me'}
//                   </Label>
//                 </div>
                
//                 <Link 
//                   to="/forgot-password" 
//                   className="text-sm text-primary hover:text-primary-hover transition-colors"
//                 >
//                   {language === 'ar' ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
//                 </Link>
//               </div>

//               {/* Sign In Button */}
//               <Button 
//                 type="submit" 
//                 className="btn-pizza w-full h-12 text-base font-semibold"
//               >
//                 {language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
//               </Button>

//               {/* Divider */}
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t border-border" />
//                 </div>
//                 <div className="relative flex justify-center text-xs uppercase">
//                   <span className="bg-card px-2 text-muted-foreground">
//                     {language === 'ar' ? 'أو' : 'or'}
//                   </span>
//                 </div>
//               </div>

//               {/* Social Sign In */}
//               <div className="space-y-3">
//                 <Button 
//                   type="button" 
//                   variant="outline" 
//                   className="w-full h-12 border-2"
//                 >
//                   <span className="mr-2">🔍</span>
//                   {language === 'ar' ? 'المتابعة مع Google' : 'Continue with Google'}
//                 </Button>
                
//                 <Button 
//                   type="button" 
//                   variant="outline" 
//                   className="w-full h-12 border-2"
//                 >
//                   <span className="mr-2">📱</span>
//                   {language === 'ar' ? 'المتابعة مع رقم الهاتف' : 'Continue with Phone'}
//                 </Button>
//               </div>

//               {/* Sign Up Link */}
//               <div className="text-center">
//                 <p className="text-muted-foreground">
//                   {language === 'ar' ? 'ليس لديك حساب؟' : "Don't have an account?"}{' '}
//                   <Link 
//                     to="/signup" 
//                     className="text-primary hover:text-primary-hover font-medium transition-colors"
//                   >
//                     {language === 'ar' ? 'انشاء حساب جديد' : 'Sign up now'}
//                   </Link>
//                 </p>
//               </div>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default SignIn;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase"; // تأكد من المسار الصحيح
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";

const SignIn = () => {
  const [language] = useState<'ar' | 'en'>('ar');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success(language === 'ar' ? "تم تسجيل الدخول بنجاح ✅" : "Signed in successfully ✅");
      navigate("/"); // غير المسار حسب مشروعك
    } catch (error: any) {
      let message = error.message;

      if (error.code === 'auth/user-not-found') {
        message = language === 'ar' ? 'الحساب غير موجود' : 'User not found';
      } else if (error.code === 'auth/wrong-password') {
        message = language === 'ar' ? 'كلمة المرور خاطئة' : 'Wrong password';
      } else if (error.code === 'auth/invalid-email') {
        message = language === 'ar' ? 'البريد الإلكتروني غير صالح' : 'Invalid email';
      }

      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-secondary/10 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/20 rounded-full animate-bounce-gentle"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</span>
        </Link>

        <Card className="card-pizza">
          <CardHeader className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">
              {language === 'ar' ? 'بيتزا حت' : 'PIZZAS.'}
            </div>
            <CardTitle className="text-2xl">
              {language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
            </CardTitle>
            <p className="text-muted-foreground">
              {language === 'ar' 
                ? 'أدخل بياناتك للوصول إلى حسابك' 
                : 'Enter your credentials to access your account'}
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder={language === 'ar' ? 'أدخل كلمة المرور' : 'Enter your password'}
                    className="pl-10 pr-10 h-12"
                    required
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.remember}
                    onCheckedChange={(checked) => setFormData({ ...formData, remember: checked as boolean })}
                  />
                  <Label htmlFor="remember" className="text-sm">
                    {language === 'ar' ? 'تذكرني' : 'Remember me'}
                  </Label>
                </div>
                <Link to="/forgot-password" className="text-sm text-primary hover:text-primary-hover transition-colors">
                  {language === 'ar' ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
                </Link>
              </div>

              {/* Sign In Button */}
              <Button type="submit" className="btn-pizza w-full h-12 text-base font-semibold">
                {language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
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

              {/* Social Buttons (Placeholder) */}
              <div className="space-y-3">
                <Button type="button" variant="outline" className="w-full h-12 border-2">
                  <span className="mr-2">🔍</span>
                  {language === 'ar' ? 'المتابعة مع Google' : 'Continue with Google'}
                </Button>
                <Button type="button" variant="outline" className="w-full h-12 border-2">
                  <span className="mr-2">📱</span>
                  {language === 'ar' ? 'المتابعة مع رقم الهاتف' : 'Continue with Phone'}
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-muted-foreground">
                  {language === 'ar' ? 'ليس لديك حساب؟' : "Don't have an account?"}{" "}
                  <Link to="/signup" className="text-primary hover:text-primary-hover font-medium transition-colors">
                    {language === 'ar' ? 'انشاء حساب جديد' : 'Sign up now'}
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

export default SignIn;
