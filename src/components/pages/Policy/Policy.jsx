import React from 'react';
import {Header, TopBlockInfo} from "components/index";

import classes from './style.module.scss'
import InfoBlock from "../../common/InfoBlock/InfoBlock";
import InfoParagraph from "../../common/InfoParagraph/InfoParagraph";
import Footer from "../../sections/Footer/Footer";
import {useResetScroll} from "../../../hooks/useResetScroll";

export const Policy = () => {
  useResetScroll()

  return (
    <>
      <Header/>
      <div className={classes.container}>
        <TopBlockInfo title="Privacy Policy" date="20 April 2022"/>
        <InfoBlock className={classes.secondBlock} title="1. Introduction">
          <InfoParagraph style={{fontWeight: 600}}>
            In this Privacy Policy, “Metamorph”, “us”, “we” or “our” means Metamorph Labs Pty Ltd
            ACN 651 740 537 in respect of the Metamorph DAO. We are committed to respecting your
            privacy. Our Privacy Policy sets out how we collect, use, store and disclose your
            personal information. <br/>
            By providing personal information to us, you consent to our collection, use and
            disclosure of your personal information in accordance with this Privacy Policy and any
            other arrangements that apply between us. We may change our Privacy Policy from time to
            time by publishing changes to it on our website. We encourage you to check our website
            periodically to ensure that you are aware of our current Privacy Policy. <br/>
            Personal information includes information or an opinion about an individual that is
            reasonably identifiable. For example, this may include your name, age, gender, postcode
            and contact details. It may also include financial information, including your credit
            card information.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="2. What personal information do we collect?">
          <InfoParagraph>
            We may collect the following types of personal information:
            <ul className="list" style={{marginBlockStart: 0}}>
              <li>name;</li>
              <li>email address;</li>
              <li>your device ID, device type, geo-location information, computer and connection
                information, statistics on page views, traffic to and from the sites, ad data, IP
                address and standard web log information;
              </li>
              <li>your Ethereum public address and Immutable X public address;</li>
              <li>any bids, offers, buys, sells, withdrawals, deposits, claims, mints, burns, or
                other like interactions (collectively, Transactions) associated with your IP
                address, your Ethereum public address and your Immutable X public address;
              </li>
              <li>details of the services we have provided to you or that you have enquired about,
                including any additional information necessary to deliver those services and respond
                to your enquiries;
              </li>
              <li>any additional information relating to you that you provide to us directly through
                our website or indirectly through your use of our website or online presence or
                through other websites or accounts from which you permit us to collect information;
              </li>
              <li> information you provide to us through customer surveys;</li>
              <li>or any other personal information that may be required in order to facilitate your
                dealings with us.
              </li>
            </ul>
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="3. How do we collect personal information?">
          <InfoParagraph>
            We may collect these types of personal information either directly from you, or from
            third parties. We may collect this information when you:
            <ul className="list" style={{marginBlockStart: 0, marginBlockEnd: 0}}>
              <li>register on our website;</li>
              <li>communicate with us through correspondence, chats, email, or when you share
                information
                with us from other social applications, services or websites;
              </li>
              <li>make enquiries, report suspicious market activity or submit comments, bug reports,
                ideas, or other feedback about the Metamorph website and our services, including
                without
                limitation about how to improve the Metamorph website (collectively, Feedback);
              </li>
              <li>connect your compatible Ethereum wallet to the Metamorph website, create an IMX
                wallet
                and connect the Immutable X wallet to the Metamorph website, sign a Transaction or
                otherwise interact with the suite of smart contracts that form the Metamorph
                protocol;
              </li>
              <li>interact with our sites, services, content and advertising; or</li>
              <li>invest in our business or enquire as to a potential purchase in our business.</li>
            </ul>
            In addition, when you apply for a job or position with us we may collect certain
            information from you (including your name, contact details, working history and relevant
            records checks) from any recruitment consultant, your previous employers and others who
            may be able to provide information to us to assist in our decision on whether or not to
            make you an offer of employment or engage you under a contract. This Privacy Policy does
            not apply to acts and practices in relation to employee records of our current and
            former employees, which are exempt from the Privacy Act.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="4. Why do we collect, use and disclose personal information?">
          <InfoParagraph>
            We may collect, hold, use and disclose your personal information for the following
            purposes:
            <ul className="list" style={{marginBlockStart: 0, marginBlockEnd: 0}}>
              <li>to enable you to access and use our services;</li>
              <li>to operate, protect, improve and optimise our website and services, business and
                our
                users’ experience, such as to perform analytics, conduct research and for
                advertising
                and marketing;
              </li>
              <li> to send you service, support and administrative messages, reminders, technical
                notices,
                updates, security alerts, and information requested by you;
              </li>
              <li>to send you marketing and promotional messages and other information that may be
                of
                interest to you, including information sent by, or on behalf of, our business
                partners
                that we think you may find interesting;
              </li>
              <li>to administer rewards, surveys, contests, or other promotional activities or
                events
                sponsored or managed by us or our business partners;
              </li>
              <li>to comply with our legal obligations, resolve any disputes that we may have with
                any of
                our users, enforce our Terms and Conditions and other agreements, or to protect the
                rights, property or safety of Metamorph, our users or others; and
              </li>
              <li>to consider your employment application.</li>
            </ul>
            We may also disclose your personal information to a trusted third party who also holds
            other information about you. This third party may combine that information in order to
            enable it and us to develop anonymised consumer insights so that we can better
            understand your preferences and interests, personalise your experience and enhance the
            products and services that you receive.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="5. Do we use your personal information for direct marketing?">
          <InfoParagraph>
            We and/or our carefully selected business partners may send you direct marketing
            communications and information about our services. This may take the form of emails,
            SMS, mail or other forms of communication, in accordance with the Spam Act and the
            Privacy Act. You may opt-out of receiving marketing materials from us by contacting us
            using the details set out below or by using the opt-out facilities provided (eg an
            unsubscribe link).
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="6. To whom do we disclose your personal information?">
          <InfoParagraph>
            We may disclose personal information for the purposes described in this privacy policy
            to:
            <ul className="list" style={{marginBlockStart: 0, marginBlockEnd: 0}}>
              <li>our employees and related bodies corporate;</li>
              <li>third party suppliers and service providers (including providers for the operation
                of our websites and/or our business or in connection with providing our services to
                you);
              </li>
              <li>professional advisers, dealers and agents;</li>
              <li>payment systems operators (eg merchants receiving card payments);</li>
              <li>our existing or potential agents, business partners or partners;</li>
              <li>our sponsors or promoters of any competition that we conduct via our services;
              </li>
              <li>anyone to whom our assets or businesses (or any part of them) are transferred;
              </li>
              <li> specific third parties authorised by you to receive information held by us;</li>
              <li>and/or other persons, including government agencies, regulatory bodies and law
                enforcement agencies, or as required, authorised or permitted by law.
              </li>
            </ul>
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="7. Disclosure of personal information outside Australia">
          <InfoParagraph>
            We may disclose personal information outside of Australia to third party suppliers and
            cloud providers located in the United States of America, Asia and Europe. <br/>
            We will, however, take reasonable steps to ensure that any overseas recipient will deal
            with such personal information in a way that is consistent with applicable privacy laws
            and regulations.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="8. Using our website and cookies">
          <InfoParagraph>
            We may collect personal information about you when you use and access our website.While
            we do not use browsing information to identify you personally, we may record certain
            information about your use of our website, such as which pages you visit, the time and
            date of your visit and the internet protocol address assigned to your computer. <br/>
            We may also use ‘cookies’ or other similar tracking technologies on our website that
            help us track your website usage and remember your preferences. Cookies are small files
            that store information on your computer, TV, mobile phone or other device. They enable
            the entity that put the cookie on your device to recognise you across different
            websites, services, devices and/or browsing sessions. You can disable cookies through
            your internet browser but our websites may not work as intended for you if you do
            so. <br/>
            We may also use cookies to enable us to collect data that may include personal
            information. For example, where a cookie is linked to your account, it will be
            considered personal information under the Privacy Act. We will handle any personal
            information collected by cookies in the same way that we handle all other personal
            information as described in this Privacy Policy.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="9. Use of third-party software">
          <InfoParagraph>
            All Transactions made through the Metamorph website are facilitated and run through your
            compatible Ethereum wallet (eg MetaMask, which is a Third-party Extension), and certain
            non-fungible tokens are transferred and minted using the Immutable X platform
            (Third-party Platform). The Metamorph website is the interface for an Ethereum-based
            suite of applications (eg staking, rewards, vesting, claiming, exchange, auctions),
            which allows each user to interact with the smart contracts deployed to the Ethereum
            blockchain to assist with facilitating Transactions. <br/>
            By using a Third-party Extension and a Third-party Platform to access our services you
            agree that you are governed by the terms of service and privacy policy for the
            applicable Third-party Extension and applicable terms for the Third-party Platform. For
            example, the MetaMask Terms of Service and Privacy Policy are available at
            (https://metamask.io/terms.html) and (https://metamask.io/privacy.html) respectively,
            but may be updated from time to time. In addition, the Immutable X Protocol Licence
            Agreement is available at
            (https://support.immutable.com/hc/en-us/articles/4404514460303-Immutable-X-Protocol-Licence-Agreement).
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="10. Security">
          <InfoParagraph>
            We may hold your personal information in either electronic or hard copy form. We take
            reasonable steps to protect your personal information from misuse, interference and
            loss, as well as unauthorised access, modification or disclosure and we use a number of
            physical, administrative, personnel and technical measures to protect your personal
            information.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="11. Data retention">
          <InfoParagraph>
            We may hold your personal information for as long as it is reasonably necessary for us
            to enable you to access and use our services, including the purposes detailed in section
            4. Your personal information may be retained wholly or in part for a longer or shorter
            period in accordance with applicable laws or for any other lawful reason. Data retention
            periods may be altered from time to time based on regulatory or other changes.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="12. Links">
          <InfoParagraph>
            Our website may contain links to websites operated by third parties. Those links are
            provided for convenience and may not remain current or be maintained. Unless expressly
            stated otherwise, we are not responsible for the privacy practices of, or any content
            on, those linked websites, and have no control over or rights in those linked websites.
            The privacy policies that apply to those other websites may differ substantially from
            our Privacy Policy, so we encourage individuals to read them before using those
            websites.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="13. Accessing or correcting your personal information">
          <InfoParagraph>
            You can access the personal information we hold about you by contacting us using the
            information below. Sometimes, we may not be able to provide you with access to all of
            your personal information and, where this is the case, we will tell you why. We may also
            need to verify your identity when you request your personal information. <br/>
            If you think that any personal information we hold about you is inaccurate, please
            contact us and we will take reasonable steps to ensure that it is corrected.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="14. Making a complaint">
          <InfoParagraph>
            If you think we have breached the Privacy Act, or you wish to make a complaint about the
            way we have handled your personal information, you can contact us using the details set
            out below. Please include your name, email address and/or telephone number and clearly
            describe your complaint. We will acknowledge your complaint and respond to you regarding
            your complaint within a reasonable period of time. If you think that we have failed to
            resolve the complaint satisfactorily, you may complain to the Office of the Australian
            Information Commissioner who may investigate your complaint further. <br/>

            <span className={classes.contactUs}>Contact Us</span>

            For further information about our Privacy Policy or practices, or to access or correct
            your personal information, or make a complaint, please contact us using the details set
            out below:
            <br/>
            <a className={classes.contactLink} href="mailto:contact@metamorph.bio">contact@metamorph.bio</a>
          </InfoParagraph>
        </InfoBlock>
      </div>
      <Footer/>
    </>
  );
};

