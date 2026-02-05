import { 
  Heart, 
  Brain, 
  Eye, 
  Bone, 
  Baby, 
  Activity,
  Stethoscope,
  Microscope,
  Pill,
  UserCheck,
  ChevronLeft,
  Phone
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface DepartmentsPageProps {
  onNavigate: (page: string, context?: any) => void;
}

export function DepartmentsPage({ onNavigate }: DepartmentsPageProps) {
  const departments = [
    {
      id: 'cardiology',
      name: 'أمراض القلب',
      description: 'تشخيص وعلاج أمراض القلب والأوعية الدموية بأحدث التقنيات الطبية',
      icon: <Heart className="w-8 h-8" />,
      color: 'bg-red-100 text-red-600 border-red-200',
      doctors: 8,
      services: ['تخطيط القلب', 'قسطرة القلب', 'جراحة القلب المفتوح', 'زراعة جهاز تنظيم ضربات القلب'],
      availability: 'متاح على مدار الساعة',
      emergencyAvailable: true
    },
    {
      id: 'neurology',
      name: 'الأمراض العصبية',
      description: 'علاج اضطرابات الجهاز العصبي والدماغ والحبل الشوكي',
      icon: <Brain className="w-8 h-8" />,
      color: 'bg-purple-100 text-purple-600 border-purple-200',
      doctors: 6,
      services: ['تخطيط الدماغ', 'الرنين المغناطيسي', 'علاج الصرع', 'علاج الشقيقة'],
      availability: '8:00 ص - 8:00 م',
      emergencyAvailable: true
    },
    {
      id: 'ophthalmology',
      name: 'طب العيون',
      description: 'فحص وعلاج جميع أمراض العين والجراحات الدقيقة للعيون',
      icon: <Eye className="w-8 h-8" />,
      color: 'bg-blue-100 text-blue-600 border-blue-200',
      doctors: 5,
      services: ['فحص النظر', 'جراحة الماء الأبيض', 'علاج الجلوكوما', 'زراعة العدسات'],
      availability: '8:00 ص - 6:00 م',
      emergencyAvailable: true
    },
    {
      id: 'orthopedics',
      name: 'العظام والمفاصل',
      description: 'تشخيص وعلاج إصابات العظام والمفاصل والعمود الفقري',
      icon: <Bone className="w-8 h-8" />,
      color: 'bg-green-100 text-green-600 border-green-200',
      doctors: 7,
      services: ['جراحة العظام', 'تقويم العمود الفقري', 'علاج الكسور', 'استبدال المفاصل'],
      availability: '7:00 ص - 9:00 م',
      emergencyAvailable: true
    },
    {
      id: 'pediatrics',
      name: 'طب الأطفال',
      description: 'رعاية طبية شاملة للأطفال من الولادة حتى سن المراهقة',
      icon: <Baby className="w-8 h-8" />,
      color: 'bg-pink-100 text-pink-600 border-pink-200',
      doctors: 9,
      services: ['فحص الأطفال الدوري', 'التطعيمات', 'علاج أمراض الطفولة', 'استشارات النمو'],
      availability: '24/7 متاح دائماً',
      emergencyAvailable: true
    },
    {
      id: 'internal',
      name: 'الطب الباطني',
      description: 'تشخيص وعلاج الأمراض الباطنية والحالات الطبية المعقدة',
      icon: <Stethoscope className="w-8 h-8" />,
      color: 'bg-indigo-100 text-indigo-600 border-indigo-200',
      doctors: 10,
      services: ['فحص شامل', 'علاج السكري', 'علاج ضغط الدم', 'أمراض الجهاز الهضمي'],
      availability: '6:00 ص - 10:00 م',
      emergencyAvailable: true
    },
    {
      id: 'laboratory',
      name: 'المختبر الطبي',
      description: 'تحاليل طبية دقيقة وسريعة باستخدام أحدث الأجهزة',
      icon: <Microscope className="w-8 h-8" />,
      color: 'bg-teal-100 text-teal-600 border-teal-200',
      doctors: 4,
      services: ['تحاليل الدم', 'فحص البو', 'زراعة البكتيريا', 'تحاليل الهرمونات'],
      availability: '24/7 متاح دائماً',
      emergencyAvailable: false
    },
    {
      id: 'pharmacy',
      name: 'الصيدلية',
      description: 'صيدلية مجهزة بجميع الأدوية والمستلزمات الطبية',
      icon: <Pill className="w-8 h-8" />,
      color: 'bg-orange-100 text-orange-600 border-orange-200',
      doctors: 3,
      services: ['الأدوية المزمنة', 'المكملات الغذائية', 'مستلزمات طبية', 'استشارات دوائية'],
      availability: '24/7 متاح دائماً',
      emergencyAvailable: false
    },
    {
      id: 'radiology',
      name: 'الأشعة والتصوير',
      description: 'أشعة تشخيصية متقدمة بأحدث أجهزة التصوير الطبي',
      icon: <Activity className="w-8 h-8" />,
      color: 'bg-gray-100 text-gray-600 border-gray-200',
      doctors: 5,
      services: ['الأشعة السينية', 'الرنين المغناطيسي', 'الأشعة المقطعية', 'الموجات فوق الصوتية'],
      availability: '6:00 ص - 12:00 م',
      emergencyAvailable: true
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-600">الأقسام الطبية</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">أقسامنا الطبية المتخصصة</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            مجموعة شاملة من التخصصات الطبية بأحدث التقنيات وأمهر الأطباء 
            لضمان أفضل رعاية طبية لك ولعائلتك
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-blue-600 mb-2 arabic-numbers">9</div>
            <div className="text-gray-600">أقسام طبية</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-blue-600 mb-2 arabic-numbers">57+</div>
            <div className="text-gray-600">طبيب متخصص</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-blue-600 mb-2 arabic-numbers">24/7</div>
            <div className="text-gray-600">خدمة طوارئ</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-blue-600 mb-2 arabic-numbers">98%</div>
            <div className="text-gray-600">رضا المرضى</div>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {departments.map((dept) => (
            <Card key={dept.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${dept.color} group-hover:scale-110 transition-transform`}>
                    {dept.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    {dept.emergencyAvailable && (
                      <Badge variant="destructive" className="text-xs">
                        طوارئ متاح
                      </Badge>
                    )}
                    <Badge variant="secondary" className="text-xs arabic-numbers">
                      {dept.doctors} أطباء
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {dept.name}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {dept.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">الخدمات المتاحة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.services.slice(0, 3).map((service, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                      {dept.services.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{dept.services.length - 3} المزيد
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <UserCheck className="w-4 h-4" />
                        <span>{dept.availability}</span>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => onNavigate('comprehensive-booking', {
                        selectedService: 'doctor-consultation',
                        selectedSpecialty: dept.id,
                        startStep: 3
                      })}
                    >
                      احجز موعد
                      <ChevronLeft className="w-4 h-4 mr-2 rotate-180" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                هل تواجه حالة طارئة؟
              </h3>
              <p className="text-red-700">
                اتصل بنا فوراً أو توجه إلى قسم الطوارئ. نحن متاحون على مدار الساعة لخدمتك.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Button className="bg-red-600 hover:bg-red-700 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="arabic-numbers">770-888-999</span>
              </Button>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                قسم الطوارئ
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            لا تجد القسم المناسب؟
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            تحدث مع فريق الاستقبال لدينا وسنساعدك في العثور على التخصص المناسب لحالتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('doctors')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              تصفح الأطباء
              <ChevronLeft className="w-5 h-5 mr-2 rotate-180" />
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="w-4 h-4 ml-2" />
              <span className="arabic-numbers">اتصل بنا: 733-456-789</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}