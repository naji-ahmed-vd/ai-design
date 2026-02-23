import { Users, Calendar, FileText, Receipt } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const statsCards = [
  {
    title: "Total Patients",
    value: "2,847",
    icon: Users,
    color: "#6927c9",
    change: "+12%",
  },
  {
    title: "Total Appointments",
    value: "1,234",
    icon: Calendar,
    color: "#5e22b2",
    change: "+8%",
  },
  {
    title: "Total Prescriptions",
    value: "3,456",
    icon: FileText,
    color: "#521e9c",
    change: "+15%",
  },
  {
    title: "Total Invoices",
    value: "892",
    icon: Receipt,
    color: "#461a86",
    change: "+5%",
  },
];

const outpatientInpatientData = [
  { month: "Jan", outpatients: 400, inpatients: 240 },
  { month: "Feb", outpatients: 300, inpatients: 139 },
  { month: "Mar", outpatients: 200, inpatients: 180 },
  { month: "Apr", outpatients: 278, inpatients: 190 },
  { month: "May", outpatients: 189, inpatients: 248 },
  { month: "Jun", outpatients: 239, inpatients: 200 },
  { month: "Jul", outpatients: 349, inpatients: 210 },
];

const genderData = [
  { name: "Male", value: 1247, color: "#6927c9" },
  { name: "Female", value: 1348, color: "#5e22b2" },
  { name: "Other", value: 252, color: "#521e9c" },
];

const admissionDischargeData = [
  { date: "Week 1", admitted: 65, discharged: 45 },
  { date: "Week 2", admitted: 59, discharged: 52 },
  { date: "Week 3", admitted: 80, discharged: 68 },
  { date: "Week 4", admitted: 81, discharged: 75 },
];

const divisionData = [
  { division: "Cardiology", patients: 234, color: "#6927c9" },
  { division: "Neurology", patients: 189, color: "#5e22b2" },
  { division: "Orthopedics", patients: 167, color: "#521e9c" },
  { division: "Pediatrics", patients: 198, color: "#461a86" },
  { division: "Emergency", patients: 145, color: "#3b1670" },
];

const monthlyPatientsData = [
  { day: "1", count: 45 },
  { day: "5", count: 52 },
  { day: "10", count: 48 },
  { day: "15", count: 61 },
  { day: "20", count: 55 },
  { day: "25", count: 67 },
  { day: "30", count: 58 },
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-sm mt-1" style={{ color: stat.color }}>
                    {stat.change} from last month
                  </p>
                </div>
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <stat.icon size={24} style={{ color: stat.color }} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Outpatients vs Inpatients and Gender Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Outpatients vs Inpatients Chart - 70% */}
        <Card className="lg:col-span-7">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Outpatients vs Inpatients Trends</CardTitle>
            <Select defaultValue="6months">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">Last Month</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={outpatientInpatientData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="outpatients"
                  stroke="#6927c9"
                  strokeWidth={2}
                  name="Outpatients"
                />
                <Line
                  type="monotone"
                  dataKey="inpatients"
                  stroke="#5e22b2"
                  strokeWidth={2}
                  name="Inpatients"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gender Distribution - 30% */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Patients by Gender</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Admission and Discharge Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Admission & Discharge</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={admissionDischargeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="admitted" fill="#6927c9" name="Admitted" />
                <Bar dataKey="discharged" fill="#5e22b2" name="Discharged" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Patients by Division */}
        <Card>
          <CardHeader>
            <CardTitle>Patients by Division</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={divisionData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="division" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="patients" name="Patients">
                  {divisionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Patients This Month */}
        <Card>
          <CardHeader>
            <CardTitle>Patients This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyPatientsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#6927c9"
                  strokeWidth={2}
                  name="Patients"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
