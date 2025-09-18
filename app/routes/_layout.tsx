import { Outlet } from "react-router";

export default function Layout() {
  console.log("things");
  return (
    <div>
      Hello this is a part of the layout
      <Outlet />
    </div>
  );
}