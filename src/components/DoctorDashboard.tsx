import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Calendar, 
  Clock, 
  Users, 
  TrendingUp, 
  Phone, 
  Video, 
  FileText, 
  Settings,
  Plus,
  CheckCircle,
  AlertCircle,
  Edit,
  Save,
  X,
  Stethoscope,
  Activity,
  Star,
  ArrowRight,
  Bell,
  CalendarDays,
  Scissors,
  Timer,
  MapPin,
  Coffee,
  Moon,
  Sun
} from 'lucide-react';

interface DoctorDashboardProps {
  onNavigate: (page: string, context?: any) => void;
}

interface WorkingHours {
  [key: string]: {
    enabled: boolean;
    morningStart: string;
    morningEnd: string;
    eveningStart: string;
    eveningEnd: string;
  };
}

interface Surgery {
  id: string;
  patientName: string;
  patientAge: number;
  procedure: string;
  date: string;
  time: string;
  duration: string;
  room: string;
  assistants: string[];
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'emergency';
  notes: string;
}

export function DoctorDashboard({ onNavigate }: DoctorDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [acceptingNewPatients, setAcceptingNewPatients] = useState(true);
  const [telehealthEnabled, setTelehealthEnabled] = useState(true);
  const [editingHours, setEditingHours] = useState(false);
  const [showSurgeryDialog, setShowSurgeryDialog] = useState(false);

  // Mock doctor data - Arabic version
  const doctor = {
    name: 'د. أحمد السالمي',
    specialty: 'جراحة القلب والأوعية الدموية',
    license: 'YE-12345',
    rating: 4.9,
    totalPatients: 1247,
    yearsExperience: 15,
    hospital: 'مركز الحياة الطبي',
    phone: '733-456-789',
    email: 'dr.ahmed@alhayat-mc.com'
  };

  const [workingHours, setWorkingHours] = useState<WorkingHours>({
    sunday: { enabled: true, morningStart: '08:00', morningEnd: '12:00', eveningStart: '16:00', eveningEnd: '20:00' },
    monday: { enabled: true, morningStart: '08:00', morningEnd: '12:00', eveningStart: '16:00', eveningEnd: '20:00' },
    tuesday: { enabled: true, morningStart: '08:00', morningEnd: '12:00', eveningStart: '16:00', eveningEnd: '20:00' },
    wednesday: { enabled: true, morningStart: '08:00', morningEnd: '12:00', eveningStart: '16:00', eveningEnd: '20:00' },
    thursday: { enabled: true, morningStart: '08:00', morningEnd: '12:00', eveningStart: '16:00', eveningEnd: '20:00' },
    friday: { enabled: false, morningStart: '08:00', morningEnd: '12:00', eveningStart: '16:00', eveningEnd: '20:00' },
    saturday: { enabled: true, morningStart: '09:00', morningEnd: '13:00', eveningStart: '17:00', eveningEnd: '21:00' }
  });

  const todayAppointments = [
    {
      id: 1,
      patient: 'محمد علي أحمد',
      time: '08:30',
      type: 'استشارة',
      duration: '30 دقيقة',
      status: 'confirmed',
      isNew: false,
      notes: 'متابعة بعد العملية الجراحية'
    },
    {
      id: 2,
      patient: 'فاطمة سعد الدين',
      time: '09:30',
      type: 'فحص دوري',
      duration: '45 دقيقة',
      status: 'confirmed',
      isNew: true,
      notes: 'تقييم ألم الصدر'
    },
    {
      id: 3,
      patient: 'عبدالله محسن',
      time: '11:00',
      type: 'استشارة عن بُعد',
      duration: '15 دقيقة',
      status: 'pending',
      isNew: false,
      notes: 'مراجعة الأدوية'
    },
    {
      id: 4,
      patient: 'أميرة حسن',
      time: '16:30',
      type: 'فحص شامل',
      duration: '60 دقيقة',
      status: 'confirmed',
      isNew: false,
      notes: 'فحص القلب السنوي'
    }
  ];

  const [surgeries, setSurgeries] = useState<Surgery[]>([
    {
      id: '1',
      patientName: 'سالم أحمد محمد',
      patientAge: 55,
      procedure: 'عملية قسطرة القلب',
      date: '2024-03-20',
      time: '07:00',
      duration: '120 دقيقة',
      room: 'غرفة العمليات 1',
      assistants: ['د. محمد الشامي', 'الممرضة سارة'],
      status: 'scheduled',
      priority: 'high',
      notes: 'المريض يعاني من انسداد شرايين'
    },
    {
      id: '2',
      patientName: 'نادية عبدالله',
      patientAge: 42,
      procedure: 'عملية صمام القلب',
      date: '2024-03-22',
      time: '09:30',
      duration: '180 دقيقة',
      room: 'غرفة العمليات 2',
      assistants: ['د. علي الحكيمي', 'د. زينب محمد'],
      status: 'scheduled',
      priority: 'medium',
      notes: 'استبدال الصمام التاجي'
    },
    {
      id: '3',
      patientName: 'خالد سعد',
      patientAge: 38,
      procedure: 'عملية تركيب منظم نبضات',
      date: '2024-03-18',
      time: '10:00',
      duration: '90 دقيقة',
      room: 'غرفة العمليات 1',
      assistants: ['د. فاطمة الزهراني'],
      status: 'completed',
      priority: 'medium',
      notes: 'تم بنجاح - متابعة مطلوبة'
    }
  ]);

  const weeklyStats = {
    totalAppointments: 42,
    completedAppointments: 38,
    cancelledAppointments: 4,
    newPatients: 8,
    totalSurgeries: 5,
    completedSurgeries: 3,
    revenue: '2,450,000 ريال'
  };

  const dayNames = {
    sunday: 'الأحد',
    monday: 'الاثنين',
    tuesday: 'الثلاثاء',
    wednesday: 'الأربعاء',
    thursday: 'الخميس',
    friday: 'الجمعة',
    saturday: 'السبت'
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSurgeryStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'in-progress':
        return 'bg-orange-100 text-orange-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'emergency':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const updateWorkingHours = (day: string, field: string, value: string | boolean) => {
    setWorkingHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value
      }
    }));
  };

  const addNewSurgery = (surgeryData: Partial<Surgery>) => {
    const newSurgery: Surgery = {
      id: Date.now().toString(),
      patientName: surgeryData.patientName || '',
      patientAge: surgeryData.patientAge || 0,
      procedure: surgeryData.procedure || '',
      date: surgeryData.date || '',
      time: surgeryData.time || '',
      duration: surgeryData.duration || '',
      room: surgeryData.room || '',
      assistants: surgeryData.assistants || [],
      status: 'scheduled',
      priority: surgeryData.priority || 'medium',
      notes: surgeryData.notes || ''
    };
    setSurgeries(prev => [...prev, newSurgery]);
    setShowSurgeryDialog(false);
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">
                مرحباً، {doctor.name}
              </h1>
              <p className="text-gray-600 mt-1">
                لديك {todayAppointments.filter(apt => apt.status === 'confirmed').length} موعد اليوم
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Settings className="h-4 w-4 ml-2" />
                الإعدادات
              </Button>
              <Button>
                <Plus className="h-4 w-4 ml-2" />
                حجز وقت
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">مواعيد اليوم</p>
                  <p className="text-2xl font-bold text-primary arabic-numbers">{todayAppointments.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">إجمالي المرضى</p>
                  <p className="text-2xl font-bold text-blue-600 arabic-numbers">{doctor.totalPatients}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">العمليات القادمة</p>
                  <p className="text-2xl font-bold text-orange-600 arabic-numbers">{surgeries.filter(s => s.status === 'scheduled').length}</p>
                </div>
                <Scissors className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">التقييم</p>
                  <p className="text-2xl font-bold text-yellow-600 arabic-numbers">{doctor.rating}</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="schedule">الجدول</TabsTrigger>
            <TabsTrigger value="surgeries">العمليات</TabsTrigger>
            <TabsTrigger value="working-hours">أوقات العمل</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Today's Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>جدول اليوم</span>
                    <Badge variant="secondary" className="arabic-numbers">
                      {todayAppointments.length} مواعيد
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    مواعيدك لهذا اليوم، {new Date().toLocaleDateString('ar-SA')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {todayAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-start gap-4 p-3 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium">{appointment.patient}</h4>
                                {appointment.isNew && (
                                  <Badge variant="outline" className="text-xs">
                                    جديد
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-600">{appointment.notes}</p>
                            </div>
                            <Badge className={getStatusColor(appointment.status)}>
                              {appointment.status === 'confirmed' ? 'مؤكد' :
                               appointment.status === 'pending' ? 'معلق' : appointment.status}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span className="arabic-numbers">{appointment.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Timer className="h-4 w-4" />
                              <span>{appointment.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              {appointment.type === 'استشارة عن بُعد' ? (
                                <Video className="h-4 w-4" />
                              ) : (
                                <Users className="h-4 w-4" />
                              )}
                              <span>{appointment.type}</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2 mt-3">
                            {appointment.type === 'استشارة عن بُعد' ? (
                              <Button size="sm">
                                <Video className="h-4 w-4 ml-1" />
                                انضم للمكالمة
                              </Button>
                            ) : (
                              <Button size="sm" variant="outline">
                                بدء الزيارة
                              </Button>
                            )}
                            <Button size="sm" variant="outline">
                              <FileText className="h-4 w-4 ml-1" />
                              الملاحظات
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions & Stats */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>إجراءات سريعة</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start" onClick={() => setShowSurgeryDialog(true)}>
                      <Plus className="h-4 w-4 ml-2" />
                      جدولة عملية جراحية
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="h-4 w-4 ml-2" />
                      حجز وقت راحة
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 ml-2" />
                      تقرير أسبوعي
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Bell className="h-4 w-4 ml-2" />
                      إشعارات المرضى
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>إحصائيات الأسبوع</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>مواعيد مكتملة</span>
                      <Badge variant="secondary" className="arabic-numbers">{weeklyStats.completedAppointments}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>عمليات مكتملة</span>
                      <Badge variant="secondary" className="arabic-numbers">{weeklyStats.completedSurgeries}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>مرضى جدد</span>
                      <Badge variant="secondary" className="arabic-numbers">{weeklyStats.newPatients}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>الإيرادات</span>
                      <Badge className="bg-green-100 text-green-800 arabic-numbers">{weeklyStats.revenue}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="surgeries" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">إدارة العمليات الجراحية</h2>
                <p className="text-gray-600">قم بإدارة وجدولة عملياتك الجراحية</p>
              </div>
              <Button onClick={() => setShowSurgeryDialog(true)}>
                <Plus className="h-4 w-4 ml-2" />
                إضافة عملية
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {surgeries.map((surgery) => (
                <Card key={surgery.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{surgery.procedure}</CardTitle>
                        <CardDescription>{surgery.patientName} - عمر {surgery.patientAge} سنة</CardDescription>
                      </div>
                      <Badge className={getPriorityColor(surgery.priority)}>
                        {surgery.priority === 'high' ? 'عالية' : 
                         surgery.priority === 'medium' ? 'متوسطة' : 
                         surgery.priority === 'low' ? 'منخفضة' : 'طارئة'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarDays className="h-4 w-4 text-gray-500" />
                        <span className="arabic-numbers">{surgery.date}</span>
                        <span className="arabic-numbers">{surgery.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Timer className="h-4 w-4 text-gray-500" />
                        <span>{surgery.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>{surgery.room}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span>{surgery.assistants.join(', ')}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t">
                      <Badge className={getSurgeryStatusColor(surgery.status)}>
                        {surgery.status === 'scheduled' ? 'مجدولة' :
                         surgery.status === 'in-progress' ? 'قيد التنفيذ' :
                         surgery.status === 'completed' ? 'مكتملة' : 'ملغية'}
                      </Badge>
                    </div>

                    {surgery.notes && (
                      <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                        {surgery.notes}
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="h-4 w-4 ml-1" />
                        تعديل
                      </Button>
                      {surgery.status === 'scheduled' && (
                        <Button size="sm" className="flex-1">
                          <CheckCircle className="h-4 w-4 ml-1" />
                          بدء
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="working-hours" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">أوقات العمل الأسبوعية</h2>
                <p className="text-gray-600">حدد أوقات عملك لكل يوم من أيام الأسبوع</p>
              </div>
              <div className="flex gap-2">
                {editingHours ? (
                  <>
                    <Button onClick={() => setEditingHours(false)}>
                      <Save className="h-4 w-4 ml-2" />
                      حفظ
                    </Button>
                    <Button variant="outline" onClick={() => setEditingHours(false)}>
                      <X className="h-4 w-4 ml-2" />
                      إلغاء
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => setEditingHours(true)}>
                    <Edit className="h-4 w-4 ml-2" />
                    تعديل
                  </Button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {Object.entries(workingHours).map(([day, hours]) => (
                <Card key={day}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{dayNames[day as keyof typeof dayNames]}</CardTitle>
                      <Switch
                        checked={hours.enabled}
                        onCheckedChange={(checked) => updateWorkingHours(day, 'enabled', checked)}
                        disabled={!editingHours}
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    {hours.enabled ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Sun className="h-5 w-5 text-yellow-500" />
                            <Label className="font-medium">الفترة الصباحية</Label>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <Label className="text-sm">من</Label>
                              <Input
                                type="time"
                                value={hours.morningStart}
                                onChange={(e) => updateWorkingHours(day, 'morningStart', e.target.value)}
                                disabled={!editingHours}
                              />
                            </div>
                            <div>
                              <Label className="text-sm">إلى</Label>
                              <Input
                                type="time"
                                value={hours.morningEnd}
                                onChange={(e) => updateWorkingHours(day, 'morningEnd', e.target.value)}
                                disabled={!editingHours}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Moon className="h-5 w-5 text-blue-500" />
                            <Label className="font-medium">الفترة المسائية</Label>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <Label className="text-sm">من</Label>
                              <Input
                                type="time"
                                value={hours.eveningStart}
                                onChange={(e) => updateWorkingHours(day, 'eveningStart', e.target.value)}
                                disabled={!editingHours}
                              />
                            </div>
                            <div>
                              <Label className="text-sm">إلى</Label>
                              <Input
                                type="time"
                                value={hours.eveningEnd}
                                onChange={(e) => updateWorkingHours(day, 'eveningEnd', e.target.value)}
                                disabled={!editingHours}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">يوم راحة</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                تغيير أوقات العمل سيؤثر على المواعيد الجديدة فقط. المواعيد الحالية لن تتأثر.
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>إعدادات العيادة</CardTitle>
                  <CardDescription>
                    قم بتكوين تفضيلات عيادتك
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>قبول مرضى جدد</Label>
                      <p className="text-sm text-gray-500 mt-1">
                        السماح للمرضى الجدد بحجز مواعيد
                      </p>
                    </div>
                    <Switch
                      checked={acceptingNewPatients}
                      onCheckedChange={setAcceptingNewPatients}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>تفعيل الاستشارات عن بُعد</Label>
                      <p className="text-sm text-gray-500 mt-1">
                        توفير مواعيد استشارة بالفيديو
                      </p>
                    </div>
                    <Switch
                      checked={telehealthEnabled}
                      onCheckedChange={setTelehealthEnabled}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>مدة الموعد الافتراضية</Label>
                    <Select defaultValue="30">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 دقيقة</SelectItem>
                        <SelectItem value="30">30 دقيقة</SelectItem>
                        <SelectItem value="45">45 دقيقة</SelectItem>
                        <SelectItem value="60">60 دقيقة</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>الوقت الفاصل بين المواعيد</Label>
                    <Select defaultValue="10">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0 دقيقة</SelectItem>
                        <SelectItem value="5">5 دقائق</SelectItem>
                        <SelectItem value="10">10 دقائق</SelectItem>
                        <SelectItem value="15">15 دقيقة</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>المعلومات الشخصية</CardTitle>
                  <CardDescription>
                    معلوماتك المهنية والشخصية
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>الاسم الكامل</Label>
                    <p className="text-sm text-gray-600 mt-1">{doctor.name}</p>
                  </div>
                  
                  <div>
                    <Label>التخصص</Label>
                    <p className="text-sm text-gray-600 mt-1">{doctor.specialty}</p>
                  </div>
                  
                  <div>
                    <Label>رقم الترخيص</Label>
                    <p className="text-sm text-gray-600 mt-1 arabic-numbers">{doctor.license}</p>
                  </div>
                  
                  <div>
                    <Label>سنوات الخبرة</Label>
                    <p className="text-sm text-gray-600 mt-1 arabic-numbers">{doctor.yearsExperience} سنة</p>
                  </div>
                  
                  <div>
                    <Label>المستشفى</Label>
                    <p className="text-sm text-gray-600 mt-1">{doctor.hospital}</p>
                  </div>
                  
                  <Button className="w-full mt-4">
                    تعديل الملف الشخصي
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Surgery Dialog */}
        <Dialog open={showSurgeryDialog} onOpenChange={setShowSurgeryDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>جدولة عملية جراحية جديدة</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label>اسم المريض</Label>
                <Input placeholder="اسم المريض الكامل" />
              </div>
              <div className="space-y-2">
                <Label>العمر</Label>
                <Input type="number" placeholder="عمر المريض" />
              </div>
              <div className="space-y-2">
                <Label>نوع العملية</Label>
                <Input placeholder="نوع الإجراء الجراحي" />
              </div>
              <div className="space-y-2">
                <Label>التاريخ</Label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <Label>الوقت</Label>
                <Input type="time" />
              </div>
              <div className="space-y-2">
                <Label>المدة المتوقعة</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المدة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="60">60 دقيقة</SelectItem>
                    <SelectItem value="90">90 دقيقة</SelectItem>
                    <SelectItem value="120">120 دقيقة</SelectItem>
                    <SelectItem value="180">180 دقيقة</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>غرفة العمليات</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الغرفة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="room1">غرفة العمليات 1</SelectItem>
                    <SelectItem value="room2">غرفة العمليات 2</SelectItem>
                    <SelectItem value="room3">غرفة العمليات 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>الأولوية</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الأولوية" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">منخفضة</SelectItem>
                    <SelectItem value="medium">متوسطة</SelectItem>
                    <SelectItem value="high">عالية</SelectItem>
                    <SelectItem value="emergency">طارئة</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label>الملاحظات</Label>
                <Input placeholder="ملاحظات إضافية حول العملية" />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowSurgeryDialog(false)}>
                إلغاء
              </Button>
              <Button onClick={() => addNewSurgery({})}>
                حفظ العملية
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}