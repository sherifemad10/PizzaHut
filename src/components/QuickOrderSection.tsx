import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QuickOrderSection = () => {
  const [language] = useState<'ar' | 'en'>('ar');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    orderType: '',
    customOrder: ''
  });
  const { toast } = useToast();

  const quickOrderOptions = {
    ar: [
      { value: 'pepperoni', label: 'بيتزا بيبروني - 15 ريال' },
      { value: 'vegetarian', label: 'بيتزا نباتية - 18 ريال' },
      { value: 'chicken', label: 'بيتزا دجاج - 23 ريال' },
      { value: 'combo1', label: 'كومبو عائلي - 45 ريال' },
      { value: 'combo2', label: 'كومبو للأصدقاء - 35 ريال' },
      { value: 'custom', label: 'طلب مخصص' }
    ],
    en: [
      { value: 'pepperoni', label: 'Pepperoni Pizza - $15' },
      { value: 'vegetarian', label: 'Vegetarian Pizza - $18' },
      { value: 'chicken', label: 'Chicken Pizza - $23' },
      { value: 'combo1', label: 'Family Combo - $45' },
      { value: 'combo2', label: 'Friends Combo - $35' },
      { value: 'custom', label: 'Custom Order' }
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.orderType) {
      toast({
        title: language === 'ar' ? "خطأ في الطلب" : "Order Error",
        description: language === 'ar' ? "يرجى ملء جميع الحقول المطلوبة" : "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: language === 'ar' ? "تم إرسال الطلب بنجاح!" : "Order Submitted Successfully!",
      description: language === 'ar' 
        ? "سنتواصل معك خلال 5 دقائق لتأكيد الطلب" 
        : "We'll contact you within 5 minutes to confirm your order",
    });

    // Reset form
    setFormData({ name: '', phone: '', orderType: '', customOrder: '' });
  };

  return (
    <section id="QuickOrderSection" className="py-20 bg-gradient-to-br from-secondary/10 to-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">
              {language === 'ar' ? 'طلب سريع' : 'Quick Order'}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'ar' 
              ? 'اطلب بيتزاتك المفضلة في أقل من دقيقة واحدة' 
              : 'Order your favorite pizza in less than a minute'
            }
          </p>
        </div>

        <Card className="card-pizza max-w-2xl mx-auto">
          <CardHeader className="text-center pb-6">
            <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
              <Clock className="w-6 h-6 text-primary" />
              <span>{language === 'ar' ? 'توصيل خلال 30 دقيقة' : 'Delivery in 30 minutes'}</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-medium">
                  {language === 'ar' ? 'الاسم *' : 'Name *'}
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                  className="h-12 text-base"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-medium">
                  {language === 'ar' ? 'رقم الهاتف *' : 'Phone Number *'}
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder={language === 'ar' ? '+966 XX XXX XXXX' : '+1 (555) 123-4567'}
                    className="h-12 text-base pl-10"
                    required
                  />
                </div>
              </div>

              {/* Order Selection */}
              <div className="space-y-2">
                <Label htmlFor="order" className="text-base font-medium">
                  {language === 'ar' ? 'اختر طلبك *' : 'Choose Your Order *'}
                </Label>
                <Select 
                  value={formData.orderType} 
                  onValueChange={(value) => setFormData({...formData, orderType: value})}
                >
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder={language === 'ar' ? 'اختر من القائمة السريعة' : 'Select from quick menu'} />
                  </SelectTrigger>
                  <SelectContent>
                    {quickOrderOptions[language].map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Custom Order Field (shows when custom is selected) */}
              {formData.orderType === 'custom' && (
                <div className="space-y-2 animate-fade-in-up">
                  <Label htmlFor="customOrder" className="text-base font-medium">
                    {language === 'ar' ? 'تفاصيل الطلب المخصص' : 'Custom Order Details'}
                  </Label>
                  <Textarea
                    id="customOrder"
                    value={formData.customOrder}
                    onChange={(e) => setFormData({...formData, customOrder: e.target.value})}
                    placeholder={language === 'ar' 
                      ? 'اكتب تفاصيل طلبك هنا... (نوع البيتزا، الحجم، الإضافات، إلخ)' 
                      : 'Write your order details here... (pizza type, size, toppings, etc.)'
                    }
                    className="min-h-[100px] text-base resize-none"
                    rows={4}
                  />
                </div>
              )}

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="btn-pizza w-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                {language === 'ar' ? 'إرسال الطلب' : 'Submit Order'}
              </Button>

              {/* Additional Info */}
              <div className="bg-muted/50 rounded-xl p-4 space-y-2">
                <p className="text-sm text-center text-muted-foreground">
                  {language === 'ar' 
                    ? '💳 الدفع عند الاستلام أو بالفيزا  •  🚗 توصيل مجاني للطلبات أكثر من 30 ريال' 
                    : '💳 Cash on delivery or Visa  •  🚗 Free delivery for orders over $30'
                  }
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            {language === 'ar' ? 'أو اتصل بنا مباشرة:' : 'Or call us directly:'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <a 
              href="tel:+966123456789" 
              className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+966 12 345 6789</span>
            </a>
            <div className="hidden sm:block text-muted-foreground">•</div>
            <a 
              href="https://wa.me/966123456789" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-success hover:opacity-80 transition-opacity"
            >
              <span className="text-lg">📱</span>
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickOrderSection;