import React from 'react'

import {motion} from 'framer-motion';

import {Title, GreenText, Paragraph, Table, GenerateCode} from "components";

import LazyLoad from 'react-lazy-load';

import classes from "./style.module.scss";

import {paragraphAnimation} from 'farmerMotionsAnimations/paragraphAnimation';
import { offset } from 'utils/lazyload';
import MobileSplashes from "./components/MobileSplashes/MobileSplashes";

import MobileCityImg from 'assets/images/posters/problems-videos/city/City.webp';

import MobileCityWebm from "assets/video/city-mobile.video.webm";
import MobileCityMP4 from "assets/video/city-mobile.video.mp4";

import CityZoomWebm from "assets/video/city-zoom.video.webm";
import CityZoomMP4 from "assets/video/city-zoom.video.mp4";

import MobileCityPoster from 'assets/images/posters/city_Mobile.webp'
import MobileZoomPoster from 'assets/images/posters/zoom.png'

import ZoomPoster from "assets/images/posters/zoom.png";

import Ray from "assets/video/Ray.webm";

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

export const FataMorganaMobile = () => {

  const parg1 = 'Fata Morgana is a city on the west coast of Tierra Madre, also known as Spirit Land. It is considered a modern multicultural metropolis, equipped with everything necessary for a utopian existence of 8 million inhabitants.\nAt the beginning of Metamorph.bio Cyber-Trip, Fata Morgana was one of the favourite destinations of cybernetic travellers, considered to be a promising and exciting place to visit, as well as an unbridled and very dynamic placewhere all most restrained desires could be realized, and fears could be challenged for therapeutic purposes.';

  return (
		<>
			<div id='fataMorgana' className={classes.container}>
				<MobileSplashes />
				<div className={classes.topContainer}>
					<div className={classes.content}>
						<div>
							<Title
								contentStyle={{justifyContent: 'flex-start'}}
								classname={classes.title}
								borderHeight="95%"
							>
									<motion.p
										className={classes.chineseText}
										initial={{ y: 25 }}
										whileInView={{ y: 0 }}
										transition={{
											duration: 1,
											ease: 'easeInOut'
										}}
										viewport={{ once: true }}
									>
										全部的 自由 行動的
									</motion.p>
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
						</div>
					</div>
          
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
				<div className={classes.cityContainer}>
						<div className={classes.mobileTableWrapper}>
							<Table
								style={{ margin: '50px auto 0', width: '100%', height: 89 }}
								isGrayTable
								data={data}
							/>
						</div>
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
						an adventure that will take your breath away
					</motion.p>
					<video
            className={classes.zoomRay}
            autoPlay
            loop
            muted
            poster={ZoomPoster}
            playsInline>
            <source src={Ray} type="video/webm" />
          </video>
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
              poster={MobileZoomPoster}
              playsInline>
              <source src={CityZoomWebm} type="video/webm" />
              <source src={CityZoomMP4} type="video/mp4" />
            </motion.video>
          </LazyLoad>
					<LazyLoad offset={offset} className={classes.videoWrapper}>
            <video
              className={classes.mobileCity}
              autoPlay
              poster={MobileCityPoster}
              loop
              muted
              playsInline>
              <source src={MobileCityWebm} type="video/webm" />
              <source src={MobileCityMP4} type="video/mp4" />
            </video>
					</LazyLoad>
				</div>
			</div>
		</>
	);
};
