import React from 'react'

import {motion} from 'framer-motion';

import {Title, GreenText, Paragraph, Table, GenerateCode} from "components";

import LazyLoad from 'react-lazy-load';

import Quotes from "assets/images/quotes.svg";

import CityPoster from 'assets/images/posters/city.webp'
import ZoomPoster from 'assets/images/posters/zoom.webp'
import classes from "./style.module.scss";

import {paragraphAnimation} from 'farmerMotionsAnimations/paragraphAnimation';
import { offset } from 'utils/lazyload';
import {isWebpSupported} from "react-image-webp/dist/utils";
import TopCardWebp from "../../../assets/images/topCardDesktop.webp";
import TopCardJpg from "../../../assets/images/topCardDesktop.jpg";

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
  const isWebp = isWebpSupported();

  return (
		<>
			<div id='fataMorgana' className={classes.container}>
				<div className={classes.topContainer}>
					<div className={classes.content}>
            {/*<LazyLoad offset={offset}>*/}
						{isWebp &&
						<video
							className={classes.zoomRay}
							autoPlay
							loop
							muted
							playsInline>
							<source
								src="https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082165/videos/Ray_exu8al.webm"
								type="video/webm"/>
						</video>
						}
            {/*</LazyLoad>*/}
						<div>
							<Title
								classname={classes.title}
								borderHeight="94%"
								contentStyle={{justifyContent: 'flex-start'}}
							>
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
										FATA
									</GreenText>
									<br />
									<GreenText classname={classes.greenText}>
										MORGANA
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
                <source src="https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082152/videos/city-zoom.video_woi3pv.webm" type="video/webm" />
                <source src="https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082149/videos/city-zoom.video_nnzkhr.mp4" type="video/mp4" />
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
					<LazyLoad offset={offset} className={classes.videoWrapper}>
            <video
              className={classes.desktopCity}
              poster={CityPoster}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082077/videos/city-desktop.video_kcsvgh.webm" type="video/webm" />
              <source src="https://res.cloudinary.com/dbbqyqt75/video/upload/v1666081885/videos/city-desktop.video_yd4hy9.mp4" type="video/mp4" />
            </video>
					</LazyLoad>
				</div>
			</div>
		</>
	);
};

export default FataMorganaDesktop;
