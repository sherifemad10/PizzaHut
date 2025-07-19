import ChocolateCake from "@/assets/Chocolate Cake.jpeg";
import VanillaIceCream from "@/assets/Vanilla Ice Cream.jpeg";
import whiteChocolateCake from "@/assets/White Chocolate Cake.jpeg";
import CarrotCake from "@/assets/Carrot Cake.jpeg";
import ChocolateBrownie from "@/assets/Chocolate Brownie.jpeg";
import LemonCake from "@/assets/Lemon Cake.jpeg";
import ApplePie from "@/assets/Apple Pie.jpeg";
import Cheesecake from "@/assets/Cheesecake.jpeg";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

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

const Deserts = () => {
  const { language, isRTL } = useLanguage();
    const { addToCart } = useCart();
    const { toast } = useToast();

  const menuItems: MenuItem[] = [
    
      {
      id: 1,
      name: { ar: 'كعكة الشوكولاتة', en: 'Chocolate Cake' },
      price: 5.00,
      image: ChocolateCake,
      category: 'desserts',
      rating: 4.9,
      description: { 
        ar: 'كعكة شوكولاتة لذيذة مع كريمة غنية', 
        en: 'Delicious chocolate cake with rich cream' 
      }
    },
    {
      id: 2,
      name: { ar: 'آيس كريم فانيليا', en: 'Vanilla Ice Cream' },
      price: 3.50,
      image: VanillaIceCream,
      category: 'desserts',
      rating: 4.6,
      description: { 
        ar: 'آيس كريم فانيليا ناعم ولذيذ', 
        en: 'Smooth and delicious vanilla ice cream' 
      }
    },
    {
      id: 3,
      name: { ar: 'كعكة الجزر', en: 'Carrot Cake' },
      price: 4.00,
      image: CarrotCake,
      category: 'desserts',
      rating: 4.8,
      description: { 
        ar: 'كعكة جزر لذيذة مع كريمة الجبن', 
        en: 'Delicious carrot cake with cream cheese' 
      }
    },
    {
      id: 4,
      name: { ar: 'براوني الشوكولاتة', en: 'Chocolate Brownie' },
      price: 3.00,
      image: ChocolateBrownie,
      category: 'desserts',
      rating: 4.7,
      description: { 
        ar: 'براوني شوكولاتة غنية ولذيذة', 
        en: 'Rich and delicious chocolate brownie' 
      }
    },
    {
      id: 5,
      name: { ar: 'كعكة الليمون', en: 'Lemon Cake' },
      price: 4.50,
      image: LemonCake,
      category: 'desserts',
      rating: 4.5,
      description: { 
        ar: 'كعكة ليمون منعشة ولذيذة', 
        en: 'Refreshing and delicious lemon cake' 
      }
    },
    {
      id: 6,
      name: { ar: 'فطيرة التفاح', en: 'Apple Pie' },
      price: 4.00,
      image: ApplePie,
      category: 'desserts',
      rating: 4.4,
      description: { 
        ar: 'فطيرة تفاح دافئة ولذيذة', 
        en: 'Warm and delicious apple pie' 
      }
    },
    {
      id: 7,
      name: { ar: 'كعكة الجبن', en: 'Cheesecake' },
      price: 5.50,
      image: Cheesecake,
      category: 'desserts',
      rating: 4.8,
      description: { 
        ar: 'كعكة جبن لذيذة مع قاعدة بسكويت', 
        en: 'Delicious cheesecake with a biscuit base' 
      }
    },
    {
      id: 8,
      name: { ar: 'كعكة الشوكولاتة البيضاء', en: 'White Chocolate Cake' },
      price: 5.00,
      image: whiteChocolateCake,
      category: 'desserts',
      rating: 4.6,
      description: { 
        ar: 'كعكة شوكولاتة بيضاء لذيذة', 
        en: 'Delicious white chocolate cake' 
      }
    }



    

  ];

  const handleAddToCart = (item: MenuItem) => {
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
  };

  return (
    <section id="drinks" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === "ar" ? "الحلويات" : "Desserts"}
        </h1>
        <p className="text-muted-foreground mb-4">
          {language === "ar"
            ? "استمتع بأشهى الحلويات لدينا بعد وجبتك."
            : "Enjoy our delicious desserts after your meal."
            }
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

export default Deserts;