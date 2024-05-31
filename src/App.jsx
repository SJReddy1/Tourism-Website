import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import AboutUs from "./scenes/aboutUs";
import Attractions from "./scenes/attractions";
import HomePage from "./scenes/homePage";
import Contact from "./scenes/contact";
import Mice from "./scenes/mice";
import Packages from "./scenes/packages";
import VehicleFleet from "./scenes/vehicleFleet";
import Terms from "./scenes/terms";
import Privacy from "./scenes/privacy";
import HotelBooking from "./scenes/hotels";
import BookingHotel from "./scenes/hotels/BookingHotel";
import { LoginPage } from "./scenes/login/page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import { SignUpPage } from "./scenes/signup/page";
import { UserContextProvider } from "./context/userContext";
import Dashboard from './scenes/dashboard';
import ProtectedRoutes from "./context/ProtectedRoutes";
import VehicleBooking from "./scenes/vehicleBooking"
import BookingScreen from './scenes/vehicleBooking/BookingScreen'
import AttractionDetail from "./scenes/attractions/AttractionDetail";
import HotelForm from "./scenes/dashboard/HotelForm";
import AttractionForm from "./scenes/dashboard/AttractionForm";
import VehicleForm from "./scenes/dashboard/VehicleForm";



function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<UserContextProvider>
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutUs />} />
						<Route path="/hotels" element={<HotelBooking />} />
						<Route path="/hotel/:id/:from/:to" element={<BookingHotel />} />
						<Route path="/attractions" element={<Attractions />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/mice" element={<Mice />} />
						<Route path="/packages" element={<Packages />} />
						<Route path="/vehiclefleet" element={<VehicleFleet />} />
						<Route path="/packages" element={<Packages />} />
						<Route path="/terms" element={<Terms />} />
						<Route path="/privacy" element={<Privacy />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignUpPage />} />
						<Route path="/vehicles" element={<VehicleBooking />} />
						<Route path="/vehicle/:transportId" element={<BookingScreen />} />
						<Route path="/attractions/:id" element={<AttractionDetail />} />
						<Route path="/admin/dashboard" element={<Dashboard />} />
						<Route element={<ProtectedRoutes />}>
							<Route path="/admin/dashboard/add/hotel" element={<HotelForm />} />
							<Route path="/admin/dashboard/add/vehicle" element={<VehicleForm/>} />
							<Route path="/admin/dashboard/add/attraction" element={<AttractionForm />} />
						</Route>

						<Route path="/404" element={<div>
							<h1 className="text-center m-5"> You are not an authorised person</h1>
						</div>} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
					<Footer />
					<Copyright />
				</UserContextProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
