import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "/shared/css/gmu-theme.css";
import "../../shared/css/interview.css";

import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealMath from "reveal.js/plugin/math/math.esm.js";

import coverHTML from "./sections/cover.html?raw";
import motivationHTML from "./sections/motivation.html?raw";
import approachHTML from "./sections/approach.html?raw";
import physicsHTML from "./sections/physics.html?raw";
import erosionHTML from "./sections/erosion.html?raw";
import headlineHTML from "./sections/headline.html?raw";
import takeawayHTML from "./sections/takeaway.html?raw";

import gmLogoUrl from "../../../shared/branding/GM_latest_logo.png";
import doubleCUrl from "../../../shared/branding/double_c_yellow.png";

import gpdCcdfUrl from "../assets/figures/gpd_ccdf_flux.png";
import rcErosionUrl from "../assets/figures/rc_erosion_100y.png";
import rcAltLatUrl from "../assets/figures/rc_penetration_alt_lat_100y.png";

const slidesContainer = document.querySelector(".slides");
slidesContainer.innerHTML =
  coverHTML +
  motivationHTML +
  approachHTML +
  physicsHTML +
  erosionHTML +
  headlineHTML +
  takeawayHTML;

function loadAssets() {
  document.querySelectorAll('img[data-asset="gm-logo"]').forEach((n) => {
    n.src = gmLogoUrl;
  });
  document.querySelectorAll('img[data-asset="double-c"]').forEach((n) => {
    n.src = doubleCUrl;
  });
  document.querySelectorAll('img[data-fig="gpd-ccdf"]').forEach((n) => {
    n.src = gpdCcdfUrl;
  });
  document.querySelectorAll('img[data-fig="rc-erosion"]').forEach((n) => {
    n.src = rcErosionUrl;
  });
  document.querySelectorAll('img[data-fig="rc-alt-lat"]').forEach((n) => {
    n.src = rcAltLatUrl;
  });
}

loadAssets();

const deck = new Reveal({
  width: "100%",
  height: "100%",
  margin: 0.02,
  center: true,
  minScale: 0.25,
  maxScale: 1.5,
  hash: true,
  controls: true,
  progress: true,
  transition: "slide",
  math: {
    mathjax: "https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js",
    config: "TeX-AMS_HTML-full",
  },
  plugins: [RevealMarkdown, RevealMath],
});

deck.initialize();
