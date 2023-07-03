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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDBadge from "/components/MDBadge";
import MDTypography from "/components/MDTypography";
import MDAvatar from "/components/MDAvatar";
import MDProgress from "/components/MDProgress";

// Custom styles for the Card

function Card({ image, badge, content, progress, attachedFiles, members }) {
  const renderMembers = members.map((member, key) => {
    const imageAlt = `image-${key}`;

    return (
      <MDAvatar
        key={imageAlt}
        src={member.src || member}
        alt={imageAlt}
        size="xs"
        sx={{
          border: ({ borders: { borderWidth }, palette: { white } }) =>
            `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1,
          mr: 0,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        }}
      />
    );
  });

  return (
    <>
      {image && (
        <MDBox
          width="100%"
          height="16rem"
          borderRadius="lg"
          mb={1}
          overflow="hidden"
        >
          <Image
            src={image}
            alt="image"
            quality={100}
            width={800}
            height={800}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </MDBox>
      )}
      <MDBadge
        size="xs"
        color={badge.color}
        badgeContent={badge.label}
        container
      />
      <MDBox mt={1} mb={2}>
        <MDTypography variant="body2" color="text">
          {content}
        </MDTypography>
        {progress > 0 && (
          <MDBox mt={0.25}>
            <MDProgress
              variant="gradient"
              value={progress}
              color={badge.color}
            />
          </MDBox>
        )}
      </MDBox>
      <MDBox display="flex" justifyContent="space-between" alignItems="center">
        <MDBox display="flex" alignItems="center" color="text">
          {attachedFiles && (
            <>
              <MDTypography variant="body2" color="text" sx={{ lineHeight: 0 }}>
                <Icon sx={{ fontWeight: "bold" }}>attach_file</Icon>
              </MDTypography>
              <MDTypography variant="button" fontWeight="regular" color="text">
                &nbsp;{attachedFiles}
              </MDTypography>
            </>
          )}
        </MDBox>
        <MDBox display="flex">{renderMembers}</MDBox>
      </MDBox>
    </>
  );
}

// Setting default props for the Card
Card.defaultProps = {
  image: "",
  progress: 0,
  attachedFiles: "",
};

// Typechecking props for the Card
Card.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  badge: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.node.isRequired,
  progress: PropTypes.number,
  attachedFiles: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  members: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
};

export default Card;
