import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CreditCard, 
  CheckCircle, 
  ArrowRight,
  ArrowLeft,
  Stethoscope,
  Heart,
  Baby,
  Eye,
  Brain,
  Bone,
  Microscope,
  ChevronLeft,
  MapPin,
  Star,
  Award,
  Users
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ComprehensiveBookingProps {
  onNavigate: (page: string, context?: any) => void;
  bookingContext?: any;
}

export function ComprehensiveBooking({ onNavigate, bookingContext }: ComprehensiveBookingProps) {
  // Initialize state based on booking context
  const [currentStep, setCurrentStep] = useState(bookingContext?.startStep || 1);
  const [selectedService, setSelectedService] = useState(bookingContext?.selectedService || '');
  const [selectedSpecialty, setSelectedSpecialty] = useState(bookingContext?.selectedSpecialty || '');
  const [selectedDoctor, setSelectedDoctor] = useState(bookingContext?.selectedDoctor || '');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    gender: '',
    notes: ''
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const services = [
    {
      id: 'doctor-consultation',
      title: 'استشارة طبية',
      description: 'موعد مع طبيب متخصص',
      icon: <Stethoscope className="w-6 h-6" />,
      price: 'من 3000 ريال',
      duration: '30-45 دقيقة',
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  const specialties = [
    {
      id: 'cardiology',
      name: 'أمراض القلب',
      icon: <Heart className="w-6 h-6" />,
      doctorsCount: 8,
      avgWait: '15 دقيقة',
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 'pediatrics',
      name: 'طب الأطفال',
      icon: <Baby className="w-6 h-6" />,
      doctorsCount: 9,
      avgWait: '10 دقيقة',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      id: 'ophthalmology',
      name: 'طب العيون',
      icon: <Eye className="w-6 h-6" />,
      doctorsCount: 5,
      avgWait: '20 دقيقة',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'neurology',
      name: 'الأمراض العصبية',
      icon: <Brain className="w-6 h-6" />,
      doctorsCount: 6,
      avgWait: '25 دقيقة',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 'orthopedics',
      name: 'جراحة العظام',
      icon: <Bone className="w-6 h-6" />,
      doctorsCount: 7,
      avgWait: '18 دقيقة',
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'internal',
      name: 'الطب الباطني',
      icon: <Stethoscope className="w-6 h-6" />,
      doctorsCount: 10,
      avgWait: '12 دقيقة',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const doctors = [
    {
      id: 1,
      name: 'د. أحمد محمد السالمي',
      specialty: 'أمراض القلب',
      specialtyId: 'cardiology',
      rating: 4.9,
      reviews: 234,
      experience: 15,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      consultationFee: 5000,
      nextAvailable: 'اليوم',
      languages: ['العربية', 'الإنجليزية']
    },
    {
      id: 2,
      name: 'د. فاطمة علي الحكيمي',
      specialty: 'طب الأطفال',
      specialtyId: 'pediatrics',
      rating: 4.8,
      reviews: 189,
      experience: 12,
      image: 'https://images.unsplash.com/photo-1594824411221-7395e6b61b6e?w=150&h=150&fit=crop&crop=face',
      consultationFee: 4000,
      nextAvailable: 'اليوم',
      languages: ['العربية', 'الإنجليزية', 'الفرنسية']
    },
    {
      id: 3,
      name: 'د. مريم سالم البحيري',
      specialty: 'طب العيون',
      specialtyId: 'ophthalmology',
      rating: 4.7,
      reviews: 203,
      experience: 10,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
      consultationFee: 4500,
      nextAvailable: 'اليوم',
      languages: ['العربية', 'الإنجليزية']
    }
  ];

  const availableDates = [
    { date: '2024-01-15', dayName: 'الاثنين', slots: 12 },
    { date: '2024-01-16', dayName: 'الثلاثاء', slots: 8 },
    { date: '2024-01-17', dayName: 'الأربعاء', slots: 15 },
    { date: '2024-01-18', dayName: 'الخميس', slots: 6 },
    { date: '2024-01-19', dayName: 'الجمعة', slots: 10 }
  ];

  const timeSlots = {
    morning: {
      id: 'morning',
      name: 'الفترة الصباحية',
      time: '8:00 ص - 12:00 م',
      booked: 5,
      total: 20,
      available: true,
      description: 'مواعيد الفترة الصباحية من 8 صباحاً حتى 12 ظهراً'
    },
    evening: {
      id: 'evening', 
      name: 'الفترة المسائية',
      time: '4:00 م - 9:00 م',
      booked: 12,
      total: 20,
      available: true,
      description: 'مواعيد الفترة المسائية من 4 عصراً حتى 9 مساءً'
    }
  };

  const filteredDoctors = selectedSpecialty 
    ? doctors.filter(doc => doc.specialtyId === selectedSpecialty)
    : doctors;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    const minStep = bookingContext?.startStep || 1;
    if (currentStep > minStep) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canContinue = () => {
    switch (currentStep) {
      case 1: return selectedService !== '';
      case 2: return selectedSpecialty !== '';
      case 3: return selectedDoctor !== '';
      case 4: return selectedDate !== '' && selectedTime !== '';
      case 5: return patientInfo.name && patientInfo.phone;
      default: return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">اختر نوع الخدمة</h2>
              <p className="text-gray-600">ما نوع الاستشارة التي تحتاجها؟</p>
            </div>
            <div className="grid gap-4">
              {services.map((service) => (
                <Card 
                  key={service.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedService === service.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${service.color}`}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{service.title}</h3>
                          <p className="text-gray-600 mb-2">{service.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{service.duration}</span>
                            <span className="arabic-numbers">{service.price}</span>
                          </div>
                        </div>
                      </div>
                      {selectedService === service.id && (
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">اختر التخصص الطبي</h2>
              <p className="text-gray-600">ما هو التخصص الذي تحتاج استشارة فيه؟</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specialties.map((specialty) => (
                <Card 
                  key={specialty.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedSpecialty === specialty.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setSelectedSpecialty(specialty.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${specialty.color}`}>
                          {specialty.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold">{specialty.name}</h3>
                          <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                            <span className="arabic-numbers">{specialty.doctorsCount} أطباء</span>
                            <span>انتظار: {specialty.avgWait}</span>
                          </div>
                        </div>
                      </div>
                      {selectedSpecialty === specialty.id && (
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">اختر الطبيب</h2>
              <p className="text-gray-600">اختر الطبيب الذي تفضل الاستشارة معه</p>
            </div>
            <div className="grid gap-4">
              {filteredDoctors.map((doctor) => (
                <Card 
                  key={doctor.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedDoctor === doctor.id.toString() ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setSelectedDoctor(doctor.id.toString())}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <ImageWithFallback
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-lg">{doctor.name}</h3>
                          <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="arabic-numbers">{doctor.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Award className="w-4 h-4" />
                              <span className="arabic-numbers">{doctor.experience} سنة خبرة</span>
                            </div>
                            <Badge variant="outline" className="arabic-numbers">
                              {doctor.consultationFee.toLocaleString()} ريال
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs text-gray-500">اللغات:</span>
                            <span className="text-xs text-gray-600">{doctor.languages.join(', ')}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-left">
                        {selectedDoctor === doctor.id.toString() && (
                          <CheckCircle className="w-6 h-6 text-blue-600 mb-2" />
                        )}
                        <Badge className="bg-green-100 text-green-700">
                          متاح {doctor.nextAvailable}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">اختر التاريخ والوقت</h2>
              <p className="text-gray-600">متى تريد موعدك؟</p>
            </div>
            
            {/* Date Selection */}
            <div>
              <h3 className="font-semibold mb-4">اختر التاريخ</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {availableDates.map((dateOption) => (
                  <Card 
                    key={dateOption.date}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedDate === dateOption.date ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                    }`}
                    onClick={() => setSelectedDate(dateOption.date)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-sm text-gray-600">{dateOption.dayName}</div>
                      <div className="font-semibold text-lg">
                        {new Date(dateOption.date).getDate()}
                      </div>
                      <div className="text-xs text-gray-500 arabic-numbers">
                        {dateOption.slots} مواعيد متاحة
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <div>
                <h3 className="font-semibold mb-4">اختر الفترة المناسبة</h3>
                <p className="text-gray-600 text-sm mb-6">
                  اختر الفترة التي تناسبك وسيتم تحديد الوقت المحدد لاحقاً
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Morning Period */}
                  <Card 
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedTime === 'morning' ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                    } ${!timeSlots.morning.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => timeSlots.morning.available && setSelectedTime('morning')}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                            <span className="text-orange-600 text-xl">🌅</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{timeSlots.morning.name}</h4>
                            <p className="text-gray-600 text-sm arabic-numbers">{timeSlots.morning.time}</p>
                          </div>
                        </div>
                        {selectedTime === 'morning' && (
                          <CheckCircle className="w-6 h-6 text-blue-600" />
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {timeSlots.morning.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">المواعيد المتاحة</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="outline" 
                            className={`arabic-numbers ${
                              timeSlots.morning.total - timeSlots.morning.booked > 5 
                                ? 'text-green-700 border-green-300' 
                                : timeSlots.morning.total - timeSlots.morning.booked > 2
                                ? 'text-yellow-700 border-yellow-300'
                                : 'text-red-700 border-red-300'
                            }`}
                          >
                            {timeSlots.morning.booked}/{timeSlots.morning.total}
                          </Badge>
                          <span className="text-xs text-gray-500 arabic-numbers">
                            متبقي: {timeSlots.morning.total - timeSlots.morning.booked}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all ${
                              (timeSlots.morning.booked / timeSlots.morning.total) > 0.8 
                                ? 'bg-red-500' 
                                : (timeSlots.morning.booked / timeSlots.morning.total) > 0.6
                                ? 'bg-yellow-500'
                                : 'bg-green-500'
                            }`}
                            style={{ width: `${(timeSlots.morning.booked / timeSlots.morning.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Evening Period */}
                  <Card 
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedTime === 'evening' ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                    } ${!timeSlots.evening.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => timeSlots.evening.available && setSelectedTime('evening')}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 text-xl">🌙</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{timeSlots.evening.name}</h4>
                            <p className="text-gray-600 text-sm arabic-numbers">{timeSlots.evening.time}</p>
                          </div>
                        </div>
                        {selectedTime === 'evening' && (
                          <CheckCircle className="w-6 h-6 text-blue-600" />
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {timeSlots.evening.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">المواعيد المتاحة</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="outline" 
                            className={`arabic-numbers ${
                              timeSlots.evening.total - timeSlots.evening.booked > 5 
                                ? 'text-green-700 border-green-300' 
                                : timeSlots.evening.total - timeSlots.evening.booked > 2
                                ? 'text-yellow-700 border-yellow-300'
                                : 'text-red-700 border-red-300'
                            }`}
                          >
                            {timeSlots.evening.booked}/{timeSlots.evening.total}
                          </Badge>
                          <span className="text-xs text-gray-500 arabic-numbers">
                            متبقي: {timeSlots.evening.total - timeSlots.evening.booked}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all ${
                              (timeSlots.evening.booked / timeSlots.evening.total) > 0.8 
                                ? 'bg-red-500' 
                                : (timeSlots.evening.booked / timeSlots.evening.total) > 0.6
                                ? 'bg-yellow-500'
                                : 'bg-green-500'
                            }`}
                            style={{ width: `${(timeSlots.evening.booked / timeSlots.evening.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {selectedTime && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 text-blue-800">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">تم اختيار {timeSlots[selectedTime].name}</span>
                    </div>
                    <p className="text-blue-700 text-sm mt-1">
                      سيتم تحديد الوقت المحدد معك عبر الهاتف قبل الموعد بـ 24 ساعة
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">معلومات المريض</h2>
              <p className="text-gray-600">أدخل معلوماتك الشخصية لإتمام الحجز</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">الاسم الكامل *</Label>
                <Input
                  id="name"
                  placeholder="أدخل اسمك الكامل"
                  value={patientInfo.name}
                  onChange={(e) => setPatientInfo({...patientInfo, name: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="phone">رقم الهاتف *</Label>
                <Input
                  id="phone"
                  placeholder="+967-xxx-xxx-xxx"
                  value={patientInfo.phone}
                  onChange={(e) => setPatientInfo({...patientInfo, phone: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={patientInfo.email}
                  onChange={(e) => setPatientInfo({...patientInfo, email: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="age">العمر</Label>
                <Input
                  id="age"
                  placeholder="25"
                  value={patientInfo.age}
                  onChange={(e) => setPatientInfo({...patientInfo, age: e.target.value})}
                />
              </div>
              
              <div>
                <Label>الجنس</Label>
                <RadioGroup 
                  value={patientInfo.gender} 
                  onValueChange={(value) => setPatientInfo({...patientInfo, gender: value})}
                  className="flex gap-6 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">ذكر</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">أنثى</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            <div>
              <Label htmlFor="notes">ملاحظات إضافية</Label>
              <Textarea
                id="notes"
                placeholder="اكتب أي ملاحظات أو أعراض تريد إخبار الطبيب بها..."
                value={patientInfo.notes}
                onChange={(e) => setPatientInfo({...patientInfo, notes: e.target.value})}
                rows={4}
              />
            </div>

            {/* Booking Summary */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">ملخص الحجز</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>نوع الخدمة:</span>
                    <span>{services.find(s => s.id === selectedService)?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>التخصص:</span>
                    <span>{specialties.find(s => s.id === selectedSpecialty)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الطبيب:</span>
                    <span>{filteredDoctors.find(d => d.id.toString() === selectedDoctor)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>التاريخ:</span>
                    <span className="arabic-numbers">
                      {selectedDate && availableDates.find(d => d.date === selectedDate)?.dayName} - {new Date(selectedDate).getDate()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>الفترة:</span>
                    <span>{selectedTime === 'morning' ? timeSlots.morning.name : timeSlots.evening.name}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-semibold">
                    <span>إجمالي الرسوم:</span>
                    <span className="arabic-numbers">
                      {filteredDoctors.find(d => d.id.toString() === selectedDoctor)?.consultationFee.toLocaleString()} ريال
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">حجز موعد جديد</h1>
            <span className="text-sm text-gray-600 arabic-numbers">
              الخطوة {currentStep} من {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
          
          {/* Show selected context if any */}
          {bookingContext && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 text-sm text-blue-800">
                <CheckCircle className="w-4 h-4" />
                <span>تم الاختيار مسبقاً:</span>
                {bookingContext.selectedSpecialty && (
                  <Badge variant="outline" className="text-blue-700">
                    {specialties.find(s => s.id === bookingContext.selectedSpecialty)?.name}
                  </Badge>
                )}
                {bookingContext.selectedDoctor && (
                  <Badge variant="outline" className="text-blue-700">
                    {filteredDoctors.find(d => d.id.toString() === bookingContext.selectedDoctor)?.name}
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Step Content */}
        <Card className="mb-8">
          <CardContent className="p-8">
            {renderStepContent()}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={prevStep}
            disabled={currentStep === (bookingContext?.startStep || 1)}
            className="flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4" />
            السابق
          </Button>
          
          {currentStep === totalSteps ? (
            <Button 
              className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
              disabled={!canContinue()}
              onClick={() => {
                // Handle booking confirmation
                alert('تم تأكيد حجز موعدك بنجاح!');
                onNavigate('patient-dashboard');
              }}
            >
              تأكيد الحجز
              <CheckCircle className="w-4 h-4" />
            </Button>
          ) : (
            <Button 
              onClick={nextStep}
              disabled={!canContinue()}
              className="flex items-center gap-2"
            >
              التالي
              <ArrowLeft className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}