import Section from "./Section.jsx";
import Timeline from "./Timeline.jsx";
import { education } from "../data/profile.js";

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="My academic background and foundations.">
      <Timeline items={education} />
    </Section>
  );
}
