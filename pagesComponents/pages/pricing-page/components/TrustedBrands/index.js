/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import Image from "next/image";

// @mui material components
import Grid from "@mui/material/Grid";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// Images
import coinbase from "/assets/images/logos/gray-logos/logo-coinbase.svg";
import nasa from "/assets/images/logos/gray-logos/logo-nasa.svg";
import netflix from "/assets/images/logos/gray-logos/logo-netflix.svg";
import pinterest from "/assets/images/logos/gray-logos/logo-pinterest.svg";
import spotify from "/assets/images/logos/gray-logos/logo-spotify.svg";
import vodafone from "/assets/images/logos/gray-logos/logo-vodafone.svg";

function PricingCards() {
  return (
    <MDBox mt={8}>
      <MDBox textAlign="center">
        <MDTypography variant="h6" opacity={0.5}>
          More than 50+ brands trust Material
        </MDTypography>
      </MDBox>
      <MDBox mt={5} ml={{ xs: 0, lg: -8 }}>
        <Grid container spacing={4}>
          <Grid item xs={6} md={4} lg={2}>
            <MDBox width={{ xs: "100%", xl: "125%" }} opacity={0.9} mb={3}>
              <Image
                src={coinbase}
                alt="coinbase"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MDBox width={{ xs: "100%", xl: "125%" }} opacity={0.9} mb={3}>
              <Image
                src={nasa}
                alt="nasa"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MDBox width={{ xs: "100%", xl: "125%" }} opacity={0.9} mb={3}>
              <Image
                src={netflix}
                alt="netflix"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MDBox width={{ xs: "100%", xl: "125%" }} opacity={0.9} mb={3}>
              <Image
                src={pinterest}
                alt="pinterest"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MDBox width={{ xs: "100%", xl: "125%" }} opacity={0.9} mb={3}>
              <Image
                src={spotify}
                alt="spotify"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MDBox width={{ xs: "100%", xl: "125%" }} opacity={0.9} mb={3}>
              <Image
                src={vodafone}
                alt="vodafone"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default PricingCards;
