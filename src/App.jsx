import Container from "./components/Container";
import Header from "./components/Header";
import imgHeader from "./assets/react.png";
import Presentacion from "./components/Presentacion";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Header id="cabecalho" imgHeader={imgHeader} />
      <Container id="apresentacao" container={<Presentacion />} />
      <Container id="sobreMim" container={<AboutMe />} />
      <Container id="habilidades" container={<Skills />} />
      <Projects id="projetos" />
      <Container id="contato" container={<Contact />} />
      <span></span>
    </>
  );
}

export default App;
