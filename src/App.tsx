import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";
import Orders from "./pages/test/Orders";
import Users from "./pages/test/Users";
import Contact from "./pages/test/Contact";
import Payments from "./pages/test/Payments";
import Tickets from "./pages/test/Tickets";
import { useThemeContext } from "./context/ThemeContext";

function App() {
	const Layout = () => {
		const { theme } = useThemeContext();
		return (
			<div className={theme}>
				<div className="main">
					<div className="container">
						<div className="menuContainer">
							<Menu />
						</div>
						<div className="contentContainer">
							<Navbar />
							<Outlet />
						</div>
					</div>
					<Footer />
				</div>
			</div>
		);
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/orders",
					element: <Orders />,
				},
				{
					path: "/users",
					element: <Users />,
				},
				{
					path: "/contact",
					element: <Contact />,
				},
				{
					path: "/payments",
					element: <Payments />,
				},
				{
					path: "/tickets",
					element: <Tickets />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
