import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "/shared/css/gmu-theme.css";
import "../../shared/css/interview.css";

import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealMath from "reveal.js/plugin/math/math.esm.js";

import coverHTML from "./sections/cover.html?raw";
import pipelineHTML from "./sections/pipeline.html?raw";

import gmLogoUrl from "../../../shared/branding/GM_latest_logo.png";
import doubleCUrl from "../../../shared/branding/double_c_yellow.png";

import satOrbitsUrl from "../assets/figures/satellite_orbits_us.png";
import doseDepthUrl from "../assets/figures/sep_dose_depth.png";
import xapsosPfailUrl from "../assets/figures/xapsos_pfail_illustration.png";
import vulnAssessUrl from "../assets/figures/vulnerability_assessment.png";

const slidesContainer = document.querySelector(".slides");
slidesContainer.innerHTML = coverHTML + pipelineHTML;

function loadAssets() {
  document.querySelectorAll('img[data-asset="gm-logo"]').forEach((n) => {
    n.src = gmLogoUrl;
  });
  document.querySelectorAll('img[data-asset="double-c"]').forEach((n) => {
    n.src = doubleCUrl;
  });
  document.querySelectorAll('img[data-fig="sat-orbits"]').forEach((n) => {
    n.src = satOrbitsUrl;
  });
  document.querySelectorAll('img[data-fig="dose-depth"]').forEach((n) => {
    n.src = doseDepthUrl;
  });
  document.querySelectorAll('img[data-fig="xapsos-pfail"]').forEach((n) => {
    n.src = xapsosPfailUrl;
  });
  document.querySelectorAll('img[data-fig="vuln-assess"]').forEach((n) => {
    n.src = vulnAssessUrl;
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
