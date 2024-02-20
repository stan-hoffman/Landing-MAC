import Header from './components/header/header';
import Promo from './components/promo/promo';
import Brands from './components/brands/brands';
import Tools from './components/work-tools/tools';
import Statistic from './components/statistic/statistic';
import Review from './components/review/review';
import Price from './components/price/price';
import FAQ from './components/faq/faq';
import Trial from './components/trial/trial';
import Footer from './components/footer/footer';

import './App.css';

function App() {
  return (
    <div classNameName="App">
      <Header/>
      <Promo/>
      <Brands/>
      <Tools/>
      <Statistic/>
      <Review/>
      <Price/>
      <FAQ/>
      <Trial/>
      <Footer/>      
    </div>
  );
}

export default App;
