import React from "react";
import SiteFooter from "../../khyberkit/site-footer";
import footerLogo from "../../khyber.svg"
import SiteInfo from "@khyberlabs/khyberkit.site-info";
import SocialStack from "@khyberlabs/khyberkit.social-stack";
import CenterX from "@khyberlabs/khyberkit.center-x";
import {useMediaQuery} from "react-responsive";

const KhyberSiteInfo = () => {
  return (
    <SiteInfo
      logo={
        <img
          className={`footer-logo filter-gray`}
          src={footerLogo}
          alt="Khyber Logo"
        />
      }
      copyright="© Khyber Labs"
      language="English (EN)"
      locale="United States (US)"
    />
  );
};

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const renderLeftContent = () => {
    if (isMobile) {
      return (
        <CenterX>
          <KhyberSiteInfo />
        </CenterX>
      );
    } else {
      return <KhyberSiteInfo />;
    }
  };

  const renderRightContent = () => {
    if (isMobile) {
      return (
        <CenterX>
          <SocialStack
            color="#ADADAD"
            socialLinks={[
              {
                platform: "linkedin",
                url: "https://www.linkedin.com/company/khyber-labs",
              },
            ]}
          />
        </CenterX>
      );
    } else {
      return (
        <SocialStack
          color="#ADADAD"
          socialLinks={[
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/company/khyber-labs",
            },
          ]}
        />
      );
    }
  };

  return (
    <SiteFooter
      routes={[
        {
          title: "Products",
          subroutes: [
            { name: "F1", path: "/products" },
            { name: "Daytona", path: "/products" },
            { name: "Request access", path: "/request-access" },
            { name: "Pricing", path: "/pricing" },
          ],
        },
        {
          title: "Company",
          subroutes: [
            { name: "About", path: "/home#about" },
            { name: "Terms of Use", path: "/legal/terms-of-use" },
            { name: "Contact", path: "/contact" },
          ],
        },
        {},
      ]}
      rightContent={
        <div>
          <h3
            style={{
              color: "white",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Connect with us
          </h3>
          {renderRightContent()}
        </div>
      }
      leftContent={renderLeftContent()}
    />
  );
};

export default Footer;