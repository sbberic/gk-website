import { Typography } from "@material-ui/core";
import React from "react";
import ContactForm from "../components/ContactForm";
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
        <div
          style={{
            position: "absolute",
            left: "40px",
            top: "40px",
          }}
        >
          <ImageTypography variant="h2">Discover yourself</ImageTypography>
          <ImageTypography variant="h2">Through exploring</ImageTypography>
          <ImageTypography variant="h2">the world</ImageTypography>
        </div>
        <div
          style={{
            position: "absolute",
            left: "40px",
            bottom: "40px",
          }}
        >
          <ImageTypography variant="h2" style={{ fontSize: 40 }}>
            GK Education
          </ImageTypography>
        </div>
      </BannerImage>
      <SectionHeader variant="h4" align="center">
        Reinventing the learning experience
      </SectionHeader>
      <Section style={{ height: "300px" }}>
        {mindset.map((m) => (
          <FlipImage
            key={m.title}
            image={m.img}
            frontText={<Typography variant="h4">{m.title}</Typography>}
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
      <SectionHeader variant="h4" align="center">
        Wonderful Moments
      </SectionHeader>
      <Section>
        <img src="/moments.png" width="100%" />
      </Section>
      <ContactForm />
    </PageLayout>
  );
}
