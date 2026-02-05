import { useState } from 'react';
import { 
  Search, 
  Star, 
  Calendar, 
  MapPin, 
  Phone,
  ChevronLeft,
  Filter,
  User,
  Clock,
  Award,
  BookOpen,
  Languages
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DoctorsPageProps {
  onNavigate: (page: string, context?: any) => void;
}

export function DoctorsPage({ onNavigate }: DoctorsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');

  const doctors = [
    {
      id: 1,
      name: 'د. أحمد محمد السالمي',
      specialty: 'أمراض القلب والأوعية الدموية',
      specialtyEn: 'cardiology',
      experience: 15,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      location: 'الطابق الثاني - جناح القلب',
      phone: '+967-777-123-401',
      languages: ['العربية', 'الإنجليزية'],
      education: ['دكتوراه في طب القلب - جامعة القاهرة', 'ماجستير في الطب الباطني - جامعة دمشق'],
      availability: 'متاح اليوم',
      nextSlot: '10:30 ص',
      consultationFee: 5000,
      about: 'طبيب قلب متخصص مع خبرة واسعة في علاج أمراض القلب والأوعية الدموية. حاصل على شهادات دولية في جراحة القلب.',
      achievements: ['أفضل طبيب قلب لعام 2023', 'عضو الجمعية الأوروبية لأمراض القلب']
    },
    {
      id: 2,
      name: 'د. فاطمة علي الحكيمي',
      specialty: 'طب الأطفال والمراهقين',
      specialtyEn: 'pediatrics',
      experience: 12,
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1594824411221-7395e6b61b6e?w=300&h=300&fit=crop&crop=face',
      location: 'الطابق الأول - قسم الأطفال',
      phone: '+967-777-123-402',
      languages: ['العربية', 'الإنجليزية', 'الفرنسية'],
      education: ['دكتوراه في طب الأطفال - جامعة عين شمس', 'دبلوم في طب حديثي الولادة - لندن'],
      availability: 'متاح اليوم',
      nextSlot: '2:00 م',
      consultationFee: 4000,
      about: 'طبيبة أطفال متخصصة في رعاية الأطفال من الولادة حتى سن المراهقة. خبرة واسعة في علاج أمراض الطفولة.',
      achievements: ['جائزة أفضل طبيبة أطفال 2022', 'عضو الجمعية العربية لطب الأطفال']
    },
    {
      id: 3,
      name: 'د. خالد أحمد الشامي',
      specialty: 'جراحة العظام والمفاصل',
      specialtyEn: 'orthopedics',
      experience: 18,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      location: 'الطابق الثالث - قسم العظام',
      phone: '+967-777-123-403',
      languages: ['العربية', 'الإنجليزية'],
      education: ['دكتوراه في جراحة العظام - جامعة الإسكندرية', 'زمالة في جراحة المفاصل - كندا'],
      availability: 'متاح غداً',
      nextSlot: '9:00 ص',
      consultationFee: 6000,
      about: 'جراح عظام متخصص في جراحة المفاصل والعمود الفقري. خبرة واسعة في العمليات المعقدة واستبدال المفاصل.',
      achievements: ['أفضل جراح عظام في المنطقة', 'رائد في تقنيات الجراحة بالمنظار']
    },
    {
      id: 4,
      name: 'د. مريم سالم البحيري',
      specialty: 'طب العيون وجراحة الليزر',
      specialtyEn: 'ophthalmology',
      experience: 10,
      rating: 4.7,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
      location: 'الطابق الثاني - قسم العيون',
      phone: '+967-777-123-404',
      languages: ['العربية', 'الإنجليزية'],
      education: ['دكتوراه في طب العيون - جامعة دمشق', 'دبلوم في جراحة الليزر - ألمانيا'],
      availability: 'متاح اليوم',
      nextSlot: '11:15 ص',
      consultationFee: 4500,
      about: 'طبيبة عيون متخصصة في جراحة الليزر وعلاج أمراض الشبكية. خبرة واسعة في العمليات الدقيقة للعيون.',
      achievements: ['متخصصة في جراحة الماء الأبيض', 'خبيرة في علاج أمراض الشبكية']
    },
    {
      id: 5,
      name: 'د. يوسف محمد العامري',
      specialty: 'الأمراض العصبية والدماغ',
      specialtyEn: 'neurology',
      experience: 20,
      rating: 4.9,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face',
      location: 'الطابق الرابع - قسم الأعصاب',
      phone: '+967-777-123-405',
      languages: ['العربية', 'الإنجليزية', 'الألمانية'],
      education: ['دكتوراه في الأمراض العصبية - جامعة برلين', 'ماجستير في علوم الأعصاب - أمريكا'],
      availability: 'متاح بعد غد',
      nextSlot: '1:30 م',
      consultationFee: 7000,
      about: 'طبيب أعصاب متخصص في علاج أمراض الدماغ والجهاز العصبي. خبرة دولية في علاج الحالات المعقدة.',
      achievements: ['خبير دولي في علاج الصرع', 'رئيس قسم الأعصاب السابق']
    },
    {
      id: 6,
      name: 'د. نادية حسن القاضي',
      specialty: 'أمراض النساء والولادة',
      specialtyEn: 'gynecology',
      experience: 14,
      rating: 4.8,
      reviews: 298,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&crop=face',
      location: 'الطابق الثاني - قسم النساء',
      phone: '+967-777-123-406',
      languages: ['العربية', 'الإنجليزية'],
      education: ['دكتوراه في أمراض النساء - جامعة القاهرة', 'زمالة في طب الأجنة - فرنسا'],
      availability: 'متاح اليوم',
      nextSlot: '3:45 م',
      consultationFee: 5500,
      about: 'طبيبة نساء وولادة متخصصة في الحمل عالي الخطورة ومتابعة الحوامل. خبرة واسعة في العمليات النسائية.',
      achievements: ['أفضل طبيبة نساء وولادة 2023', 'خبيرة في طب الأجنة والوراثة']
    }
  ];

  const specialties = [
    { value: 'all', label: 'جميع التخصصات' },
    { value: 'cardiology', label: 'أمراض القلب' },
    { value: 'pediatrics', label: 'طب الأطفال' },
    { value: 'orthopedics', label: 'جراحة العظام' },
    { value: 'ophthalmology', label: 'طب العيون' },
    { value: 'neurology', label: 'الأمراض العصبية' },
    { value: 'gynecology', label: 'أمراض النساء' }
  ];

  const availabilityOptions = [
    { value: 'all', label: 'جميع الأوقات' },
    { value: 'today', label: 'متاح اليوم' },
    { value: 'tomorrow', label: 'متاح غداً' },
    { value: 'week', label: 'متاح هذا الأسبوع' }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialtyEn === selectedSpecialty;
    const matchesAvailability = selectedAvailability === 'all' || 
                               (selectedAvailability === 'today' && doctor.availability === 'متاح اليوم') ||
                               (selectedAvailability === 'tomorrow' && doctor.availability === 'متاح غداً');
    
    return matchesSearch && matchesSpecialty && matchesAvailability;
  });

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-600">الأطباء المتخصصون</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">فريق الأطباء المتميز</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            نخبة من أمهر الأطباء المتخصصين بخبرات واسعة ومؤهلات عالمية 
            لتقديم أفضل رعاية طبية لك ولعائلتك
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="ابحث باسم الطبيب أو التخصص..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
            </div>
            <div>
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger>
                  <SelectValue placeholder="التخصص" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty.value} value={specialty.value}>
                      {specialty.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                <SelectTrigger>
                  <SelectValue placeholder="التوفر" />
                </SelectTrigger>
                <SelectContent>
                  {availabilityOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            تم العثور على <span className="font-semibold arabic-numbers">{filteredDoctors.length}</span> طبيب
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <ImageWithFallback
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-blue-100"
                    />
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-1">{doctor.name}</CardTitle>
                        <CardDescription className="text-blue-600 font-medium mb-2">
                          {doctor.specialty}
                        </CardDescription>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            <span className="arabic-numbers">{doctor.experience} سنة خبرة</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="arabic-numbers">{doctor.rating}</span>
                            <span className="arabic-numbers">({doctor.reviews} تقييم)</span>
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant={doctor.availability === 'متاح اليوم' ? 'default' : 'secondary'}
                        className={doctor.availability === 'متاح اليوم' ? 'bg-green-100 text-green-700' : ''}
                      >
                        {doctor.availability}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* About */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {doctor.about}
                  </p>

                  {/* Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>أقرب موعد: {doctor.nextSlot}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Languages className="w-4 h-4" />
                      <span>{doctor.languages.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="arabic-numbers">رسوم الكشف: {doctor.consultationFee.toLocaleString()} ريال</span>
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      المؤهلات العلمية
                    </h4>
                    <div className="space-y-1">
                      {doctor.education.map((edu, idx) => (
                        <p key={idx} className="text-xs text-gray-600">• {edu}</p>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-medium mb-2">الإنجازات والجوائز</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.achievements.map((achievement, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t">
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => onNavigate('comprehensive-booking', {
                        selectedService: 'doctor-consultation',
                        selectedSpecialty: doctor.specialtyEn,
                        selectedDoctor: doctor.id.toString(),
                        startStep: 4
                      })}
                    >
                      احجز موعد
                      <Calendar className="w-4 h-4 mr-2" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <User className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">لم يتم العثور على أطباء</h3>
            <p className="text-gray-600 mb-4">جرب تعديل معايير البحث أو المرشحات</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('all');
                setSelectedAvailability('all');
              }}
            >
              إعادة تعيين المرشحات
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            هل تحتاج مساعدة في اختيار الطبيب المناسب؟
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            فريق الاستقبال لدينا جاهز لمساعدتك في العثور على الطبيب الأنسب لحالتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="w-4 h-4 ml-2" />
              <span className="arabic-numbers">اتصل بنا: 777-123-456</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigate('comprehensive-booking')}
            >
              احجز استشارة عامة
              <ChevronLeft className="w-5 h-5 mr-2 rotate-180" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}