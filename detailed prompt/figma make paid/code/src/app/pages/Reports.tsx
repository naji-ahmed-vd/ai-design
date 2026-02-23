import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Reports</h1>
      <Card>
        <CardHeader>
          <CardTitle>Hospital Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            This is the reports page. You can view and generate hospital reports here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
