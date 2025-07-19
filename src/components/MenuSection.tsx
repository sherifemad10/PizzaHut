import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Star, Flame, Leaf } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import pepperoniPizza from "@/assets/pepperoni-pizza.jpg";
import vegetarianPizza from "@/assets/vegetarian-pizza.jpg";
import pestoChickenPizza from "@/assets/pesto-chicken-pizza.jpg";
import calabresePizza from "@/assets/calabrese-pizza.jpg";
import Soda from "@/assets/Soda.jpg";
import Tea from "@/assets/tea.jpeg";
import Coffee from "@/assets/Coffee.jpeg";
import Cheesecake from "@/assets/Cheesecake.jpeg";
import whiteChocolateCake from "@/assets/White Chocolate Cake.jpeg";
import FreshJuice from "@/assets/Fresh Juice.jpg";
import ChocolateCake from "@/assets/Chocolate Cake.jpeg";
import VanillaIceCream from "@/assets/Vanilla Ice Cream.jpeg";
import { Link } from "react-router-dom";

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

const MenuSection = () => {
  const { language, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('pizza');
  const { addToCart } = useCart();
  const { toast } = useToast();

  const categories = {
    ar: [
      { id: 'pizza', name: 'البيتزا', icon: '🍕' },
      { id: 'drinks', name: 'المشروبات', icon: '🥤' },
      { id: 'desserts', name: 'الحلويات', icon: '🍰' }
    ],
    en: [
      { id: 'pizza', name: 'Pizza', icon: '🍕' },
      { id: 'drinks', name: 'Drinks', icon: '🥤' },
      { id: 'desserts', name: 'Desserts', icon: '🍰' }
    ]
  };

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: { ar: 'بيتزا بيبروني', en: 'Pepperoni Pizza' },
      price: 15.00,
      image: pepperoniPizza,
      category: 'pizza',
      rating: 4.8,
      description: { 
        ar: 'بيتزا كلاسيكية مع شرائح البيبروني والجبن المذاب', 
        en: 'Classic pizza with pepperoni slices and melted cheese' 
      },
      badges: ['spicy']
    },
    {
      id: 2,
      name: { ar: 'بيتزا نباتية', en: 'Vegetarian Pizza' },
      price: 18.00,
      image: vegetarianPizza,
      category: 'pizza',
      rating: 4.6,
      description: { 
        ar: 'بيتزا صحية مع خضار طازجة متنوعة', 
        en: 'Healthy pizza with fresh mixed vegetables' 
      },
      badges: ['vegetarian']
    },
    {
      id: 3,
      name: { ar: 'بيتزا دجاج بيستو', en: 'Pesto Chicken Pizza' },
      price: 23.00,
      image: pestoChickenPizza,
      category: 'pizza',
      rating: 4.9,
      description: { 
        ar: 'بيتزا شهية مع صلصة البيستو وقطع الدجاج المشوي', 
        en: 'Delicious pizza with pesto sauce and grilled chicken pieces' 
      },
      badges: ['popular']
    },
    {
      id: 4,
      name: { ar: 'بيتزا كالابريس', en: 'Calabrese Pizza' },
      price: 28.00,
      image: calabresePizza,
      category: 'pizza',
      rating: 4.7,
      description: { 
        ar: 'بيتزا حارة مع سلامي كالابريس والفلفل الحار', 
        en: 'Spicy pizza with calabrese salami and hot peppers' 
      },
      badges: ['spicy', 'popular']
    },
    {
      id: 5,
      name: { ar: 'مشروب غازي', en: 'Soda' },
      price: 3.00,
      image: Soda,
      category: 'drinks',
      rating: 4.5,
      description: { 
        ar: 'مشروب غازي منعش', 
        en: 'Refreshing soda drink' 
      },
            badges: ['popular']

    },
    {
      id: 6,
      name: { ar: 'عصير طبيعي', en: 'Fresh Juice' },
      price: 4.50,
      image: FreshJuice,
      category: 'drinks',
      rating: 4.8,
      description: { 
        ar: 'عصير طبيعي من الفواكه الطازجة', 
        en: 'Fresh fruit juice' 
      },
      badges: ['popular']
    },
    {
      id: 7,
      name: { ar: "شاي ", en: " Tea" },
      price: 2.5,
      image: Tea,
      category: "drinks",
      rating: 4.7,
      description: {
        ar: "شاي مثلج منعش",
        en: "Refreshing iced tea",
      },
        badges: ['spicy', 'popular']
    },
    {
      id: 8,
      name: { ar: "قهوة ", en: " Coffee" },
      price: 3.5,
      image: Coffee,
      category: "drinks",
      rating: 4.9,
      description: {
        ar: "قهوة مثلجة لذيذة",
        en: "Delicious iced coffee",
      },
        badges: ['spicy', 'popular']
    },
    {
      id: 9,
      name: { ar: 'كعكة الشوكولاتة', en: 'Chocolate Cake' },
      price: 5.00,
      image: ChocolateCake,
      category: 'desserts',
      rating: 4.9,
      description: { 
        ar: 'كعكة شوكولاتة لذيذة مع كريمة غنية', 
        en: 'Delicious chocolate cake with rich cream' 
      },
              badges: [ 'popular']

    },
    {
      id: 10,
      name: { ar: 'آيس كريم فانيليا', en: 'Vanilla Ice Cream' },
      price: 3.50,
      image: VanillaIceCream,
      category: 'desserts',
      rating: 4.6,
      description: { 
        ar: 'آيس كريم فانيليا ناعم ولذيذ', 
        en: 'Smooth and delicious vanilla ice cream' 
      },
                    badges: [ 'popular']

    },
      {
          id: 11,
          name: { ar: 'كعكة الجبن', en: 'Cheesecake' },
          price: 5.50,
          image: Cheesecake,
          category: 'desserts',
          rating: 4.8,
          description: { 
            ar: 'كعكة جبن لذيذة مع قاعدة بسكويت', 
            en: 'Delicious cheesecake with a biscuit base' 
          },
                        badges: [ 'popular']

        },
        {
          id: 12,
          name: { ar: 'كعكة الشوكولاتة البيضاء', en: 'White Chocolate Cake' },
          price: 5.00,
          image: whiteChocolateCake,
          category: 'desserts',
          rating: 4.6,
          description: { 
            ar: 'كعكة شوكولاتة بيضاء لذيذة', 
            en: 'Delicious white chocolate cake' 
          },
                        badges: [ 'popular']

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

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'spicy':
        return <Flame className="w-3 h-3" />;
      case 'vegetarian':
        return <Leaf className="w-3 h-3" />;
      case 'popular':
        return <Star className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'spicy':
        return 'bg-destructive text-destructive-foreground';
      case 'vegetarian':
        return 'bg-success text-success-foreground';
      case 'popular':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menuSection" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">{language === 'ar' ? 'أفضل' : 'Our Best'}</span>
            <br />
            <span className="text-gradient">{language === 'ar' ? 'مبيعاتنا' : 'Sellers'}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'اكتشف مجموعة مختارة من أشهى البيتزا والمشروبات والحلويات' 
              : 'Discover our curated selection of the most delicious pizzas, drinks and desserts'
            }
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className={`flex bg-card p-2 rounded-2xl shadow-lg ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
            {categories[language].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
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
                    <div className={`absolute top-3 flex flex-col space-y-2 ${isRTL ? 'right-3' : 'left-3'}`}>
                      {item.badges.map((badge) => (
                        <Badge
                          key={badge}
                          className={`${getBadgeColor(badge)} flex items-center text-xs ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
                        >
                          {getBadgeIcon(badge)}
                          <span className="capitalize">{badge}</span>
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Rating */}
                  <div className={`absolute top-3 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center ${isRTL ? 'left-3 space-x-reverse space-x-1' : 'right-3 space-x-1'}`}>
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
                      <Plus className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                      {language === 'ar' ? 'إضافة' : 'Add'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
        <Link
    to={
  activeCategory === 'pizza'
    ? '/pizza'
    : activeCategory === 'drinks'
    ? '/drinks'
    : activeCategory === 'desserts'
    ? '/deserts'
    : '/'
}
  >
    <Button
      variant="outline"
      className="btn-cheese text-lg px-8 py-4"
    >
      {language === 'ar' ? 'عرض المزيد' : 'View More'}
    </Button>
  </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;