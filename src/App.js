import './styles/App.css';
import Main from './components/Main.jsx'
import Footer from './components/Footer';
import Body from './components/Body';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Banner3 from './components/Banner3';
import Banner4 from './components/Banner4';

const bannerStyle1 = {
  title: "New Title",
  content: "New Content",
  bgColor: "cyan",
  fontColor: "#202020"
}

const bannerStyle2 = {
  title: "Destructuring",
  content: "some content",
  bgColor: "grey",
  fontColor: "orange"
}

function App() {
  return (
    <div className="App">
      <Main />
      <Body />
      <Banner
        title="New Title"
        content="New Content" 
        bgColor="pink"
        fontColor="red" />
      <Banner
        title="Dog"
        content="cat"
        bgColor="blue" 
        fontColor="white"/>
      <Banner2 data={bannerStyle1}/>
      <Banner3 data={bannerStyle2}/>
      <Banner4 n={3} wrapperText="hello" data={bannerStyle1}/>
      <Footer />
    </div>
  );
}

export default App;
