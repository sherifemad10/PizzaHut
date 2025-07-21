import soda from "@/assets/Soda.jpg";
import tea from "@/assets/tea.jpeg";
import coffee from "@/assets/Coffee.jpeg";
import fruitCocktail from "@/assets/Fruit Cocktail.jpeg";
import lemonade from "@/assets/Lemonade.jpeg";
import mineralWater from "@/assets/Mineral Water.jpeg";
import appleJuice from "@/assets/Apple Juice.jpeg";
import orangeJuice from "@/assets/Orange Juice.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";

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

const Drinks = () => {
  const { language, isRTL } = useLanguage();
    const { addToCart } = useCart();
    const { toast } = useToast();
      const {user} = useContext(AuthContext)
    


  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: { ar: "مشروب غازى", en: "Soda" },
      price: 3.0,
      image: soda,
      category: "drinks",
      rating: 4.8,
      description: {
        ar: "مشروب غازي منعش",
        en: "Refreshing soda drink",
      },
      badges: ["spicy"],
    },
    {
      id: 2,
      name: { ar: "عصير برتقال", en: "Orange Juice" },
      price: 4.0,
      image: orangeJuice,
      category: "drinks",
      rating: 4.5,
      description: {
        ar: "عصير برتقال طازج",
        en: "Fresh orange juice",
      },
      badges: ["new"],
    },
    {
      id: 3,
      name: { ar: "عصير تفاح", en: "Apple Juice" },
      price: 3.5,
      image: appleJuice,
      category: "drinks",
      rating: 4.6,
      description: {
        ar: "عصير تفاح لذيذ",
        en: "Delicious apple juice",
      },
    },
    {
      id: 4,
      name: { ar: "ماء معدني", en: "Mineral Water" },
      price: 1.0,
      image: mineralWater,
      category: "drinks",
      rating: 4.0,
      description: {
        ar: "ماء معدني نقي",
        en: "Pure mineral water",
      },
    },
    {
      id: 5,
      name: { ar: "شاي ", en: " Tea" },
      price: 2.5,
      image: tea,
      category: "drinks",
      rating: 4.7,
      description: {
        ar: "شاي مثلج منعش",
        en: "Refreshing iced tea",
      },
    },
    {
      id: 6,
      name: { ar: "قهوة ", en: " Coffee" },
      price: 3.5,
      image: coffee,
      category: "drinks",
      rating: 4.9,
      description: {
        ar: "قهوة مثلجة لذيذة",
        en: "Delicious iced coffee",
      },
    },
    {
      id: 7,
      name: { ar: "عصير ليمون", en: "Lemonade" },
      price: 2.0,
      image: lemonade,
      category: "drinks",
      rating: 4.4,
      description: {
        ar: "عصير ليمون منعش",
        en: "Refreshing lemonade",
      },
    },
    {
      id: 8,
      name: { ar: "كوكتيل فواكه", en: "Fruit Cocktail" },
      price: 5.0,
      image: fruitCocktail,
      category: "drinks",
      rating: 4.8,
      description: {
        ar: "كوكتيل فواكه لذيذ",
        en: "Delicious fruit cocktail",
      },
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
          {language === "ar" ? "المشروبات" : "Drinks"}
        </h1>
        <p className="text-muted-foreground mb-4">
          {language === "ar"
            ? "استكشف خيارات المشروبات المنعشة لدينا لتكمل وجبتك."
            : "Explore our refreshing drink options to complement your meal."}
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

export default Drinks;