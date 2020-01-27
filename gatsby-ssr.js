const React = require("react")
exports.onRenderBody = ({
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />, 
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />,
    <script async src="https://kwes.io/js/kwes.js"></script>
  ])
}