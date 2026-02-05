import { Phone, Truck } from 'lucide-react';

export function EmergencyBanner() {
  return (
    <div className="emergency-banner text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            <span>طوارئ 24/7</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="arabic-numbers">للحالات الطارئة اتصل: 770-888-999</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span>خدمة طبية متميزة على مدار الساعة</span>
        </div>
      </div>
    </div>
  );
}