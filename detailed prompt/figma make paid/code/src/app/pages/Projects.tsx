import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <Card>
        <CardHeader>
          <CardTitle>Project Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            This is the projects page. You can manage your hospital projects here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
