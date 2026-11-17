"use client";

import { useState, useEffect } from "react";
import { 
  X, 
  MessageCircle, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  MapPin, 
  Check, 
  Scissors,
  ArrowRight
} from "lucide-react";
import { 
  BOUTIQUE_INFO, 
  formatPrice, 
  generateWhatsAppMessageText, 
  buildWhatsAppMessage 
} from "@/lib/products";

export default function WhatsAppOrderModal({
  isOpen,
  onClose,
  product,
  selectedColor,
  selectedVariation,
  quantity,
  onQuantityChange
}) {
  const [customerName, setCustomerName] = useState("");
  const [deliveryCity, setDeliveryCity] = useState("");
  const [measurements, setMeasurements] = useState("");
  const [notes, setNotes] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  // Calculations
  const additional = selectedVariation?.additionalPrice || 0;
  const unitPrice = product.price + additional;
  const originalUnitPrice = product.originalPrice + additional;
  const totalPrice = unitPrice * quantity;
  const totalSavings = (originalUnitPrice - unitPrice) * quantity;

  // Generate live message text
  const messageText = generateWhatsAppMessageText({
    product,
    color: selectedColor,
    variation: selectedVariation,
    quantity,
    customerName,
    deliveryCity,
    measurements,
    notes,
    productUrl: currentUrl
  });

  const encodedMessage = encodeURIComponent(messageText);
  const whatsAppUrl = `https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${encodedMessage}`;

  const handleProceed = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
      setIsRedirecting(false);
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white w-full max-w-2xl border border-stone-300 shadow-2xl my-8 z-10 overflow-hidden text-stone-900 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
              <MessageCircle size={18} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base md:text-lg text-white">
                Place Order via WhatsApp
              </h3>
              <p className="text-[11px] text-gold-400 uppercase tracking-wider font-light">
                Mukhi Boutique • Kowdiar Concierge
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Order Summary Strip */}
          <div className="bg-stone-50 p-4 border border-stone-200 flex gap-4 items-center">
            <div className="w-16 h-20 bg-stone-200 overflow-hidden shrink-0 border border-stone-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-stone-400">
                  {product.sku}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                  Save {formatPrice(totalSavings)}
                </span>
              </div>
              <h4 className="font-serif font-bold text-sm text-stone-900 truncate mt-0.5">
                {product.name}
              </h4>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-600 mt-1">
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-stone-300"
                    style={{ backgroundColor: selectedColor?.hex || "#999" }}
                  />
                  <span>{selectedColor?.name || "Standard Color"}</span>
                </span>
                <span>•</span>
                <span className="truncate max-w-[200px]">
                  {selectedVariation?.label || "Unstitched Blouse"}
                </span>
              </div>
            </div>
          </div>

          {/* Price & Quantity Review */}
          <div className="bg-gold-50/60 p-4 border border-gold-200/80 flex items-center justify-between text-xs">
            <div>
              <p className="uppercase tracking-wider font-semibold text-stone-800">
                Quantity: <span className="font-bold text-stone-900">{quantity} Piece(s)</span>
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Unit Price: {formatPrice(unitPrice)} (incl. selected blouse option)
              </p>
            </div>
            <div className="text-right">
              <p className="text-[11px] uppercase tracking-wider text-stone-500">
                Total Payable Amount
              </p>
              <p className="text-xl font-bold font-sans text-stone-900">
                {formatPrice(totalPrice)}
              </p>
            </div>
          </div>

          {/* Optional Buyer Fields to Enrich the WhatsApp message */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-wider font-bold text-stone-800">
                Personalize Your Order (Optional):
              </p>
              <span className="text-[11px] text-stone-400 italic">
                Helps our stylist assist you quicker
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1 font-medium">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Ananya Nair"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 text-xs focus:outline-none focus:border-stone-900 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1 font-medium">
                  Delivery Destination
                </label>
                <input
                  type="text"
                  value={deliveryCity}
                  onChange={(e) => setDeliveryCity(e.target.value)}
                  placeholder="City, State / Pincode"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 text-xs focus:outline-none focus:border-stone-900 transition-colors"
                />
              </div>
            </div>

            {/* Custom Measurements / Stitching Notes */}
            {selectedVariation?.additionalPrice > 0 && (
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1 font-medium flex items-center gap-1.5">
                  <Scissors size={12} className="text-gold-600" />
                  <span>Blouse Measurements / Size Preference</span>
                </label>
                <input
                  type="text"
                  value={measurements}
                  onChange={(e) => setMeasurements(e.target.value)}
                  placeholder="e.g. Size 38 (Bust 36, Waist 30) or 'Will send measurements on WhatsApp'"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 text-xs focus:outline-none focus:border-stone-900 transition-colors"
                />
              </div>
            )}

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-stone-600 mb-1 font-medium">
                Special Instructions / Delivery Date
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Need delivery before Dec 15th for engagement"
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 text-xs focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="bg-stone-50 px-6 py-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-stone-500 text-center sm:text-left">
            Opens official WhatsApp. No payment is charged right now.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 border border-stone-300 text-stone-600 hover:text-stone-900 hover:border-stone-400 text-xs uppercase tracking-wider font-semibold transition-colors w-full sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleProceed}
              disabled={isRedirecting}
              className="px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-[0.15em] font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shadow-md w-full sm:w-auto disabled:opacity-75"
            >
              <Send size={14} />
              <span>{isRedirecting ? "Connecting..." : "Open WhatsApp & Order"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
