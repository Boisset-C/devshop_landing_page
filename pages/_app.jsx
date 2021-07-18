import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ContactSection } from "./page/ContactSection";
import { HeroSection } from "./page/HeroSection";
import { IntroSection } from "./page/IntroSection";
import { MeetTheTeamSection } from "./page/MeetTheTeamSection";
import { ServicesSection } from "./page/ServicesSection";
import { WorkDisplaySection } from "./page/WorkDisplaySection";

function MyApp() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <HeroSection />
      <IntroSection />
      <WorkDisplaySection />
      <ContactSection />
      <MeetTheTeamSection />
      <ServicesSection />
    </React.Fragment>
  );
}

export default MyApp;
