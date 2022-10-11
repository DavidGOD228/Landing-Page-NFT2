import React from 'react';
import {Header, TopBlockInfo} from "components/index";

import classes from './style.module.scss'
import InfoBlock from "../../common/InfoBlock/InfoBlock";
import InfoParagraph from "../../common/InfoParagraph/InfoParagraph";
import Footer from "../../sections/Footer/Footer";
import {useResetScroll} from "../../../hooks/useResetScroll";

export const Terms = () => {
  useResetScroll()
  return (
    <>
      <Header/>
      <div className={classes.container}>
        <TopBlockInfo title="Terms and conditions" date="May 16th, 2021"/>
        <InfoBlock className={classes.secondBlock} title="1. Welcome and Introduction">
          <InfoParagraph style={{fontWeight: 600}}>
            Welcome to the Metamorph Autobattler Private Beta 1 (Beta 1). This website and Beta 1 is
            owned and operated by Metamorph Labs Pty Ltd ACN 651 740 537 in respect of the Metamorph
            DAO (“Metamorph”, “we”, “us” or “our”). <br/>
            By accessing and/or using this website and related services, you agree to these Policy
            and Conditions, which include our Privacy Policy (available at
            contact@metamorph.bio/privacy) (Policy). You should review our Privacy Policy and these
            Policy carefully and immediately cease using our website if you do not agree to these
            Policy.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="2. Registration">
          <InfoParagraph>
            ou may register for Beta 1.
            When you register, you will provide us with your email address to register a username
            and password. We will handle your email address and any other personal information we
            collect as a result of email correspondence with you in accordance with our Privacy
            Policy.
            If you are 13 or older but under the age of 18, you represent that you have reviewed
            these Policy with your parent or legal guardian to make sure that you and your parent or
            legal guardian understand these Policy. If you are a parent or guardian permitting a
            person under the age of 18 (a Minor) to create an account, you agree to:
            <ul className="list">
              <li>exercise supervision over the Minor's use of our website and Beta 1;</li>
              <li>assume all risks associated with the Minor's use of our website and Beta 1,
                including the transmission of content or information to and from third parties via
                the Internet;
              </li>
              <li>ensure that the content and information that the Minor may encounter on our
                website and products are suitable for the Minor;
              </li>
              <li>assume liabilities resulting from the Minor's use of our website;</li>
              <li>ensure the accuracy and truthfulness of all information submitted by the Minor;
              </li>
              <li>and provide the consents contained in these Policy on behalf of the Minor.</li>
            </ul>
            We may ask you to confirm that you have your parent's or guardian's permission and that
            they have agreed to these Policy on your behalf, and, even if we do not do this, we will
            assume that this is the case and will provide access to our website and your account on
            this basis.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="3. Collection Notice">
          <InfoParagraph>
            We collect your email address in order to provide you with news about Metamorph and for
            purposes otherwise set out in our Privacy Policy at Metamorph.bio/privacy <br/>
            We may disclose that information to third parties that help us deliver our services
            (including information technology suppliers, communication suppliers and our business
            partners) or as required by law. If you do not provide this information, we may not be
            able to provide all of our services to you. <br/>
            Our Privacy Policy explains: (i) how we store and use, and how you may access and
            correct your personal information; (ii) how you can lodge a complaint regarding the
            handling of your personal information; and (iii) how we will handle any complaint. If
            you would like any further information about our privacy policies or practices, please
            contact us at support@Metamorph.bio. <br/>
            By providing your personal information to us, you consent to the collection, use,
            storage and disclosure of that information as described in the Privacy Policy and these
            Policy.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="4. Accuracy, completeness and timeliness of information">
          <InfoParagraph>
            The information on our website is not comprehensive and is intended to provide access to
            information about the Metamorph project, Metamorph DAO and Beta 1. While we use all
            reasonable attempts to ensure the accuracy and completeness of the information on our
            website, to the extent permitted by law, including the Australian Consumer Law, we make
            no warranty regarding the information on this website. You should monitor any changes to
            the information contained on this website. <br/>
            We are not liable to you or anyone else if interference with or damage to your computer
            systems occurs in connection with the use of this website or a linked website. You must
            take your own precautions to ensure that whatever you select for your use from our
            website is free of viruses or anything else (such as worms or Trojan horses) that may
            interfere with or damage the operations of your computer systems.
            We may, from time to time and without notice, change or add to the website (including
            the Policy) or the information, products or services described in it. However, we do not
            undertake to keep the website updated. We are not liable to you or anyone else if errors
            occur in the information on the website or if that information is not up-to-date.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="5. Linked sites">
          <InfoParagraph>
            Our website may contain links to websites operated by third parties. Those links are
            provided for convenience and may not remain current or be maintained. Unless expressly
            stated otherwise, we do not endorse and are not responsible for the content on those
            linked websites and have no control over or rights in those linked websites.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="6. Intellectual property right">
          <InfoParagraph>
            Unless otherwise indicated, we own or license from third parties all rights, title and
            interest (including copyright, designs, patents, trademarks and other intellectual
            property rights) in this website and in all of the material (including all text,
            graphics, logos, audio, video and software) made available on this website
            (Content). <br/>
            Your use of this website and use of and access to any Content does not grant or transfer
            any rights, title or interest to you in relation to this website or the Content. However
            we do grant you a licence to access the website and view the Content on the terms and
            conditions set out in this Agreement and, where applicable, as expressly authorised by
            us and/or our third party licensors. <br/>
            Any reproduction or redistribution of this website or the Content is prohibited and may
            result in civil and criminal penalties. In addition, you must not copy the Content to
            any other server, location or support for publication, reproduction or distribution is
            expressly prohibited.
            All other use, copying or reproduction of this website, the Content or any part of it is
            prohibited, except to the extent permitted by law.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="7. No commercial use">
          <InfoParagraph>
            This website is for your personal, non-commercial use only. You may not modify, copy,
            distribute, transmit, display, perform, reproduce, publish, license, commercially
            exploit, create derivative works from, transfer, or sell any Content, software, products
            or services contained within this website. You may not use this website, or any of its
            Content, to further any commercial purpose, including any advertising or advertising
            revenue generation activity on your own website.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="8. Unacceptable activity">
          <InfoParagraph>
            You must not do any act that we would deem to be inappropriate, is unlawful or is
            prohibited by any laws applicable to our website, including but not limited to:
            <ul className="list" style={{marginBlockEnd: 0}}>
              <li>any act that would constitute a breach of either the privacy (including uploading
                private or personal information without an individual's consent) or any other of the
                legal rights of individuals;
              </li>
              <li>using this website to defame or libel us, our employees or other individuals;</li>
              <li>uploading files that contain viruses that may cause damage to our property or the
                property of other individuals;
              </li>
              <li>posting or transmitting to this website any non-authorised material including, but
                not limited to, material that is, in our opinion, likely to cause annoyance, or
                which is defamatory, racist, obscene, threatening, pornographic or otherwise or
                which is detrimental to or in violation of our systems or a third party's systems or
                network security.
              </li>
            </ul>
            If we allow you to post any information to our website, we have the right to take down
            this information at our sole discretion and without notice.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="9. Warranties and disclaimers">
          <InfoParagraph>
            To the maximum extent permitted by law, including the Australian Consumer Law, we make
            no warranties or representations about this website, Beta 1 or the Content, including
            but not limited to warranties or representations that they will be complete, accurate or
            up-to-date, that access will be uninterrupted or error-free or free from viruses, or
            that this website will be secure. <br/>
            We reserve the right to restrict, suspend or terminate without notice your access to
            this website, any Content, or any feature of this website at any time without notice and
            we will not be responsible for any loss, cost, damage or liability that may arise as a
            result.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="10. Liability">
          <InfoParagraph>
            To the maximum extent permitted by law, including the Australian Consumer Law, in no
            event shall we be liable for any direct and indirect loss, damage or expense –
            irrespective of the manner in which it occurs – which may be suffered due to your use of
            our website and/or the information or materials contained on it, or as a result of the
            inaccessibility of this website and/or the fact that certain information or materials
            contained on it are incorrect, incomplete or not up-to-date.
          </InfoParagraph>
        </InfoBlock>
        <InfoBlock title="11. Jurisdiction and governing law">
          <InfoParagraph>
            Your use of the website and these Policy are governed by the law of New South Wales,
            Australia and you submit to the non-exclusive jurisdiction of the courts exercising
            jurisdiction in New South Wales, Australia.
          </InfoParagraph>
        </InfoBlock>
      </div>
      <Footer/>
    </>
  );
};

