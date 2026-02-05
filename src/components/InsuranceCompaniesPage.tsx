import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Star,
  ArrowRight,
  Shield,
  Users,
  Award,
  Clock
} from 'lucide-react';

interface InsuranceCompany {
  id: string;
  name: string;
  logo: string;
  type: string;
  rating: number;
  coverage: string[];
  specialties: string[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  benefits: string[];
  color: string;
  status: 'active' | 'partnership' | 'premium';
}

interface InsuranceCompaniesPageProps {
  onNavigate: (page: string) => void;
}

const insuranceCompanies: InsuranceCompany[] = [
  {
    id: '1',
    name: 'التأمين الطبي الشامل',
    logo: '🏥',
    type: 'تأمين صحي شامل',
    rating: 5,
    coverage: ['العلاج الداخلي', 'العلاج الخارجي', 'الطوارئ', 'الأدوية', 'الأشعة'],
    specialties: ['جراحة القلب', 'الأورام', 'طب الأطفال', 'النساء والولادة'],
    contact: {
      phone: '777-111-222',
      email: 'info@comprehensive-insurance.com',
      address: 'عدن - كريتر - شارع الملكة أروى'
    },
    benefits: ['تغطية 100% للطوارئ', 'خصم 20% على العمليات', 'استشارات مجانية'],
    color: 'bg-blue-500',
    status: 'premium'
  },
  {
    id: '2',
    name: 'شركة الوطنية للتأمين',
    logo: '🛡️',
    type: 'تأمين طبي عام',
    rating: 4,
    coverage: ['العلاج الخارجي', 'الطوارئ', 'الفحوصات', 'الأدوية الأساسية'],
    specialties: ['الباطنة', 'العظام', 'العيون', 'الأسنان'],
    contact: {
      phone: '777-333-444',
      email: 'support@national-insurance.ye',
      address: 'عدن - المعلا - مجمع التأمينات'
    },
    benefits: ['تغطية 80% للعلاج', 'شبكة واسعة من المستشفيات', 'خدمة عملاء 24/7'],
    color: 'bg-green-500',
    status: 'active'
  },
  {
    id: '3',
    name: 'أليانز للتأمين',
    logo: '⭐',
    type: 'تأمين طبي دولي',
    rating: 5,
    coverage: ['العلاج المحلي', 'العلاج بالخارج', 'الطوارئ', 'الأدوية المتخصصة'],
    specialties: ['جراحة التجميل', 'طب الأعصاب', 'القلب والأوعية', 'الطب النفسي'],
    contact: {
      phone: '777-555-666',
      email: 'yemen@allianz-care.com',
      address: 'عدن - خور مكسر - المنطقة التجارية'
    },
    benefits: ['تغطية دولية', 'إخلاء طبي', 'علاج تخصصي متقدم'],
    color: 'bg-purple-500',
    status: 'premium'
  },
  {
    id: '4',
    name: 'التأمين العربي',
    logo: '🏛️',
    type: 'تأمين صحي إقليمي',
    rating: 4,
    coverage: ['العلاج العام', 'الطوارئ', 'طب الأسرة', 'الوقاية'],
    specialties: ['طب الأسرة', 'الباطنة', 'الجراحة العامة', 'الأطفال'],
    contact: {
      phone: '777-777-888',
      email: 'info@arab-insurance.com',
      address: 'عدن - الشيخ عثمان - شارع الستين'
    },
    benefits: ['أسعار تنافسية', 'تغطية العائلة', 'برامج الوقاية'],
    color: 'bg-orange-500',
    status: 'active'
  },
  {
    id: '5',
    name: 'تأمين الخليج الطبي',
    logo: '🌊',
    type: 'تأمين طبي خليجي',
    rating: 4,
    coverage: ['العلاج المتخصص', 'الطوارئ', 'الأشعة المتقدمة', 'المختبرات'],
    specialties: ['جراحة القلب', 'زراعة الأعضاء', 'الأورام', 'العقم'],
    contact: {
      phone: '777-999-000',
      email: 'yemen@gulf-medical.com',
      address: 'عدن - البريقة - المجمع الطبي'
    },
    benefits: ['تقنيات متقدمة', 'أطباء خبراء', 'متابعة مستمرة'],
    color: 'bg-teal-500',
    status: 'partnership'
  },
  {
    id: '6',
    name: 'صندوق التأمين الاجتماعي',
    logo: '🤝',
    type: 'تأمين اجتماعي',
    rating: 3,
    coverage: ['الخدمات الأساسية', 'الطوارئ', 'الأدوية المدعومة'],
    specialties: ['الطب العام', 'طب الأسرة', 'الوقاية', 'التطعيمات'],
    contact: {
      phone: '777-444-555',
      email: 'info@social-insurance.gov.ye',
      address: 'عدن - كريتر - مبنى الخدمات الحكومية'
    },
    benefits: ['مدعوم حكومياً', 'أسعار رمزية', 'تغطية شاملة للموظفين'],
    color: 'bg-gray-500',
    status: 'active'
  }
];

export function InsuranceCompaniesPage({ onNavigate }: InsuranceCompaniesPageProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'premium':
        return <Badge className="bg-gold-100 text-gold-800 border-gold-200">شريك مميز</Badge>;
      case 'partnership':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">شراكة</Badge>;
      default:
        return <Badge className="bg-green-100 text-green-800 border-green-200">نشط</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-l from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10 mb-6"
              onClick={() => onNavigate('home')}
            >
              <ArrowRight className="w-4 h-4 ml-2" />
              العودة للرئيسية
            </Button>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-12 h-12" />
              <h1 className="text-4xl md:text-5xl font-bold">شركات التأمين المعتمدة</h1>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              نتعاون مع أفضل شركات التأمين لتوفير أفضل خدمة طبية لك
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6+</div>
                <div className="text-blue-200">شركات تأمين</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-blue-200">معدل الموافقة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">خدمة مستمرة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceCompanies.map((company) => (
              <Card key={company.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl ${company.color}`}>
                        {company.logo}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{company.name}</CardTitle>
                        <p className="text-sm text-gray-600">{company.type}</p>
                      </div>
                    </div>
                    {getStatusBadge(company.status)}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < company.rating 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({company.rating}/5)</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Coverage */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      التغطية الطبية
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {company.coverage.map((item, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-600" />
                      التخصصات
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {company.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-gold-600" />
                      المزايا الخاصة
                    </h4>
                    <ul className="space-y-2">
                      {company.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3">معلومات التواصل</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="arabic-numbers">{company.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-blue-600">{company.contact.email}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                        <span>{company.contact.address}</span>
                      </div>
                    </div>
                  </div>


                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">تحتاج مساعدة في الاختيار؟</h2>
            <p className="text-gray-600 text-lg mb-8">
              فريقنا المختص جاهز لمساعدتك في اختيار أنسب شركة تأمين حسب احتياجاتك
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">اتصل بنا</h3>
                  <p className="text-gray-600 mb-4">استشارة هاتفية مجانية</p>
                  <Button variant="outline" size="sm">
                    777-123-456
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">زيارة المكتب</h3>
                  <p className="text-gray-600 mb-4">استشارة شخصية مفصلة</p>
                  <Button variant="outline" size="sm">
                    حدد موعد
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">خدمة 24/7</h3>
                  <p className="text-gray-600 mb-4">دعم مستمر لجميع الاستفسارات</p>
                  <Button variant="outline" size="sm">
                    دردشة مباشرة
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}