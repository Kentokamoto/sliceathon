import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Slice Enterprise" },
    { name: "description", content: "Do you have the guts?" },
  ];
}

export default function Home() {
  return <Welcome />;
}
