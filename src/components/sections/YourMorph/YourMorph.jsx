import { Title, GreenText, Paragraph, Morph, MorphMobile } from 'components';
import classes from './style.module.scss';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { media } from 'utils/media';

export const YourMorph = () => {
  const isAfterBorder = useWindowWidth(media.mDesktop);

	return (
		<div className={classes.container}>
			<div className={classes.titleChooseMorph}>
				<Title
					isAfterBorder={isAfterBorder} // if false - after, true - before 
					classname={classes.titleLeftSide}
					classnameWrapper={classes.wrapperContentTitleLeftSide}
				>
					choose your
					<br />
					<GreenText>Morph id</GreenText>
				</Title>
				<Paragraph className={classes.titleRightSide}>
					Metamorph è un avventura dinamica giocabile in terza persona di genere
					life simulator ambientato nel mondo virtuale Fata Morgana. Il
					personaggio giocabile chiamatosi Surrogate è ampliamente
					personalizzabile con atributi
				</Paragraph>
			</div>

			<Morph />
      <MorphMobile />
		</div>
	);
};

export default YourMorph;
