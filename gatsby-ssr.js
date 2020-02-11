const React = require("react")
exports.onRenderBody = ({
  setHeadComponents,
  setPostBodyComponents,
}) => {
  setHeadComponents([
    <link key="kwes-head" rel="preconnect" href="https://kwes.io" crossOrigin="true" />,
    <link key="google-font-head" rel="preconnect" href="https://fonts.googleapis.com/" crossOrigin="true" />
  ]);
  setPostBodyComponents([
    <link key="slick-body" rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />, 
    <link key="slick-theme-body" rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />,
    <script key="kwes-body" async src="https://kwes.io/js/kwes.js" />
  ]);
}