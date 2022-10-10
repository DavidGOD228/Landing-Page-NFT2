import { useRef } from 'react';
import WhiteTitle from "../../common/WhiteTitle/WhiteTitle";
import Member from "./components/Member/Member";

import Nazario from 'assets/images/nazario.png';
import NazarioDesktop from 'assets/images/nazario-desktop.png';
import Jonas from 'assets/images/jonas.png';
import JonasDesktop from 'assets/images/jonas-desktop.png';

import classes from './style.module.scss';
import { useWindowWidth } from 'hooks/useWindowWidth';

import teamBackgroundPng from "assets/images/team.webp";
import teamMainBackgroundPng from "assets/images/teamMain.webp";

import { useLazyBackgroundLoad } from 'hooks/useLazyBackgroundLoad';


export const Wizard = () => {
	const isDesktop = useWindowWidth(768);

  const members = [
    {
      name: "Nazario \n Vekhr",
      position: "Co-Founder & CEO",
      image: isDesktop ? NazarioDesktop: Nazario,
      text: (
        <p className={classes.text}>
          8+ years experience of gaming and game marketing experience in industry leaders such as EA Mobile and Lockwood Publishing Ltd. Worked on top mobile charts titles such as The Sims Mobile, Avakin Life, and BitLife. Early crypto adopter and angel investor.
        </p>
      ),
      top: 7,
    },
    {
      name: "Jonas \n Weitzel",
      position: "CTO",
      image: isDesktop ? JonasDesktop: Jonas,
      text: (
        <p className={classes.text}>
          15+ years in leading multidisciplinary R&D and engineering teams. Have collected experience such companies as AWS, Jelly Buttons, Playtika, and Ubisoft. Successfully advised blockchain projects.
        </p>
      ),
    },
  ];

  const refDivBackground = useRef();
	const urlBackground = useLazyBackgroundLoad(teamBackgroundPng, refDivBackground);

  const refDivTeamMainBackground = useRef();
	const urlBackgroundTeamMain = useLazyBackgroundLoad(teamMainBackgroundPng, refDivBackground);

  return (
		<>
			<div className={classes.titleWrapper}>
				<WhiteTitle classname={classes.title} title='wizard team'>
					{!isDesktop && (
						<p className={classes.mobileMembers}>
							24<span className={classes.mobileMembersText}>members</span>
						</p>
					)}
				</WhiteTitle>
			</div>
			{isDesktop ? (
				<div className={classes.table}>
					<div className={classes.members}>
						{members.map(({ name, position, image, text, top }) => (
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
							<h4 className={classes.membersAmount}>
								24 <span className={classes.membersText}>members</span>
							</h4>
							<p className={classes.memberParagraph}>
                Matches are won by talent and championships are won by teamwork and passion.
							</p>
						</div>
						<div
							className={classes.team}
							ref={refDivBackground}
							style={{ backgroundImage: `url(${urlBackground})` }}
						>
							<div
								className={classes.photo}
								ref={refDivTeamMainBackground}
								style={{ backgroundImage: `url(${urlBackgroundTeamMain})` }}
							/>
						</div>
					</div>
				</div>
			) : (
				<div className={classes.members}>
					{members.map(({ name, position, image, text, top }) => (
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
			)}
		</>
	);
};

export default Wizard;
