import AboutSection from "./section/AboutSection";
import ContactSection from "./section/ContactSection";
import ExperienceSection from "./section/ExperienceSection";
import HeroSection from "./section/HeroSection";
import SkillSection from "./section/SkillSection";

export default function LandingHome() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillSection />
      <ContactSection />
    </>
  );
}
