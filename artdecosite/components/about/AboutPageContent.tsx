import { specialties } from "@/lib/constants/specialties";
import { AboutHero } from "./AboutHero";
import { SpecialtyRow } from "./SpecialtyRow";

export function AboutPageContent() {
  return (
    <>
      <AboutHero />
      {specialties.map((specialty) => (
        <SpecialtyRow key={specialty.number} specialty={specialty} />
      ))}
    </>
  );
}
