import { useEffect } from "react";
import Header from "../../components/Header";
import Vehicle from "./Vehicle";
import { useState } from "react";


const VehicleBooking = () => {
	
		const [vehicles, setVehicles] = useState([])
		async function fetchData(){
			try{
               const response = await fetch('http://localhost:8000/vehicles')
			   const res = await response.json()
			   if(res.success){
				   setVehicles(res.data)
			   }
			}catch(err){
				console.error(err)
			}
		}

		useEffect(() => {
			fetchData()
		}),[];

		
	return (
		<div className="container">
		
			<div className="row justify-content-center mt-5">
				<div className="col-md-9 mt-2">
					{vehicles.length > 0 ? (<>
						{vehicles.map((item) => {
							return <Vehicle key={item._id} vehicle={item}/>
						})}
					</>
					) : <h1 className="text-center mb-5">No vehicles available</h1>}
				</div>

			</div>
		</div>
	);
};

export default VehicleBooking;
