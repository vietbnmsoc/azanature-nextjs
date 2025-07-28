"use client";

import { useState } from "react";
import { Amplify } from "aws-amplify";
import { motion } from "framer-motion";
import {
  Leaf,
  Recycle,
  Globe,
  Star,
  ShoppingCart,
  Users,
  Award,
  ArrowRight,
  Heart,
  Shield,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Configure Amplify
let outputs = {};
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  outputs = require("@/amplify_outputs.json");
  Amplify.configure(outputs);
} catch {
  console.log("amplify_outputs.json not found. Run 'pnpm amplify:sandbox' to generate it.");
}

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-800">Aznature</h1>
                <p className="text-xs text-green-600">Eco-Friendly Straws</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-green-700 hover:text-green-900 font-medium">Home</a>
              <a href="#products" className="text-green-700 hover:text-green-900 font-medium">Products</a>
              <a href="#about" className="text-green-700 hover:text-green-900 font-medium">Our Story</a>
              <a href="#contact" className="text-green-700 hover:text-green-900 font-medium">Contact</a>
            </div>

            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Shop Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-green-900 mb-6">
                Sip Sustainably with
                <span className="text-green-600 block">Sugar Cane Straws</span>
              </h1>
              <p className="text-lg text-green-700 mb-8 leading-relaxed">
                Revolutionary drinking straws made from 100% natural sugar cane. 
                Biodegradable, eco-friendly, and perfect for your sustainable lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Order Now
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                  Learn More
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-green-200 to-emerald-300 rounded-3xl flex items-center justify-center">
                <div className="text-center text-green-800">
                  <Leaf className="h-32 w-32 mx-auto mb-4" />
                  <p className="text-xl font-semibold">100% Natural</p>
                  <p className="text-sm">Sugar Cane Straws</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-green-900 mb-4">
              Why Choose Aznature?
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Our sugar cane straws are the perfect eco-friendly alternative to plastic straws.
              Made from renewable resources with zero environmental impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "100% Biodegradable",
                description: "Completely decomposes in soil within 60 days, leaving no harmful residue."
              },
              {
                icon: <Recycle className="h-8 w-8" />,
                title: "Renewable Resource", 
                description: "Made from sustainable sugar cane, helping reduce plastic waste globally."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Food Safe",
                description: "FDA approved and completely safe for hot and cold beverages."
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Carbon Neutral",
                description: "Our production process has net-zero carbon emissions."
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Ocean Friendly",
                description: "Help save marine life by choosing plastic-free alternatives."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Premium Quality",
                description: "Durable, flexible, and maintains integrity in any beverage."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-green-900 mb-3">{feature.title}</h3>
                    <p className="text-green-700">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section id="products" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-green-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              From individual packs to bulk orders, we have the perfect solution for every need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Classic Straight Straws",
                description: "Perfect for everyday use - restaurants, cafes, and home",
                price: "$12.99",
                image: "📏",
                features: ["20cm length", "6mm diameter", "Pack of 100"]
              },
              {
                name: "Flexible Bent Straws", 
                description: "Bendable straws ideal for kids and accessibility needs",
                price: "$14.99",
                image: "🔄",
                features: ["25cm length", "8mm diameter", "Pack of 100"]
              },
              {
                name: "Bulk Pack",
                description: "Perfect for businesses and events - wholesale pricing",
                price: "$89.99",
                image: "📦",
                features: ["1000 pieces", "Mixed sizes", "Free shipping"]
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="text-6xl text-center mb-4">{product.image}</div>
                    <h3 className="text-xl font-semibold text-green-900 mb-2">{product.name}</h3>
                    <p className="text-green-700 text-sm mb-4">{product.description}</p>
                    
                    <ul className="space-y-1 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-green-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-900">{product.price}</span>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Countries Served", icon: <Globe className="h-8 w-8" /> },
              { number: "10M+", label: "Straws Produced", icon: <Leaf className="h-8 w-8" /> },
              { number: "1000+", label: "Happy Businesses", icon: <Users className="h-8 w-8" /> },
              { number: "5★", label: "Customer Rating", icon: <Star className="h-8 w-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-green-300 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-4">
              Stay Updated on Sustainability
            </h2>
            <p className="text-lg text-green-700 mb-8">
              Get the latest news on eco-friendly products and special offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Aznature</span>
              </div>
              <p className="text-green-200 text-sm">
                Leading the revolution in sustainable drinking straws with 100% natural sugar cane products.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-green-200 text-sm">
                <li><a href="#" className="hover:text-white">Straight Straws</a></li>
                <li><a href="#" className="hover:text-white">Bent Straws</a></li>
                <li><a href="#" className="hover:text-white">Bulk Orders</a></li>
                <li><a href="#" className="hover:text-white">Custom Sizes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-green-200 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Sustainability</a></li>
                <li><a href="#" className="hover:text-white">Wholesale</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-green-200 text-sm">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200 text-sm">
            <p>&copy; 2024 Aznature. All rights reserved. Made with 💚 for the planet.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
