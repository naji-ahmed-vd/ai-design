import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const data = [
  { month: 'Jan', outpatients: 450, inpatients: 120 },
  { month: 'Feb', outpatients: 520, inpatients: 135 },
  { month: 'Mar', outpatients: 480, inpatients: 145 },
  { month: 'Apr', outpatients: 590, inpatients: 155 },
  { month: 'May', outpatients: 610, inpatients: 140 },
  { month: 'Jun', outpatients: 680, inpatients: 160 },
  { month: 'Jul', outpatients: 720, inpatients: 170 },
  { month: 'Aug', outpatients: 690, inpatients: 165 },
  { month: 'Sep', outpatients: 750, inpatients: 180 },
  { month: 'Oct', outpatients: 780, inpatients: 175 },
  { month: 'Nov', outpatients: 820, inpatients: 190 },
  { month: 'Dec', outpatients: 850, inpatients: 200 },
];

export function OutpatientsInpatientsChart() {
  const [period, setPeriod] = useState('2026');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Outpatients vs Inpatients Trends
        </h3>
        <div className="relative">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 pr-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6927c9]"
          >
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="outpatients"
            stroke="#6927c9"
            strokeWidth={2}
            dot={{ fill: '#6927c9', r: 4 }}
            name="Outpatients"
          />
          <Line
            type="monotone"
            dataKey="inpatients"
            stroke="#521e9c"
            strokeWidth={2}
            dot={{ fill: '#521e9c', r: 4 }}
            name="Inpatients"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
