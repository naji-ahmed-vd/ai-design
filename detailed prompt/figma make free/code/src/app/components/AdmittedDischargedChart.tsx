import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'Week 1', admitted: 45, discharged: 38 },
  { week: 'Week 2', admitted: 52, discharged: 42 },
  { week: 'Week 3', admitted: 48, discharged: 45 },
  { week: 'Week 4', admitted: 61, discharged: 51 },
];

export function AdmittedDischargedChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Admitted vs Discharged
      </h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="week" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Legend />
          <Bar dataKey="admitted" fill="#6927c9" name="Admitted" />
          <Bar dataKey="discharged" fill="#521e9c" name="Discharged" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
