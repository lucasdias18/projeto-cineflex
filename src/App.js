import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import InitialScreen from './components/InitialScreen'
import Sessoes from './components/Sessoes'
import Assentos from './components/Assentos'
import Header from "./components/Header";
import Sucesso from './components/Sucesso'
import { useState } from "react";

// export default function App() {
//   return (
//     <InitialScreen></InitialScreen>
//   );
// }


export default function App() {
	const [sucesso, setSucesso] = useState({})

	return (
		//Colocar todo App entre BrowerRouter
		<BrowserRouter>
			{/* Tudo que tiver uma rota entre Routes */}
			<Header />
			<Routes>
				{/* Cada rota tem que estar em Route */}
				<Route path="/" element={<InitialScreen />} />
				<Route path="/sessoes/:idFilme" element={<Sessoes />}/>
				<Route path="/assentos/:idSessao" element={<Assentos setSucesso={setSucesso} />} />
				<Route path="/sucesso" element={<Sucesso sucesso={sucesso} />} />
			</Routes>
		</BrowserRouter>
	);
}
