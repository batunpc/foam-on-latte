// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
// import Layout from './components/Layout';

// export function App() {
//     return (
//         <div className="bg-primary flex flex-col min-h-screen">
//             <Routes>
//                 <Route element={<Layout/>}>
//                     <Route path="/" element={<Home/>}/>
//                     <Route path="*" element={<NotFound/>}/>
//                 </Route>
//             </Routes>
//         </div>
//     );
// }

// export function WrappedApp() {
//     return (
//         <BrowserRouter>
//             <App/>
//         </BrowserRouter>
//     );
// }

import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <Spline scene="https://prod.spline.design/VVQYSJrKuTwNEfBj/scene.splinecode" />
  );
}
