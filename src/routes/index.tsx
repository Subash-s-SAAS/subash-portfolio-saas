import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/home";
export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="page-wrap px-0 md:px-4 pb-8">
			<Hero />
		</main>
	);
}
