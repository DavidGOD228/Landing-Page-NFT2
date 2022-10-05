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
import Ray from 'assets/video/Ray.webm'
import classes from "./style.module.scss";

import {paragraphAnimation} from 'farmerMotionsAnimations/paragraphAnimation';
import { offset } from 'utils/lazyload';


const data = [
  {
    end: 15,
    text: "Building",
    suffix: "k",
  },
  {
    end: 950,
    text: "Active building",
    suffix: "",
  },
  {
    end: 8,
    text: "Citizens",
    suffix: "m",
  },
];

export const FataMorganaDesktop = () => {
  const parg1 = 'Fata Morgana is a city on the west coast of Tierra Madre, also known as Spirit Land. It is considered a modern multicultural metropolis, equipped with everything necessary for a utopian existence of 8 million inhabitants. At the beginning of Metamorph.bio Cyber-Trip, Fata Morgana was one of the favourite destinations of cybernetic travellers, considered to be a promising and exciting place to visit, as well as an unbridled and very dynamic place where all most restrained desires could be realized, and fears could be challenged for therapeutic purposes.';

  return (
		<>
			<div id='fataMorgana' className={classes.container}>
				<div className={classes.topContainer}>
					<div className={classes.content}>
            <video
              className={classes.zoomRay}
              autoPlay
              loop
              muted
              poster={ZoomPoster}
              playsInline>
              <source src={Ray} type="video/webm" />
            </video>
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
								style={{ margin: '69px auto 0px auto' }}
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
            <video
              className={classes.desktopCity}
              poster={CityPoster}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={CityDesktopWebm} type="video/webm" />
              <source src={DesktopCityMP4} type="video/mp4" />
            </video>
					</div>
				</div>
			</div>
		</>
	);
};

export default FataMorganaDesktop;
