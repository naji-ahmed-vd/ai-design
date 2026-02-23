import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { StatCard } from './components/StatCard';
import { OutpatientsInpatientsChart } from './components/OutpatientsInpatientsChart';
import { PatientsByGenderChart } from './components/PatientsByGenderChart';
import { AdmittedDischargedChart } from './components/AdmittedDischargedChart';
import { PatientsByDivisionChart } from './components/PatientsByDivisionChart';
import { MonthlyPatientsChart } from './components/MonthlyPatientsChart';
import { Users, Calendar, FileText, Receipt } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />

      {/* Main Content */}
      <main className="pt-16 md:ml-[200px] p-6">
        <div className="max-w-[1600px] mx-auto space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Patients"
              value="1,245"
              icon={<Users className="w-6 h-6" style={{ color: '#6927c9' }} />}
              color="#6927c9"
            />
            <StatCard
              title="Total Appointments"
              value="892"
              icon={<Calendar className="w-6 h-6" style={{ color: '#521e9c' }} />}
              color="#521e9c"
            />
            <StatCard
              title="Total Prescriptions"
              value="2,156"
              icon={<FileText className="w-6 h-6" style={{ color: '#461a86' }} />}
              color="#461a86"
            />
            <StatCard
              title="Total Invoices"
              value="1,834"
              icon={<Receipt className="w-6 h-6" style={{ color: '#3b1670' }} />}
              color="#3b1670"
            />
          </div>

          {/* Charts Row 1: Outpatients vs Inpatients (70%) + Gender Distribution (30%) */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
            <div className="lg:col-span-7">
              <OutpatientsInpatientsChart />
            </div>
            <div className="lg:col-span-3">
              <PatientsByGenderChart />
            </div>
          </div>

          {/* Charts Row 2: Three equal charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AdmittedDischargedChart />
            <PatientsByDivisionChart />
            <MonthlyPatientsChart />
          </div>
        </div>
      </main>
    </div>
  );
}
