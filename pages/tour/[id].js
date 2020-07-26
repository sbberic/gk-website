import {
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import ContactForm from "../../components/ContactForm";
import PageLayout from "../../components/PageLayout";
import {
  ProgramHighlight,
  SampleSchedule,
  TourBannerTypography,
  TourContainer,
  TourImage,
} from "../../components/styles";
import { tourPaths, tourProps } from "../../data/data";

export default function Tour({
  bannerImg,
  title,
  subtitle,
  highlights = [],
  sampleSchedule = [],
  id = "",
}) {
  return (
    <PageLayout>
      <TourImage img={bannerImg} height={500}>
        <TourBannerTypography variant="h2" fontWeight="fontWeightBold">
          {title}
          <br></br>
          {subtitle}
        </TourBannerTypography>
      </TourImage>
      <TourContainer>
        <ProgramHighlight variant="outlined">
          <List component="nav" aria-label="highlights" style={{ flex: 2 }}>
            {highlights.map((h) => (
              <ListItem button key={h}>
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText primary={h} />
              </ListItem>
            ))}
          </List>
          <Typography variant="h3" style={{ flex: 1 }}>
            Program Highlights
          </Typography>
        </ProgramHighlight>
        <div style={{ display: "flex", marginTop: 20 }}>
          <SampleSchedule variant="outlined">
            <Typography variant="h3">Sample Schedule</Typography>
            <List
              component="nav"
              aria-label="sample-schedule"
              style={{ flex: 2 }}
            >
              {sampleSchedule.map((s) => (
                <ListItem
                  key={s.label}
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                >
                  <ListItemIcon>
                    <Badge>{s.label}</Badge>
                  </ListItemIcon>
                  <List
                    component="nav"
                    aria-label={`sample-schedule-${s.label}`}
                  >
                    {s.items.map((item) => (
                      <ListItem
                        button
                        key={item}
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                      >
                        <ListItemIcon>
                          <FiberManualRecordIcon />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </ListItem>
              ))}
            </List>
          </SampleSchedule>
          <div style={{ flex: 1 }}>
            <Carousel showArrows showIndicators>
              {[1, 2, 3, 4, 5, 6].map((key) => {
                return (
                  <div
                    key={key}
                    style={{
                      height: 500,
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={`/tour/${id}/${key}.jpg`} />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </TourContainer>
      <ContactForm />
    </PageLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: tourPaths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return tourProps.find((t) => t.props.id === params.id);
  // Fetch necessary data for the blog post using params.id
}
