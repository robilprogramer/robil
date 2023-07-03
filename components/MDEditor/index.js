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

import dynamic from "next/dynamic";

// react-quill components
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// react-quill styles
import "react-quill/dist/quill.snow.css";

// Custom styles for the MDEditor
import MDEditorRoot from "/components/MDEditor/MDEditorRoot";

// NextJS Material Dashboard 2 PRO context
import { useMaterialUIController } from "/context";

function MDEditor(props) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <MDEditorRoot ownerState={{ darkMode }}>
      <ReactQuill theme="snow" {...props} />
    </MDEditorRoot>
  );
}

export default MDEditor;
