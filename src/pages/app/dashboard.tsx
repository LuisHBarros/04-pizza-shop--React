import { Helmet } from "react-helmet-async";

export function Dashboard() {
  return (
    <div className="flex flex-col items-center">
      <Helmet title="Dashboard" />
      <h1>Dashboard</h1>
    </div>
  );
}
