import { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Award, 
  Clock,
  Heart,
  Shield,
  Stethoscope,
  Activity,
  ChevronLeft,
  Star,
  Gift,
  CheckCircle,
  Phone,
  MapPin,
  Mail,
  BookOpen,
  TrendingUp,
  Building2,
  CreditCard,
  FileText,
  ArrowLeft
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string, context?: any) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'الاستشارات الطبية',
      description: 'استشارات طبية شاملة مع أفضل الأطباء المتخصصين',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'طب القلب',
      description: 'رعاية متقدمة لأمراض القلب والأوعية الدموية',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'العمليات الجراحية',
      description: 'عمليات جراحية متقدمة أحدث التقنيات الطبية',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'الطب الوقائي',
      description: 'برامج فحص شاملة للحفاظ على صحتك',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const stats = [
    { number: '15000+', label: 'مريض راضي', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'طبيب متخصص', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'خدمة طوارئ', icon: <Clock className="w-6 h-6" /> },
    { number: '99%', label: 'معدل الشفاء', icon: <Heart className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'فاطمة أحمد',
      role: 'مريضة',
      rating: 5,
      comment: 'خدمة ممتازة وطاقم طبي محترف. أنصح الجميع بالتعامل مع مركز الحياة الطبي.',
      avatar: '👩‍⚕️'
    },
    {
      name: 'محمد علي',
      role: 'مريض',
      rating: 5,
      comment: 'سرعة في الخدمة ودقة في التشخيص. مركز طبي يستحق الثقة.',
      avatar: '👨‍💼'
    },
    {
      name: 'عائشة سالم',
      role: 'مريضة',
      rating: 5,
      comment: 'أطباء متمكنون ومعاملة راقية. تجربة رائعة في العلاج.',
      avatar: '👩‍🎓'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="medical-gradient text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              مركز طبي متقدم
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              رعاية طبية متميزة
              <br />
              <span className="text-blue-200">في قلب صنعاء</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl mx-auto">
              مركز طبي شامل يوفر أحدث الخدمات الطبية والتشخيصية بأعلى معايير الجودة، 
              مع فريق من أمهر الأطباء المتخصصين.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                onClick={() => onNavigate('comprehensive-booking')}
              >
                احجز موعدك الآن
                <ChevronLeft className="w-5 h-5 mr-2 rotate-180" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-black hover:bg-white/10 hover:text-white px-8 py-3 text-lg"
                onClick={() => onNavigate('departments')}
              >
                تصفح الأقسام الطبية
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 arabic-numbers">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-green-200 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="p-8 bg-gradient-to-br from-green-500 to-green-600 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Gift className="w-8 h-8" />
                      <Badge className="bg-white/20 text-white border-white/30">
                        عرض محدود
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      فحص شامل مجاني
                    </h3>
                    <p className="text-green-100 mb-6">
                      احجز الآن واحصل على فحص شامل مجاني يشمل تحليل الدم وقياس الضغط وفحص السكر
                    </p>
                    <div className="flex items-center gap-2 text-green-100 mb-4">
                      <CheckCircle className="w-5 h-5" />
                      <span>صالح حتى نهاية الشهر</span>
                    </div>
                    <Button 
                      className="bg-white text-green-600 hover:bg-green-50"
                      onClick={() => onNavigate('comprehensive-booking')}
                    >
                      احجز الآن واستفد
                      <ArrowLeft className="w-4 h-4 mr-2 rotate-180" />
                    </Button>
                  </div>
                  <div className="p-8 bg-white">
                    <h4 className="text-xl font-bold mb-4">ما تحصل عليه:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>فحص دم شامل</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>قياس ضغط الدم</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>فحص مستوى السكر</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>استشارة طبية</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>تقرير صحي مفصل</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-700">
                        💡 نصيحة: الفحص المبكر يساعد في الوقاية من الأمراض
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا الطبية</h2>
            <p className="text-gray-600 text-lg">
              نقدم مجموعة شاملة من الخدمات الطبية المتخصصة لضمان صحتك وعافيتك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${service.color} group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ابدأ رحلتك الطبية</h2>
              <p className="text-gray-600 text-lg">
                خطوات بسيطة للحصول على أفضل رعاية طبية
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('departments')}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Stethoscope className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>اختر التخصص</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">تصفح الأقسام الطبية المختلفة واختر التخصص المناسب لحالتك</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('doctors')}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle>اختر الطبيب</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">تصفح ملفات الأطباء المتخصصين واختر الطبيب الأنسب لك</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('comprehensive-booking')}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle>احجز موعدك</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">اختر الوقت المناسب لك واحجز موعدك بسهولة عبر المنصة</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Insurance Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">الشركاء وشركات التأمين</h2>
            <p className="text-gray-600 text-lg">
              نتعامل مع أفضل شركات التأمين والشركاء لتقديم خدمات متميزة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  شركات التأمين المعتمدة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    <span>التأمين الطبي الشامل</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Building2 className="w-6 h-6 text-green-600" />
                    <span>شركة الوطنية للتأمين</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <Building2 className="w-6 h-6 text-purple-600" />
                    <span>أليانز للتأمين</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <Building2 className="w-6 h-6 text-orange-600" />
                    <span>التأمين العربي</span>
                  </div>
                </div>
                <div className="text-center">
                  <Button 
                    variant="outline"
                    onClick={() => onNavigate('insurance-companies')}
                  >
                    عرض جميع الشركات
                    <ChevronLeft className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-600" />
                  شركاء النجاح
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Heart className="w-6 h-6 text-red-600" />
                    <div>
                      <p className="font-medium">مؤسسة القلب اليمني</p>
                      <p className="text-sm text-gray-600">شريك في أمراض القلب</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Activity className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium">مركز الأشعة المتقدم</p>
                      <p className="text-sm text-gray-600">شريك في التشخيص</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Shield className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-medium">معهد الطب الوقائي</p>
                      <p className="text-sm text-gray-600">شريك في الوقاية</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">نصائح صحية ومقالات طبية</h2>
            <p className="text-gray-600 text-lg">
              معلومات طبية موثوقة ونصائح صحية من خبرائنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>الوقاية من أمراض القلب</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  تعرف على أهم الطرق للحفاظ على صحة القلب والوقاية من الأمراض القلبية.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>د. أحمد السالمي</span>
                  <span className="arabic-numbers">5 دقائق قراءة</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>التغذية الصحية</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  دليل شامل للتغذية الصحية وكيفية اختيار الأطعمة المناسبة لصحة أفضل.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>د. فاطمة الحكيمي</span>
                  <span className="arabic-numbers">8 دقائق قراءة</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>أهمية الفحص الدوري</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  لماذا يعتبر الفحص الدوري ضرورياً للكشف المبكر عن الأمراض؟
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>د. خالد الشامي</span>
                  <span className="arabic-numbers">6 دقائق قراءة</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <BookOpen className="w-5 h-5 ml-2" />
              عرض جميع المقالات
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">آراء مرضانا</h2>
            <p className="text-gray-600 text-lg">
              تجارب حقيقية من مرضى استفادوا من خدماتنا الطبية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div className="text-right">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">تواصل معنا</h2>
              <p className="text-gray-600 text-lg">
                نحن هنا لخدمتك على مدار الساعة
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>اتصل بنا</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600">خدمة العملاء</p>
                  <p className="font-bold arabic-numbers">733-456-789</p>
                  <p className="text-gray-600">الطوارئ</p>
                  <p className="font-bold arabic-numbers text-red-600">770-888-999</p>
                  <p className="text-sm text-gray-500">متاح 24/7</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle>موقعنا</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600">صنعاء - شارع الزبيري</p>
                  <p className="font-medium">مقابل جامعة صنعاء</p>
                  <p className="text-gray-600">بجانب مجمع صنعاء الطبي</p>
                  <Button variant="outline" size="sm" className="mt-3">
                    عرض على الخريطة
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle>راسلنا</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600">البريد الإلكتروني</p>
                  <p className="font-medium">info@alhayat-mc.com</p>
                  <p className="text-gray-600">للشكاوى والاقتراحات</p>
                  <p className="font-medium">support@alhayat-mc.com</p>
                  <Button variant="outline" size="sm" className="mt-3">
                    أرسل رسالة
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 medical-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            هل تحتاج للمساعدة الطبية؟
          </h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            فريق طبي متخصص جاهز لخدمتك على مدار الساعة. احجز استشارتك الطبية الآن
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3"
              onClick={() => onNavigate('comprehensive-booking')}
            >
              احجز موعدك الآن
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-3"
            >
              <span className="arabic-numbers">اتصل بنا: 733-456-789</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}