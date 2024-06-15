import {createBrowserRouter, Route,  createRoutesFromElements, RouterProvider} from 'react-router-dom';

//pages
import Home from './pages/home';
import About from './pages/about';
//layout
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import CareersLayout from './layouts/CareersLayout';
import NotFound from './pages/NotFound';
import Careers from './pages/Careers/Careers';
import { careersLoader } from './pages/Careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/Careers/CareerDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="careers" element={<CareersLayout />}>
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader} 
        />
        <Route 
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    
    
       <RouterProvider router={router} />
    
  );
}

export default App
