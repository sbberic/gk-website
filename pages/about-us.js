import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";
import PageLayout from "../components/PageLayout";
import {
  AboutUsSection,
  AboutUsSectionTitle,
  BannerImage,
  DiffBlock,
  ImageTypography,
  MapContainer,
  TeamMember,
} from "../components/styles";

const fivePs = [
  "Place immersion",
  "Phenomenon observation",
  "People collaboration",
  "Problem driven",
  "Project results",
];

const diffBlocks = [
  {
    color: "blue",
    hex: "#2db9ff",
    text:
      "We work directly and closely with international education institutions and educators",
  },
  {
    color: "yellow",
    hex: "#ffcc73",
    text:
      "Every program is carefully crafted to combine pedagogical learning with interactive activities",
    ltr: true,
  },
  {
    color: "red",
    hex: "#fe4a4b",
    text:
      "GK facilitators provide personalized coaching by learning about students during the program",
    ltr: true,
  },

  {
    color: "green",
    hex: "#24a392",
    text:
      "We can cater to individual customers requests and customize our programs to their needs",
  },
];
const diffBlock = ({ color, hex, text, ltr }) => {
  return (
    <DiffBlock backgroundColor={hex}>
      {ltr ? (
        <img src={`/about-us/${color}.png`} />
      ) : (
        <Typography variant="h5">{text}</Typography>
      )}
      {ltr ? (
        <Typography variant="h5">{text}</Typography>
      ) : (
        <img src={`/about-us/${color}.png`} />
      )}
    </DiffBlock>
  );
};
const teamMembers = [
  {
    image: "/about-us/yao.jpg",
    name: "Wei Yao",
    lines: [
      "CEO and Co-founder",
      "MA, Peking University",
      "Certified Positive Discipline Educator",
      "yao@gk-education.com",
    ],
  },
  {
    image: "/about-us/huan.jpg",
    name: "Huan Zheng",
    lines: [
      "COO and Co-founder",
      "MBA & MEd, University of Virginia",
      "Innovative Education Practitioner",
      "huan@gk-education.com",
    ],
  },
];
const teamMember = ({ image, name, lines }) => {
  return (
    <TeamMember img={image}>
      <div className="image"></div>
      <Typography variant="h4">{name}</Typography>
      {lines.map((l) => (
        <Typography variant="h6">{l}</Typography>
      ))}
    </TeamMember>
  );
};
export default function AboutUs() {
  return (
    <PageLayout>
      <BannerImage img="/about-us/about-us-banner.jpg">
        <div
          style={{
            position: "absolute",
            left: "40px",
            bottom: "40px",
          }}
        >
          <ImageTypography variant="h2">The GK Story</ImageTypography>
        </div>
      </BannerImage>
      <div>
        <AboutUsSectionTitle>
          <Typography variant="h3">We believe in</Typography>
        </AboutUsSectionTitle>
        <AboutUsSection>
          <div className="left">
            <img src="/about-us/about-us-2.jpg" width="100%" />
          </div>
          <div className="right">
            <div className="text">
              <Typography variant="h4">
                Power of out-of-classroom-learning
              </Typography>
              <Typography variant="body1">
                Real world context makes the learning experience more engaging,
                exciting and challenging. By solving real world problems,
                students can improve their self-esteem and enthusiasm towards
                learning
              </Typography>
            </div>
          </div>
        </AboutUsSection>
        <AboutUsSection>
          <div className="right">
            <div className="text">
              <Typography variant="h4">Project based learning (PBL)</Typography>
              <Typography variant="body1">
                Our programs are interesting and meaningful; designed to
                motivate students intrinsically. The 5 P's of PBL are
                incorporated into our programs:
                <List>
                  {fivePs.map((p) => (
                    <ListItem key={p} style={{ padding: "0px" }}>
                      <ListItemIcon>
                        <ArrowForwardIosIcon />
                      </ListItemIcon>
                      <ListItemText primary={p}></ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Typography>
            </div>
          </div>
          <div className="left">
            <img src="/about-us/about-us-3.jpg" width="100%" />
          </div>
        </AboutUsSection>
        <AboutUsSectionTitle>
          <Typography variant="h3">What we do</Typography>
        </AboutUsSectionTitle>
        <AboutUsSection>
          <MapContainer>
            <img src="/about-us/about-us-map.jpg" />
            <Typography variant="body1">
              We provide international experiential learning programs to Chinese
              K12 students and executives. We have programs in 7 countries
              including the United Stated, the United Kingdom, New Zealand,
              Thailand, Singapore, Malaysia, and China. All programs are
              well-facilitated by passionate GK team members who have delivered
              programs for over 2000 customers.
            </Typography>
          </MapContainer>
        </AboutUsSection>
        <AboutUsSectionTitle>
          <Typography variant="h3">What differentiates us</Typography>
        </AboutUsSectionTitle>
        <AboutUsSection>{diffBlocks.map((b) => diffBlock(b))}</AboutUsSection>
        <AboutUsSectionTitle>
          <Typography variant="h3">Leadership Team</Typography>
        </AboutUsSectionTitle>
        <AboutUsSection style={{ margin: 40 }}>
          {teamMembers.map((t) => teamMember(t))}
        </AboutUsSection>
      </div>
    </PageLayout>
  );
}
