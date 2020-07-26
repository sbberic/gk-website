import React from "react";
import FlipImage from "../components/FlipImage";
import PageLayout from "../components/PageLayout";
import ProgramCard from "../components/ProgramCard";
import {
  BannerImage,
  ImageTypography,
  Section,
  SectionHeader,
} from "../components/styles";
import Testimonial from "../components/Testimonial";
import { feedbacks, mindset, programs } from "../data/data";

export default function Home() {
  return (
    <PageLayout title="Home">
      <BannerImage img="/banner.jpg">
        <ImageTypography variant="h2">
          Realize your potential
          <br></br>
          Through exploring the world
        </ImageTypography>
      </BannerImage>
      <SectionHeader variant="h4" align="center">
        Reinventing the learning experience
      </SectionHeader>
      <Section style={{ height: "300px" }}>
        {mindset.map((m) => (
          <FlipImage
            key={m.title}
            image={m.img}
            frontText={
              <ImageTypography variant="h4">{m.title}</ImageTypography>
            }
            backText={m.description}
          ></FlipImage>
        ))}
      </Section>
      <SectionHeader variant="h4" align="center">
        Featured Programs
      </SectionHeader>
      <Section>
        {programs.map((p) => (
          <ProgramCard key={p.title} {...p}></ProgramCard>
        ))}
      </Section>
      <SectionHeader variant="h4" align="center">
        Customer Feedback
      </SectionHeader>
      <Section>
        {feedbacks.map((p) => (
          <Testimonial key={p.title} {...p}></Testimonial>
        ))}
      </Section>
    </PageLayout>
  );
}
