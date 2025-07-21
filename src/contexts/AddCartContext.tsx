import React, { createContext, useContext } from "react";
import { useCart } from "./CartContext";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

// Define the context
export const AddToCartContext = createContext<{ handleAddToCart: (item: MenuItem) => void } | null>(null);

// Define TypeScript interface outside the component
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

// Create the provider
export const AddToCartProvider = ({ children }: { children: React.ReactNode }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const { language } = useLanguage();

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      size: language === "ar" ? "متوسط" : "Medium",
      toppings: [],
    });

    toast({
      title: language === "ar" ? "تم إضافة العنصر للسلة!" : "Item added to cart!",
      description:
        `${item.name[language]} ` + (language === "ar" ? "تم إضافته بنجاح" : "added successfully"),
    });
  };

  return (
    <AddToCartContext.Provider value={{ handleAddToCart }}>
      {children}
    </AddToCartContext.Provider>
  );
};


