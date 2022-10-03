import React from 'react'

import {motion} from 'framer-motion';

import {Title, GreenText, Paragraph, Table, GenerateCode} from "components";

import LazyLoad from 'react-lazy-load';

import Quotes from "assets/images/quotes.svg";

import DesktopCityMP4 from 'assets/video/city-desktop.video.mp4'
import CityDesktopWebm from 'assets/video/city-desktop.video.webm';
import CityZoomWebm from 'assets/video/city-zoom.video.webm';
import CityZoomMP4 from 'assets/video/city-zoom.video.mp4';
import CityPoster from 'assets/images/posters/city.jpg'
import ZoomPoster from 'assets/images/posters/zoom.png'
import classes from "./style.module.scss";

import {paragraphAnimation} from 'farmerMotionsAnimations/paragraphAnimation';
import { offset } from 'utils/lazyload';


const data = [
  {
    end: 15,
    text: "HOUSES",
    suffix: "k",
  },
  {
    end: 200,
    text: "APARTMENTS",
    suffix: "k",
  },
  {
    end: 15,
    text: "HOUSES",
    suffix: "k",
  },
];

export const FataMorganaDesktop = () => {
  const parg1 = 'Metamorph is built on putting the power of choice into the hands of players All in game actions are governed by you, with no artificial barriers. We empower you to create your unique story by participating in a world where we expect the unexpected. From moral actions to investments, crusades, businesses operations and gambling – you havethe choice play and earn in a style you enjoy.';

  return (
		<>
			<div id='fataMorgana' className={classes.container}>
				<div className={classes.topContainer}>
					<div className={classes.content}>
						<div>
							<Title classname={classes.title}>
								<motion.p
									className={classes.welcome}
									initial={{ y: 150 }}
									whileInView={{ y: 0 }}
									transition={{
										duration: 1,
										ease: 'easeInOut'
									}}
									viewport={{ once: true }}
								>
									WELCOME TO..
								</motion.p>
								<motion.div
									initial={{ y: 150 }}
									whileInView={{ y: 0 }}
									transition={{
										duration: 1,
										delay: 0.2,
										ease: 'easeInOut'
									}}
									viewport={{ once: true }}
								>
									<GreenText classname={classes.greenText}>
										FATA <br /> MORGANA
									</GreenText>
								</motion.div>
							</Title>
							<motion.span
								className={classes.code}
								initial={{ y: 150 }}
								whileInView={{ y: 0 }}
								transition={{
									duration: 1,
									delay: 0.3,
									ease: 'easeInOut'
								}}
								viewport={{ once: true }}
							>
								<GenerateCode>D2128NDJK376LAZXWM3NK7</GenerateCode>
							</motion.span>
							<motion.div
								initial={{ y: 150 }}
								whileInView={{ y: 0 }}
								transition={{
									duration: 1,
									delay: 0.3,
									ease: 'easeInOut'
								}}
								viewport={{ once: true }}
							>
								<Paragraph className={classes.paragraph}>
									{paragraphAnimation(parg1)}
								</Paragraph>
							</motion.div>
						</div>
						<div className={classes.secondBlockFataMorgana}>
							<motion.div
								style={{ margin: '69px 56px 0px auto' }}
								initial={{ y: 150 }}
								whileInView={{ y: 0 }}
								transition={{
									duration: 1,
									delay: 0.3,
									ease: 'easeInOut'
								}}
								viewport={{ once: true }}
							>
								<Table style={{ width: 400, height: 114 }} data={data} />
							</motion.div>
							<LazyLoad offset={offset}>
								<motion.video
									className={classes.zoomVideo}
									initial={{ y: 150 }}
									whileInView={{ y: 0 }}
									transition={{
										duration: 1,
										delay: 0.3,
										ease: 'easeInOut'
									}}
									viewport={{ once: true }}
									autoPlay
									loop
									muted
									poster={ZoomPoster}
									playsInline>
									<source src={CityZoomWebm} type="video/webm" />
									<source src={CityZoomMP4} type="video/mp4" />
								</motion.video>
							</LazyLoad>
							<motion.p
								className={classes.cityText}
								initial={{ y: 150 }}
								whileInView={{ y: 0 }}
								transition={{
									duration: 1,
									delay: 0.3,
									ease: 'easeInOut'
								}}
								viewport={{ once: true }}
							>
								<img className={classes.quotes} src={Quotes} alt='' />
								an adventure that will take your breath away
							</motion.p>
						</div>
					</div>

				</div>
				<div className={classes.cityContainer}>
					<div className={classes.videoWrapper}>
						<LazyLoad offset={offset}>
							<video
								className={classes.desktopCity}
								poster={CityPoster}
								autoPlay
								loop
								muted
								playsInline>
								<source src={CityDesktopWebm} type="video/webm" />
								<source src={DesktopCityMP4} type="video/mp4" />
							</video>
						</LazyLoad>
					</div>
				</div>
			</div>
		</>
	);
};

export default FataMorganaDesktop;
