import SectionWrapper from "@/components/Layout/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";

export function SectionServices() {
  return (
    <SectionWrapper>
      <div className="flex gap-4 justify-between w-full ">
        {[1, 2, 3, 4].map(() => (
          <ServiceCard
            title={"hey"}
            description="ddd"
            imageAlt="service"
            imageUrl="https://unsplash.it/400/400"
            link="/"
            key={"hey"}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
