import React from 'react';
import { Leaf, Shield, Truck } from 'lucide-react';

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Natural Ingredients</h3>
            <p className="text-gray-600">100% organic and ethically sourced ingredients</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Dermatologist Tested</h3>
            <p className="text-gray-600">Safe for all skin types and conditions</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-full">
              <Truck className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Free Shipping</h3>
            <p className="text-gray-600">On all orders over $50</p>
          </div>
        </div>
      </div>
    </section>
  );
}