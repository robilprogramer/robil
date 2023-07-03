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

import { useEffect, useRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Dropzone styles
import "dropzone/dist/dropzone.css";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";

// Custom styles for the MDDropzone
import MDDropzoneRoot from "/components/MDDropzone/MDDropzoneRoot";

// NextJS Material Dashboard 2 PRO context
import { useMaterialUIController } from "/context";

import Dropzone from "dropzone";

function MDDropzone({ options }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const dropzoneRef = useRef();

  useEffect(() => {
    async function createDropzone() {
      Dropzone.autoDiscover = false;

      return new Dropzone(dropzoneRef.current, { ...options });
    }

    function removeDropzone() {
      if (Dropzone.instances.length > 0)
        Dropzone.instances.forEach((dz) => dz.destroy());
    }

    createDropzone();

    return () => removeDropzone();
  }, [options]);

  return (
    <MDDropzoneRoot
      component="form"
      action="/file-upload"
      ref={dropzoneRef}
      className="form-control dropzone"
      ownerState={{ darkMode }}
    >
      <MDBox className="fallback" bgColor="transparent">
        <MDBox component="input" name="file" type="file" multiple />
      </MDBox>
    </MDDropzoneRoot>
  );
}

// Typechecking props for the MDDropzone
MDDropzone.propTypes = {
  options: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MDDropzone;
