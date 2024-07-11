import ContainerIntroduction from "components/ContainerIntroduction";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Sobre } from "components/Sobre";
import ContainerSobreNos from "components/ContainerSobreNos";
import styles from "./app.module.scss"
//Lembrar de no final colocar um backgroud geral
//Lembrar de preencher o espaço entre footer e sobre nos
const App: React.FC = () => {
  return (
    <div className={styles.containerMain}>
      <Header />
      <ContainerIntroduction/>
      <Sobre />
      <div className={styles.containerFooter}>
        <ContainerSobreNos/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
