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

import { useState } from "react";

// react-images-viewer components
import ImgsViewer from "react-images-viewer";

// @mui material components
import Stack from "@mui/material/Stack";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";

// Images
import image1 from "/assets/images/products/product-details-1.jpg";
import image2 from "/assets/images/products/product-details-2.jpg";
import image3 from "/assets/images/products/product-details-3.jpg";
import image4 from "/assets/images/products/product-details-4.jpg";
import image5 from "/assets/images/products/product-details-5.jpg";

function ProductImages() {
  const [currentImage, setCurrentImage] = useState(image1);
  const [imgsViewer, setImgsViewer] = useState(false);
  const [imgsViewerCurrent, setImgsViewerCurrent] = useState(0);

  const handleSetCurrentImage = ({ currentTarget }) => {
    setCurrentImage(
      currentTarget.firstChild.src.replace("http://localhost:3000/", "/")
    );

    setImgsViewerCurrent(Number(currentTarget.id));
  };

  const openImgsViewer = () => setImgsViewer(true);
  const closeImgsViewer = () => setImgsViewer(false);
  const imgsViewerNext = () => setImgsViewerCurrent(imgsViewerCurrent + 1);
  const imgsViewerPrev = () => setImgsViewerCurrent(imgsViewerCurrent - 1);

  return (
    <MDBox>
      <ImgsViewer
        imgs={[
          { src: image1.src },
          { src: image2.src },
          { src: image3.src },
          { src: image4.src },
          { src: image5.src },
        ]}
        isOpen={imgsViewer}
        onClose={closeImgsViewer}
        currImg={imgsViewerCurrent}
        onClickPrev={imgsViewerPrev}
        onClickNext={imgsViewerNext}
        backdropCloseable
      />

      <MDBox
        shadow="lg"
        borderRadius="lg"
        width="100%"
        height="27rem"
        onClick={openImgsViewer}
        overflow="hidden"
      >
        <Image
          src={currentImage}
          alt="Product Image"
          width={1000}
          height={1000}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </MDBox>
      <MDBox mt={2} pt={1}>
        <Stack direction="row" spacing={3}>
          <MDBox
            id={0}
            position="relative"
            borderRadius="lg"
            shadow="md"
            width="100%"
            height="5rem"
            minHeight="5rem"
            sx={{ cursor: "pointer", objectFit: "cover" }}
            onClick={handleSetCurrentImage}
            overflow="hidden"
          >
            <Image
              src={image1}
              alt="small image 1"
              width={250}
              height={250}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </MDBox>
          <MDBox
            id={1}
            position="relative"
            borderRadius="lg"
            shadow="md"
            width="100%"
            height="5rem"
            minHeight="5rem"
            sx={{ cursor: "pointer", objectFit: "cover" }}
            onClick={handleSetCurrentImage}
            overflow="hidden"
          >
            <Image
              src={image2}
              alt="small image 2"
              width={250}
              height={250}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </MDBox>
          <MDBox
            id={2}
            position="relative"
            borderRadius="lg"
            shadow="md"
            width="100%"
            height="5rem"
            minHeight="5rem"
            sx={{ cursor: "pointer", objectFit: "cover" }}
            onClick={handleSetCurrentImage}
            overflow="hidden"
          >
            <Image
              src={image3}
              alt="small image 3"
              width={250}
              height={250}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </MDBox>
          <MDBox
            id={3}
            position="relative"
            borderRadius="lg"
            shadow="md"
            width="100%"
            height="5rem"
            minHeight="5rem"
            sx={{ cursor: "pointer", objectFit: "cover" }}
            onClick={handleSetCurrentImage}
            overflow="hidden"
          >
            <Image
              src={image4}
              alt="small image 4"
              width={250}
              height={250}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </MDBox>
          <MDBox
            id={4}
            position="relative"
            borderRadius="lg"
            shadow="md"
            width="100%"
            height="5rem"
            minHeight="5rem"
            sx={{ cursor: "pointer", objectFit: "cover" }}
            onClick={handleSetCurrentImage}
            overflow="hidden"
          >
            <Image
              src={image5}
              alt="small image 5"
              width={250}
              height={250}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </MDBox>
        </Stack>
      </MDBox>
    </MDBox>
  );
}

export default ProductImages;
