import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div>
      <h1>Cabecalho</h1>
      <div className="flex flex-col items-center">
        <Outlet />
      </div>
    </div>
  );
}
