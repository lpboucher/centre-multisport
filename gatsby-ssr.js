const React = require("react")
exports.onRenderBody = ({
  setHeadComponents,
  setPostBodyComponents,
}) => {
  setHeadComponents([
    <link rel="preconnect" href="https://kwes.io" crossorigin />,
    <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
  ]);
  setPostBodyComponents([
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />, 
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />,
    <script async src="https://kwes.io/js/kwes.js" />
  ]);
}