import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import InitialScreen from './components/InitialScreen'
import Sessoes from './components/Sessoes'

// export default function App() {
//   return (
//     <InitialScreen></InitialScreen>
//   );
// }


export default function App() {
	return (
		//Colocar todo App entre BrowerRouter
		<BrowserRouter>
			{/* Tudo que tiver uma rota entre Routes */}
			<Routes>
				{/* Cada rota tem que estar em Route */}
				<Route path="/" element={<InitialScreen />} />
				<Route path="/sessoes/:idFilme" element={<Sessoes />}/>
			</Routes>
		</BrowserRouter>
	);
}
