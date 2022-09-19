import WhiteTitle from "../../common/WhiteTitle/WhiteTitle";
import Member from "./components/Member/Member";

import Nazario from 'assets/images/nazario.png';
import NazarioDesktop from 'assets/images/nazario-desktop.png';
import Jonas from 'assets/images/jonas.png';
import JonasDesktop from 'assets/images/jonas-desktop.png';

import classes from './style.module.scss';
import { useWindowWidth } from 'hooks/useWindowWidth';

export const Wizard = () => {
	const isDesktop = useWindowWidth(1024);

  const members = [
    {
      name: "Nazario \n Vekhr",
      position: "Co-Founder & CEO",
      image: isDesktop ? NazarioDesktop: Nazario,
      text: (
        <p className={classes.text}>
          Nazario 8+ years of experience in the gaming industry. Worked on Sims, SimCity. Early crypto adopter and investor.
        </p>
      ),
      top: 7,
    },
    {
      name: "Jonas \n Weitzel",
      position: "Co-Founder & CTO",
      image: isDesktop ? JonasDesktop: Jonas,
      text: (
        <p className={classes.text}>
          Johnas 15+ years of game development experience. Managed to work on Clash of Clans, Brawl Stars.
        </p>
      ),
    },
  ];
  return (
    <>
      <div className={classes.titleWrapper}>
        <WhiteTitle classname={classes.title} title='wizard team'>
          {!isDesktop &&
            <p className={classes.mobileMembers}>21<span className={classes.mobileMembersText}>members</span></p>
          }
        </WhiteTitle>
      </div>
      {
        isDesktop ? <div className={classes.table}>
          <div className={classes.members}>
            {members.map(({name, position, image, text, top}) => (
              <Member
                key={name}
                style={top}
                name={name}
                position={position}
                image={image}
                text={text}
              />
            ))}
          </div>
          <div className={classes.secondBlock}>
            <div className={classes.membersMobile}>
              <h4 className={classes.membersAmount}>21 <span className={classes.membersText}>members</span></h4>
              <p>The game offers 2 experience scenarios based on the starting Morph ID card a player chooses.</p>
            </div>
            <div className={classes.team}>
              <div className={classes.photo}>
                PHOTO
              </div>
            </div>
          </div>
        </div> : <div className={classes.members}>
          {members.map(({name, position, image, text, top}) => (
            <Member
              key={name}
              style={top}
              name={name}
              position={position}
              image={image}
              text={text}
            />
          ))}
        </div>
      }
    </>
  );
};

export default Wizard;
