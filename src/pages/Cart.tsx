import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag, 
  ArrowLeft,
  CreditCard,
  Truck,
  Gift
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  const [language] = useState<'ar' | 'en'>('ar');
  const [promoCode, setPromoCode] = useState('');
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 30 ? 0 : 5;
  const discount = promoCode === 'PIZZA20' ? subtotal * 0.2 : 0;
  const total = subtotal + deliveryFee - discount;

  const applyPromoCode = () => {
    if (promoCode === 'PIZZA20') {
      // Show success message
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        {/* <Navbar /> */}
        
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="space-y-6">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag className="w-16 h-16 text-muted-foreground" />
            </div>
            
            <h1 className="text-3xl font-bold">
              {language === 'ar' ? 'سلة التسوق فارغة' : 'Your Cart is Empty'}
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              {language === 'ar' 
                ? 'ابدأ بإضافة بعض البيتزا اللذيذة إلى سلة التسوق الخاصة بك' 
                : 'Start by adding some delicious pizzas to your cart'
              }
            </p>
            
            <div className="space-y-4">
              <Link to="/menu">
                <Button className="btn-pizza text-lg px-8 py-4">
                  {language === 'ar' ? 'تصفح القائمة' : 'Browse Menu'}
                </Button>
              </Link>
              
              <div>
                <Link 
                  to="/" 
                  className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* <Footer /> */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              {language === 'ar' ? 'سلة التسوق' : 'Shopping Cart'}
            </h1>
            <p className="text-muted-foreground">
              {cartItems.length} {language === 'ar' ? 'عنصر في السلة' : 'items in cart'}
            </p>
          </div>
          
          <Link 
            to="/menu" 
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'ar' ? 'متابعة التسوق' : 'Continue Shopping'}</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-6">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Image */}
                    <div className="w-full md:w-32 h-32 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name[language]}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-2">
                      <h3 className="font-bold text-lg">{item.name[language]}</h3>
                      
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{item.size}</Badge>
                        {item.toppings?.map((topping, index) => (
                          <Badge key={index} variant="secondary">{topping}</Badge>
                        ))}
                      </div>
                      
                      <div className="text-xl font-bold text-primary">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col justify-between items-end space-y-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 p-0"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        
                        <span className="font-medium w-8 text-center">{item.quantity}</span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 p-0"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      
                      <div className="text-lg font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">
                {language === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>{language === 'ar' ? 'المجموع الفرعي' : 'Subtotal'}</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="flex items-center space-x-1">
                    <Truck className="w-4 h-4" />
                    <span>{language === 'ar' ? 'رسوم التوصيل' : 'Delivery'}</span>
                  </span>
                  <span className={deliveryFee === 0 ? 'text-success' : ''}>
                    {deliveryFee === 0 ? (language === 'ar' ? 'مجاني' : 'Free') : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-success">
                    <span className="flex items-center space-x-1">
                      <Gift className="w-4 h-4" />
                      <span>{language === 'ar' ? 'خصم' : 'Discount'}</span>
                    </span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>{language === 'ar' ? 'المجموع' : 'Total'}</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Promo Code */}
            <Card className="p-6">
              <h4 className="font-medium mb-3">
                {language === 'ar' ? 'كود الخصم' : 'Promo Code'}
              </h4>
              
              <div className="flex space-x-2">
                <Input
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder={language === 'ar' ? 'أدخل كود الخصم' : 'Enter promo code'}
                />
                <Button variant="outline" onClick={applyPromoCode}>
                  {language === 'ar' ? 'تطبيق' : 'Apply'}
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-2">
                {language === 'ar' ? 'جرب: PIZZA20 للحصول على خصم 20%' : 'Try: PIZZA20 for 20% off'}
              </p>
            </Card>

            {/* Checkout Button */}
            <Button className="btn-pizza w-full h-14 text-lg font-semibold">
              <CreditCard className="w-5 h-5 mr-2" />
              {language === 'ar' ? 'إتمام الطلب' : 'Proceed to Checkout'}
            </Button>

            {/* Delivery Info */}
            <div className="bg-muted/50 rounded-lg p-4 text-sm">
              <p className="font-medium mb-2">
                {language === 'ar' ? 'معلومات التوصيل:' : 'Delivery Info:'}
              </p>
              <ul className="space-y-1 text-muted-foreground">
                <li>🚗 {language === 'ar' ? 'توصيل خلال 30-45 دقيقة' : 'Delivery in 30-45 minutes'}</li>
                <li>💳 {language === 'ar' ? 'نقدي أو فيزا' : 'Cash or card payment'}</li>
                <li>📱 {language === 'ar' ? 'تتبع الطلب عبر الرسائل' : 'Track via SMS'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* <Footer /> */}
    </div>
  );
};

export default Cart;