import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';

import SEO from './components/SEO';

function App() {
  return (
    <Layout>
      <SEO />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
    </Layout>
  );
}

export default App;