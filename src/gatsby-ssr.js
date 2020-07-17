import React from "react";

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  var tawkId = pluginOptions.tawkId;
  var source = "https://embed.tawk.to/" + tawkId + "/default";

  setPostBodyComponents([
    <script key="gatsby-plugin-tawk" src={source} async />,
  ]);
};
