import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  FileText, 
  Heart, 
  Activity, 
  Phone, 
  Mail, 
  MapPin,
  Edit,
  Download,
  Plus,
  Bell,
  Settings,
  CreditCard,
  Star,
  ChevronLeft,
  AlertCircle,
  CheckCircle,
  X,
  Filter
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription } from './ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';

interface PatientDashboardProps {
  onNavigate: (page: string, context?: any) => void;
}

export function PatientDashboard({ onNavigate }: PatientDashboardProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  const patientInfo = {
    name: 'أحمد محمد الزهراني',
    email: 'ahmed.alzahrani@email.com',
    phone: '+967-777-123-456',
    dateOfBirth: '1990-05-15',
    gender: 'ذكر',
    bloodType: 'O+',
    allergies: ['البنسلين', 'الفل السوداني'],
    emergencyContact: {
      name: 'فاطمة الزهراني',
      relation: 'زوجة',
      phone: '+967-777-123-789'
    },
    membershipLevel: 'ذهبي',
    joinDate: '2023-01-15'
  };

  const upcomingAppointments = [
    {
      id: 1,
      doctorName: 'د. أحمد محمد السالمي',
      specialty: 'أمراض القلب',
      date: '2024-01-20',
      time: '10:30',
      type: 'استشارة شخصية',
      status: 'مؤكد',
      location: 'الطابق الثاني - جناح القلب',
      notes: 'فحص دوري للقلب',
      canCancel: true,
      reminderSet: true
    },
    {
      id: 2,
      doctorName: 'د. مريم سالم البحيري',
      specialty: 'طب العيون',
      date: '2024-01-25',
      time: '14:15',
      type: 'فحص العيون',
      status: 'مؤكد',
      location: 'الطابق الثاني - قسم العيون',
      notes: 'فحص النظر الدوري',
      canCancel: true,
      reminderSet: false
    }
  ];

  const appointmentHistory = [
    {
      id: 1,
      doctorName: 'د. فاطمة علي الحكيمي',
      specialty: 'طب الأطفال',
      date: '2024-01-10',
      time: '09:00',
      type: 'استشارة عبر الإنترنت',
      status: 'مكتمل',
      diagnosis: 'فحص دوري - صحة جيدة',
      prescription: 'فيتامنات',
      cost: 4000,
      rating: 5
    },
    {
      id: 2,
      doctorName: 'د. خالد أحمد الشامي',
      specialty: 'جراحة العظام',
      date: '2024-01-05',
      time: '11:30',
      type: 'استشارة شخصية',
      status: 'مكتمل',
      diagnosis: 'التهاب في المفاصل',
      prescription: 'مسكنات ومضادات الالتهاب',
      cost: 6000,
      rating: 4
    },
    {
      id: 3,
      doctorName: 'د. يوسف محمد العامري',
      specialty: 'الأمراض العصبية',
      date: '2023-12-20',
      time: '15:45',
      type: 'استشارة شخصية',
      status: 'مكتمل',
      diagnosis: 'صداع نصفي',
      prescription: 'علاج وقائي للصداع النصفي',
      cost: 7000,
      rating: 5
    }
  ];

  const medicalRecords = [
    {
      id: 1,
      type: 'تحليل دم شامل',
      date: '2024-01-08',
      doctor: 'د. أحمد السالمي',
      status: 'مكتمل',
      results: 'طبيعي',
      downloadUrl: '#'
    },
    {
      id: 2,
      type: 'أشعة سينية على الصدر',
      date: '2024-01-05',
      doctor: 'د. خالد الشامي',
      status: 'مكتمل',
      results: 'طبيعي',
      downloadUrl: '#'
    },
    {
      id: 3,
      type: 'تخطيط القلب',
      date: '2023-12-15',
      doctor: 'د. أحمد السالمي',
      status: 'مكتمل',
      results: 'طبيعي',
      downloadUrl: '#'
    }
  ];



  const healthMetrics = [
    { label: 'ضغط الدم', value: '120/80', unit: 'mmHg', status: 'طبيعي', color: 'text-green-600' },
    { label: 'معدل ضربات القلب', value: '72', unit: 'bpm', status: 'طبيعي', color: 'text-green-600' },
    { label: 'الوزن', value: '75', unit: 'kg', status: 'مثالي', color: 'text-green-600' },
    { label: 'مؤشر كتلة الجسم', value: '23.4', unit: 'BMI', status: 'طبيعي', color: 'text-green-600' }
  ];

  const filteredHistory = selectedPeriod === 'all' 
    ? appointmentHistory 
    : appointmentHistory.filter(apt => {
        const aptDate = new Date(apt.date);
        const now = new Date();
        const diffDays = Math.floor((now.getTime() - aptDate.getTime()) / (1000 * 60 * 60 * 24));
        
        switch(selectedPeriod) {
          case 'week': return diffDays <= 7;
          case 'month': return diffDays <= 30;
          case 'year': return diffDays <= 365;
          default: return true;
        }
      });

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="text-lg">أز</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{patientInfo.name}</h1>
              <p className="text-gray-600">عضوية {patientInfo.membershipLevel}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge className="bg-green-100 text-green-700">نشط</Badge>
                <span className="text-sm text-gray-500">
                  عضو منذ {new Date(patientInfo.joinDate).getFullYear()}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button onClick={() => onNavigate('comprehensive-booking')}>
              <Plus className="w-4 h-4 ml-2" />
              حجز موعد جديد
            </Button>
            <Button variant="outline">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Alerts */}
        <div className="space-y-4 mb-8">
          <Alert>
            <Bell className="h-4 w-4" />
            <AlertDescription>
              لديك موعد مع د. أحمد السالمي غداً في تمام الساعة 10:30 صباحاً
            </AlertDescription>
          </Alert>
        </div>

        {/* Health Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {healthMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{metric.label}</p>
                    <p className="text-2xl font-bold arabic-numbers">{metric.value}</p>
                    <p className="text-xs text-gray-500">{metric.unit}</p>
                  </div>
                  <div className="text-right">
                    <Activity className="w-8 h-8 text-blue-600 mb-2" />
                    <p className={`text-xs font-medium ${metric.color}`}>{metric.status}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="appointments">المواعيد</TabsTrigger>
            <TabsTrigger value="profile">الملف الشخصي</TabsTrigger>
            <TabsTrigger value="records">السجلات</TabsTrigger>
            <TabsTrigger value="history">التاريخ الطبي</TabsTrigger>
          </TabsList>

          {/* Upcoming Appointments */}
          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  المواعيد القادمة
                </CardTitle>
                <CardDescription>
                  جميع مواعيدك المؤكدة والقادمة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <Card key={appointment.id} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold">{appointment.doctorName}</h3>
                              <Badge variant="outline">{appointment.specialty}</Badge>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span className="arabic-numbers">
                                  {new Date(appointment.date).toLocaleDateString('ar-SA')}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span className="arabic-numbers">{appointment.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{appointment.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                <span>{appointment.type}</span>
                              </div>
                            </div>
                            {appointment.notes && (
                              <p className="text-sm text-gray-600 mt-2 bg-gray-50 p-2 rounded">
                                {appointment.notes}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col gap-2">
                            <Badge className="bg-green-100 text-green-700">
                              {appointment.status}
                            </Badge>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Edit className="w-4 h-4" />
                              </Button>
                              {appointment.canCancel && (
                                <Button size="sm" variant="outline">
                                  <X className="w-4 h-4" />
                                </Button>
                              )}
                              <Button 
                                size="sm" 
                                variant={appointment.reminderSet ? "default" : "outline"}
                              >
                                <Bell className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Medical History */}
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      التاريخ الطبي
                    </CardTitle>
                    <CardDescription>
                      جميع زياراتك واستشاراتك السابقة
                    </CardDescription>
                  </div>
                  <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع الفترات</SelectItem>
                      <SelectItem value="week">آخر أسبوع</SelectItem>
                      <SelectItem value="month">آخر شهر</SelectItem>
                      <SelectItem value="year">آخر سنة</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredHistory.map((visit) => (
                    <Card key={visit.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold">{visit.doctorName}</h3>
                              <Badge variant="outline">{visit.specialty}</Badge>
                              <Badge className="bg-green-100 text-green-700">
                                {visit.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-gray-600">التاريخ:</p>
                                <p className="arabic-numbers">
                                  {new Date(visit.date).toLocaleDateString('ar-SA')} - {visit.time}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">نوع الزيا��ة:</p>
                                <p>{visit.type}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">التشخيص:</p>
                                <p>{visit.diagnosis}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">العلاج الموصو:</p>
                                <p>{visit.prescription}</p>
                              </div>
                            </div>
                          </div>
                          <div className="text-left">
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${
                                    i < visit.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                  }`} 
                                />
                              ))}
                            </div>
                            <p className="text-sm font-medium arabic-numbers">
                              {visit.cost.toLocaleString()} ريال
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Medical Records */}
          <TabsContent value="records" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  السجلات الطبية
                </CardTitle>
                <CardDescription>
                  نتائج الفحوصات والتحاليل والأشعة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medicalRecords.map((record) => (
                    <Card key={record.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{record.type}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="arabic-numbers">
                                {new Date(record.date).toLocaleDateString('ar-SA')}
                              </span>
                              <span>د. {record.doctor}</span>
                              <Badge className="bg-green-100 text-green-700">
                                {record.status}
                              </Badge>
                            </div>
                            <p className="text-sm mt-2">
                              النتيجة: <span className="font-medium">{record.results}</span>
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 ml-2" />
                            تحميل
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>



          {/* Profile */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    المعلومات الشخصية
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-600">الاسم الكامل</Label>
                    <p className="text-lg">{patientInfo.name}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">تاريخ الميلاد</Label>
                    <p className="arabic-numbers">
                      {new Date(patientInfo.dateOfBirth).toLocaleDateString('ar-SA')}
                    </p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">الجنس</Label>
                    <p>{patientInfo.gender}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">فصيلة الدم</Label>
                    <p className="arabic-numbers">{patientInfo.bloodType}</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Edit className="w-4 h-4 ml-2" />
                    تعديل المعلومات
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    معلومات الاتصال
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-600">رقم الهاتف</Label>
                    <p className="arabic-numbers">{patientInfo.phone}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">البريد الإلكتروني</Label>
                    <p>{patientInfo.email}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">جهة الاتصال في الطوارئ</Label>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-medium">{patientInfo.emergencyContact.name}</p>
                      <p className="text-sm text-gray-600">{patientInfo.emergencyContact.relation}</p>
                      <p className="text-sm arabic-numbers">{patientInfo.emergencyContact.phone}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Edit className="w-4 h-4 ml-2" />
                    تعد��ل الاتصال
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    الحساسيات والتحذيرات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {patientInfo.allergies.map((allergy, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-red-50 rounded">
                        <AlertCircle className="w-4 h-4 text-red-600" />
                        <span>{allergy}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Plus className="w-4 h-4 ml-2" />
                    إضافة حساسية
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    عضوية وإحصائيات
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-600">مستوى العضوية</Label>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-yellow-100 text-yellow-700">
                        {patientInfo.membershipLevel}
                      </Badge>
                      <Progress value={75} className="flex-1" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-blue-50 p-3 rounded">
                      <div className="text-2xl font-bold arabic-numbers">12</div>
                      <div className="text-sm text-gray-600">زيارة مكتملة</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <div className="text-2xl font-bold arabic-numbers">2</div>
                      <div className="text-sm text-gray-600">موعد قادم</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}