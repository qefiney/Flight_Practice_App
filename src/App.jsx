import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Info from "./Info/Info";
import Lounge from "./Lounge/Lounge";
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";
import Subscribers from "./Subscribers/Subscribers";
import Support from "./Support/Support";
import Travelers from "./Travelers/Travelers";

const App = () => {
	return (
		<div>
			<Navbar />
			<Home />
			<Search />
			<Support />
			<Info />
			<Lounge />
			<Travelers />
			{/* <Subscribers /> */}
			{/* <Footer /> */}
		</div>
	);
};

export default App;
