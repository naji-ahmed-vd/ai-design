import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { division: 'Cardiology', patients: 145 },
  { division: 'Neurology', patients: 98 },
  { division: 'Orthopedics', patients: 112 },
  { division: 'Pediatrics', patients: 156 },
  { division: 'Emergency', patients: 203 },
];

export function PatientsByDivisionChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Patients by Division
      </h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis type="number" stroke="#888" />
          <YAxis dataKey="division" type="category" stroke="#888" width={100} />
          <Tooltip />
          <Bar dataKey="patients" fill="#6927c9" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
