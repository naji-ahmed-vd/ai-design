import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: '1', patients: 28 },
  { day: '5', patients: 32 },
  { day: '10', patients: 45 },
  { day: '15', patients: 38 },
  { day: '20', patients: 52 },
  { day: '25', patients: 48 },
  { day: '28', patients: 55 },
];

export function MonthlyPatientsChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Patients This Month
      </h3>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6927c9" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6927c9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="day" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="patients"
            stroke="#6927c9"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPatients)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
