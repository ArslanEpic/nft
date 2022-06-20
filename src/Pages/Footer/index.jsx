import { Box, styled } from "@mui/material";
import { communityData, exploreData, navigationData } from "assets/Data";
import React from "react";
import { Shortcuts } from "./Shortcuts";
import { SocialMedia } from "./SocialMedia";
import { Subscribe } from "./Subscribe";
import footerbg from "../../assets/Images/footer-bg.svg";
const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "3% 7%",
  flexWrap: "wrap",
  backgroundImage: "url`(${footerbg})`",
  [theme.breakpoints.only("xs")]: {
    margin: "3%",
  },
}));
export const Footer = () => {
  return (
    <Root>
      <SocialMedia />
      <Shortcuts data={navigationData} heading={"Navigation"} />
      <Shortcuts data={exploreData} heading={"Explore"} />
      <Shortcuts data={communityData} heading={"Community"} />
      <Subscribe />
    </Root>
  );
};
