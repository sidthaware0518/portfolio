import Section from "./Section.jsx";
import Timeline from "./Timeline.jsx";
import { experience } from "../data/profile.js";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My journey through projects, self-learning, and hands-on practice."
    >
      <Timeline items={experience} />
    </Section>
  );
}
