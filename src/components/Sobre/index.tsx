import styles from "./sobre.module.scss";
import data from "./data";
import { CardSobre } from "../CardSobre";

export const Sobre = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__titulo}>Aprenda mais sobre saúde bucal</h2>
      { data.map(item => (
        <CardSobre 
          key={item.id} 
          tituloCard={item.tituloCard}
          descricaoCard={item.descricaoCard}
          foto={item.foto}
          infosTexto={item.infosTexto}
          primario={item.primario}
          subtituloCard={item.subtituloCard}
          infosDescritiva={item.infosDescritiva}
          alt={item.alt}
          cardDesc={item.cardDesc}
          fotoSeparacao={item.fotoSeparacao}
        />
      )) }
    </div>
  )
}