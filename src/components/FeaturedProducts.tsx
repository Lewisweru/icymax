import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Radiance Serum',
    price: 89,
    image: 'https://images.unsplash.com/photo-1620917669809-1af0497965de?auto=format&fit=crop&q=80&w=800',
    description: 'A powerful serum that brightens and evens skin tone while reducing the appearance of fine lines.',
  },
  {
    id: 2,
    name: 'Hydrating Cream',
    price: 65,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800',
    description: 'Rich moisturizing cream that provides 24-hour hydration for all skin types.',
  },
  {
    id: 3,
    name: 'Rose Toner',
    price: 45,
    image: 'https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&q=80&w=800',
    description: 'Alcohol-free toner that balances pH levels and refreshes skin with natural rose water.',
  },
];

export function FeaturedProducts() {
  const { addItem } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">Bestsellers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  />
                  <button
                    onClick={() => addItem(product)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-hidden" onClick={() => setSelectedProduct(null)}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center p-4" onClick={e => e.stopPropagation()}>
            <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-medium mb-2">{selectedProduct.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  <p className="text-xl font-medium mb-6">${selectedProduct.price}</p>
                  <button
                    onClick={() => {
                      addItem(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}