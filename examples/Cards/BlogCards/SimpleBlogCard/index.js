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

import Link from "next/link";
import Image from "next/image";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";

function SimpleBlogCard({ image, title, description, action }) {
  return (
    <Card>
      <MDBox position="relative" borderRadius="lg" mt={-3} mx={2}>
        <MDBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="relative"
          zIndex={1}
          overflow="hidden"
        >
          {image.src ? (
            <Image
              src={image}
              alt={title}
              size="100%"
              quality={100}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          ) : (
            image
          )}
        </MDBox>
        <MDBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top="3%"
          sx={{
            backgroundImage: `url(${image.src || image.props.src.src})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MDBox>
      <MDBox p={3}>
        <MDTypography
          display="inline"
          variant="h3"
          textTransform="capitalize"
          fontWeight="bold"
        >
          {title}
        </MDTypography>
        <MDBox mt={2} mb={3}>
          <MDTypography variant="body2" component="p" color="text">
            {description}
          </MDTypography>
        </MDBox>
        {action.type === "external" ? (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <MDButton color={action.color ? action.color : "dark"}>
              {action.label}
            </MDButton>
          </MuiLink>
        ) : (
          <Link href={action.route}>
            <MDButton color={action.color ? action.color : "dark"}>
              {action.label}
            </MDButton>
          </Link>
        )}
      </MDBox>
    </Card>
  );
}

// Typechecking props for the SimpleBlogCard
SimpleBlogCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
      "default",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default SimpleBlogCard;
