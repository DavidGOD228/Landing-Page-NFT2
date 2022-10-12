import classes from './style.module.scss';

export const roadmapTableData = [
  {
    headerText: 'Q1',
    year: 2022,
    title: 'Define Concept & Market Research',
    headerBackgroundColor: 'linear-gradient(90deg, rgba(253, 204, 143, 1) 0%, rgba(31, 249, 236, 1) 100%)',
    borderColor: '#fccb8f',
    headerColor: '#0B0B0C',
    subtitle: <ul className={classes.roadmapList}>
      <li> Market Research</li>
      <li>Creating graphic language, art concept, and 3D content</li>
      <li>Technology verification</li>
      <li>Project concept development</li>
      <li>Game engine R&D</li>
    </ul>
  },
  {
    headerText: 'Q2',
    year: 2022,
    title: 'Team onboarding & Start of game development',
    headerBackgroundColor: 'linear-gradient(90deg, rgba(36, 249, 232, 1) 0%, rgba(199, 247, 121, 1) 100%)',
    borderColor: '#23f8ea',
    headerColor: '#0B0B0C',
    subtitle: <ul className={classes.roadmapList}>
      <li> Founders funding round</li>
      <li>Preparing development roadmap</li>
      <li>Team recruitment to implement AAA-level game</li>
      <li>Start of game development</li>
      <li>Define decentralized parts of the game</li>
    </ul>
  },
  {
    headerText: 'Q3',
    year: 2022,
    title: 'Team scale & Internal basic mechanic tests',
    headerBackgroundColor: 'linear-gradient(90deg, rgba(201, 247, 120, 1) 0%, rgba(254, 217, 138, 1) 100%)',
    borderColor: '#c9f778',
    headerColor: '#0B0B0C',
    subtitle: <ul className={classes.roadmapList}>
      <li>Project Team Scale</li>
      <li>Game development on-going</li>
      <li>Morphs assets</li>
      <li>Basic environment assets</li>
      <li>Morphs outfits assets</li>
      <li>Project Lite paper</li>
    </ul>
  },
  {
    headerText: 'Q4',
    year: 2022,
    title: 'Official Announcements & Seed Round',
    borderColor: '#fdda89',
    headerBackgroundColor: 'linear-gradient(90deg, rgba(254, 218, 138, 1) 0%, rgba(100, 91, 61, 1) 32%, rgba(36, 36, 39, 1) 71%, rgba(36, 36, 39, 1) 100%)',
    subtitle: <ul className={classes.roadmapList}>
      <li>In-game economy part implemented</li>
      <li>Game Graphics</li>
      <li>NFT Teaser Release</li>
      <li>Community building</li>
      <li>Website v1 Launch</li>
      <li className={classes.grayText}>Seed round</li>
      <li className={classes.grayText}>AMA & Events</li>
      <li className={classes.grayText}>Ambassador Program</li>
    </ul>
  },
  {
    headerText: 'Q1',
    year: 2023,
    title: 'An internal test of beta version & Strategic round',
    borderColor: '#5A5A6B',
    subtitle: <ul className={`${classes.roadmapList} ${classes.grayText}`}>
      <li>PR Marketing Campaign</li>
      <li>KOLs onboarding</li>
      <li>Strategic round</li>
      <li>Internal tests of beta game release</li>
      <li>WEB 3.0 Penetration Testing</li>
      <li>Official Game Trailer</li>
      <li>Bug Bounty Program</li>
      <li>Website v2 release</li>
    </ul>
  },
  {
    headerText: 'Q2',
    year: 2023,
    title: 'Public Sale & TGE',
    borderColor: '#5A5A6B',
    subtitle: <ul className={`${classes.roadmapList} ${classes.grayText}`}>
      <li>Smart Contract Audit</li>
      <li>Public Sale</li>
      <li>DEX/CEX listing</li>
      <li>Game Public Beta Release (Testnet)</li>
      <li>Token Staking</li>
      <li>Bug fixing</li>
      <li>Game Official Release v1</li>
      <li>NFT Marketplace Release</li>
    </ul>
  },
  {
    headerText: 'Q3',
    year: 2023,
    title: 'Creators API',
    borderColor: '#5A5A6B',
    subtitle: <ul className={`${classes.roadmapList} ${classes.grayText}`}>
      <li>Creators API & Documentation</li>
      <li className={classes.comingSoon}>Coming soon...</li>
      <li className={classes.followText}>That's not all. Follow our social media to keep updated about changes and new challenges in our roadmap</li>
    </ul>
  },
]
