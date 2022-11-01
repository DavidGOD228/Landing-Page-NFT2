import React from 'react'

import {motion} from 'framer-motion';

import {Title, GreenText, Paragraph, Table, GenerateCode} from "components";

import LazyLoad from 'react-lazy-load';

import classes from "./style.module.scss";

import {paragraphAnimation} from 'farmerMotionsAnimations/paragraphAnimation';
import { offset } from 'utils/lazyload';
import MobileSplashes from "./components/MobileSplashes/MobileSplashes";

import MobileCityPoster from 'assets/images/posters/city_Mobile.webp'
import {isWebpSupported} from "react-image-webp/dist/utils";
import TopCardWebp from "../../../assets/images/topCardDesktop.webp";
import TopCardJpg from "../../../assets/images/topCardDesktop.jpg";
import { isMobileSafari } from 'utils/isMobileSafari'

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
  const isWebp = isWebpSupported();

  const zoomVideo = isMobileSafari()
    ? "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082149/videos/city-zoom.video_nnzkhr.mp4"
    : "https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082152/videos/city-zoom.video_woi3pv.webm"
    
  const mobileCity = isMobileSafari()
    ? "https://res.cloudinary.com/dbbqyqt75/video/upload/v1667293931/videos/Mobile_City_oens1f.mp4"
    : "https://res.cloudinary.com/dbbqyqt75/video/upload/v1667293924/videos/Mobile_City_snlaz6.webm"


  return (
		<>
			<div id='fataMorgana' className={classes.container}>
				{/*<MobileSplashes />*/}
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

          {/* dust */}
					{isWebp &&
					<video
            className={classes.zoomRay}
            autoPlay
            loop
            muted
            playsInline>
            <source src="https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082165/videos/Ray_exu8al.webm" type="video/webm" />
          </video>
					}
          {/* zoom city */}
            <video
              className={classes.zoomVideo}
              src={"https://res.cloudinary.com/dbbqyqt75/video/upload/v1666082149/videos/city-zoom.video_nnzkhr.mp4"}
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
              poster="https://res.cloudinary.com/dbbqyqt75/image/upload/v1666086665/posters/zoom_mgajem.png"
              playsInline
            />

          {/* city without zoom */}
					<div offset={offset} className={classes.videoWrapper}>
            <video
              className={classes.mobileCity}
              autoPlay
              poster={MobileCityPoster}
              loop
              muted
              playsInline
              src={mobileCity}
            />
					</div>
				</div>
			</div>
		</>
	);
};
