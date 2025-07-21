import cheesePizza from "@/assets/Cheese Pizza.jpeg";
import paneerPizza from "@/assets/Paneer Pizza.jpeg";
import customOrder from "@/assets/Custom Order.jpeg";
import friendsCombo from "@/assets/Apple Juice.jpeg";
import familyCombo from "@/assets/Family Combo.jpeg";
import chickenPizza from "@/assets/Chicken Pizza.jpeg";
import vegetarian from "@/assets/vegetarian-pizza.jpg";
import pepperoni from "@/assets/pepperoni-pizza.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";
// import { useContext } from "react";
// import { AddToCartContext } from "@/contexts/AddCartContext";


// Helper functions for badge color and icon
const getBadgeColor = (badge: string) => {
  switch (badge) {
    case "spicy":
      return "bg-red-100 text-red-600";
    case "new":
      return "bg-green-100 text-green-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const getBadgeIcon = (badge: string) => {
  switch (badge) {
    case "spicy":
      return <span>🌶️</span>;
    case "new":
      return <span>🆕</span>;
    default:
      return null;
  }
};



interface MenuItem {
  id: number;
  name: {
    ar: string;
    en: string;
  };
  price: number;
  image: string;
  category: string;
  rating: number;
  description: {
    ar: string;
    en: string;
  };
  badges?: string[];
}

const Pizza = () => {
  // const {handleAddToCart} = useContext(AddToCartContext);
  const { language, isRTL } = useLanguage();
  const { addToCart } = useCart();
  const { toast } = useToast();
    const {user} = useContext(AuthContext)


  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: { ar: "بيتزا بيبروني", en: "Pepperoni Pizza" },
      price: 15.0,
      image: pepperoni,
      category: "pizza",
      rating: 4.5,
      description: {
        ar: "بيتزا لذيذة مع شرائح البيبروني الطازجة.",
        en: "Delicious pizza with fresh pepperoni slices."
      },
      badges: ["spicy"]
    },
    {
      id: 2,
      name: { ar: "بيتزا نباتية", en: "Vegetarian Pizza" },
      price: 18.0,
      image: vegetarian,
      category: "pizza",
      rating: 4.2,
      description: {
        ar: "بيتزا غنية بالخضروات الطازجة.",
        en: "Rich pizza with fresh vegetables."
      },
      badges: ["new"]
    },
    {
      id: 3,
      name: { ar: "بيتزا دجاج", en: "Chicken Pizza" },
      price: 23.0,
      image: chickenPizza,
      category: "pizza",
      rating: 4.8,
      description: {
        ar: "بيتزا شهية مع قطع الدجاج المشوي.",
        en: "Tasty pizza with grilled chicken pieces."
      }
    },
    {
      id: 4,
      name: { ar: "كومبو عائلي", en: "Family Combo" },
      price: 45.0,
      image: familyCombo,
      category: "pizza",
      rating: 4.9,
      description: {
        ar: "كومبو عائلي يتضمن بيتزا كبيرة ومشروبات.",
        en: "Family combo including a large pizza and drinks."
      },
        badges: ["new"]
    },
    {
      id: 5,
      name: { ar: "كومبو للأصدقاء", en: "Friends Combo" },
      price: 35.0,
      image: friendsCombo,
      category: "pizza",
      rating: 4.6,
      description: {
        ar: "كومبو للأصدقاء مع بيتزا متوسطة ومشروبات.",
        en: "Friends combo with a medium pizza and drinks."
      }
    },
    {
      id: 6,
      name: { ar: "طلب مخصص", en: "Custom Order" },
      price: 20.0,
      image: customOrder,
      category: "pizza",
      rating: 4.7,
      description: {
        ar: "يمكنك طلب بيتزا حسب رغبتك.",
        en: "You can order a pizza as per your choice."
      }
    },
    {
      id: 7,
      name: { ar: "بيتزا بانير", en: "Paneer Pizza" },
      price: 20.0,
      image: paneerPizza,
      category: "pizza",
      rating: 4.3,
      description: {
        ar: "بيتزا لذيذة مع قطع البانير.",
        en: "Delicious pizza with paneer pieces."
      }
    },
    {
      id: 8,
      name: { ar: "بيتزا جبن", en: "Cheese Pizza" },
      price: 12.0,
      image: cheesePizza,
      category: "pizza",
      rating: 4.1,
      description: {
        ar: "بيتزا كلاسيكية مع طبقة من الجبن الذائب.",
        en: "Classic pizza with a layer of melted cheese."
      }
    }
    

  ];

  const handleAddToCart = (item: MenuItem) => {
    {
      if (user){
          addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      size: language === 'ar' ? 'متوسط' : 'Medium',
      toppings: []
    });

    toast({
      title: language === 'ar' ? "تم إضافة العنصر للسلة!" : "Item added to cart!",
      description: `${item.name[language]} ${language === 'ar' ? 'تم إضافته بنجاح' : 'added successfully'}`,
    });

      }else{
        toast({
          title: language === 'ar' ? "يرجى تسجيل الدخول!" : "Please log in!",
          description: language === 'ar' ? "يجب عليك تسجيل الدخول لإضافة عناصر إلى السلة." : "You need to log in to add items to the cart.",
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <section id="drinks" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === "ar" ? "بيتزا" : "Pizza"}
        </h1>
        <p className="text-muted-foreground mb-4">
          {language === "ar"
            ? "استمتع بأشهى أنواع البيتزا لدينا مع مكونات طازجة ونكهات مميزة."
            : "Enjoy our delicious pizzas with fresh ingredients and unique flavors."}
            
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <Card
            key={item.id}
            className="card-pizza group cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-0">
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.name[language]}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Badges */}
                {item.badges && (
                  <div
                    className={`absolute top-3 flex flex-col space-y-2 ${
                      isRTL ? "right-3" : "left-3"
                    }`}
                  >
                    {item.badges.map((badge) => (
                      <Badge
                        key={badge}
                        className={`${getBadgeColor(
                          badge
                        )} flex items-center text-xs ${
                          isRTL
                            ? "space-x-reverse space-x-1"
                            : "space-x-1"
                        }`}
                      >
                        {getBadgeIcon(badge)}
                        <span className="capitalize">{badge}</span>
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Rating */}
                <div
                  className={`absolute top-3 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center ${
                    isRTL
                      ? "left-3 space-x-reverse space-x-1"
                      : "right-3 space-x-1"
                  }`}
                >
                  <Star className="w-3 h-3 fill-secondary text-secondary" />
                  <span className="text-xs font-medium">{item.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.name[language]}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description[language]}
                </p>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">
                    ${item.price.toFixed(2)}
                  </div>

                  <Button
                    size="sm"
                    className="btn-pizza group-hover:scale-105 transition-transform"
                    onClick={() => handleAddToCart(item)}
                
                  >
                    <Plus
                      className={`w-4 h-4 ${
                        isRTL ? "ml-1" : "mr-1"
                      }`}
                    />
                    {language === "ar" ? "إضافة" : "Add"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
                  </div>

      </div>
    </section>
  );
};

export default Pizza;