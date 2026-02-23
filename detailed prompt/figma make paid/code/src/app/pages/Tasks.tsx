import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function TasksPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tasks</h1>
      <Card>
        <CardHeader>
          <CardTitle>Task Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            This is the tasks page. You can manage your hospital tasks here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
