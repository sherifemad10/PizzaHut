import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/pizza-hero.jpg";

const HeroSection = () => {
  const { language, isRTL } = useLanguage();

  const content = {
    ar: {
      title1: "استشعر",
      title2: "الطعم",
      title3: "الاستثنائي",
      title4: "احب",
      title5: "بيتزاتنا",
      subtitle: "استشعر الطعم الاستثنائي لبيتزاتنا المحضرة بمكونات طازجة ونكهات أصيلة",
      startBtn: "ابدأ الآن",
      menuBtn: "عرض القائمة",
      rating: "4.9/5 تقييم",
      award: "أفضل بيتزا 2024",
      cheese: "بيتزا الجبن",
      bestseller: "الأكثر مبيعاً",
      paneer: "بيتزا بانير",
      mostOrdered: "الأكثر طلباً",
      completed: "طلب مكتمل",
      delivered: "تم التوصيل بنجاح"
    },
    en: {
      title1: "Feel the",
      title2: "Extra",
      title3: "Ordinary",
      title4: "Love",
      title5: "Our Pizzas",
      subtitle: "Experience the extraordinary taste of our pizzas made with fresh ingredients and authentic flavors",
      startBtn: "Get Started",
      menuBtn: "View Menu",
      rating: "4.9/5 Rating",
      award: "Best Pizza 2024",
      cheese: "Cheese Pizza",
      bestseller: "Best Seller",
      paneer: "Paneer Pizza",
      mostOrdered: "Most Ordered",
      completed: "Order Complete",
      delivered: "Successfully Delivered"
    }
  };

  const currentContent = content[language];

  return (
    <section id="home" className="relative bg-gradient-to-br from-background via-muted to-secondary/10 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-20 -left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">{currentContent.title1} </span>
                <span className="text-gradient">{currentContent.title2}</span>
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">{currentContent.title3} </span>
                <span className="text-primary">{currentContent.title4}</span>
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">{currentContent.title5}</span>
              </h3>
            </div>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {currentContent.subtitle}
            </p>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button className="btn-pizza text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:cursor-pointer"
              >
                {currentContent.startBtn}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              </Button>
              <Button 
                variant="outline" 
                className="btn-cheese text-lg px-8 py-4 rounded-xl border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 cursor-pointer"
                onClick={() => window.scrollTo({ top: document.getElementById('MenuSection')?.offsetTop || 0, behavior: 'smooth' })}
              >
                {currentContent.menuBtn}
              </Button>
            </div>

            {/* Stats */}
            <div className={`flex items-center pt-8 ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
              <div className={`flex items-center text-sm ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-muted-foreground">{currentContent.rating}</span>
              </div>
              <div className={`flex items-center text-sm ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <Award className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{currentContent.award}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={heroImage}
                  alt="Person enjoying delicious pizza"
                  className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Overlay Elements */}
                <div className={`absolute top-6 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-slide-in-right ${isRTL ? 'right-6' : 'left-6'}`}>
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-primary fill-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{currentContent.cheese}</p>
                      <p className="text-sm text-muted-foreground">{currentContent.bestseller}</p>
                    </div>
                  </div>
                </div>

                <div className={`absolute top-32 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-slide-in-right ${isRTL ? 'left-6' : 'right-6'}`} style={{ animationDelay: '0.2s' }}>
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{currentContent.paneer}</p>
                      <p className="text-sm text-muted-foreground">{currentContent.mostOrdered}</p>
                    </div>
                  </div>
                </div>

                <div className={`absolute bottom-6 bg-success/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-slide-in-right ${isRTL ? 'right-6' : 'left-6'}`} style={{ animationDelay: '0.4s' }}>
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-bold text-success-foreground">{currentContent.completed}</p>
                      <p className="text-sm text-success-foreground/80">{currentContent.delivered}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pizza Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg animate-bounce-gentle">
                <span className="text-2xl">🍕</span>
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-3xl">🧀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;