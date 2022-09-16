import { Title, GreenText, Paragraph, Dot, Morph } from "components";
import classes from "./style.module.scss";

const YourMorph = () => {
  return (
    <div className={classes.container}>
      <div className={classes.titleChooseMorph}>
        <Title
          isAfterBorder
          classname={classes.titleLeftSide}
          classnameWrapper={classes.wrapperContentTitleLeftSide}
        >
          choose your
          <br />
          <GreenText>Morph id</GreenText>
        </Title>
        <Paragraph className={classes.titleRightSide}>
          Metamorph è un avventura dinamica giocabile in terza persona di genere
          life simulator ambientato nel mondo virtuale Fata Morgana
          <Dot /> Il personaggio giocabile chiamatosi Surrogate è ampliamente
          personalizzabile con atributi
        </Paragraph>
      </div>

      <Morph />
    </div>
  );
};

export default YourMorph;
