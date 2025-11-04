import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
// No need for theme/black.css since we're using your custom GMU theme
import './gmu-theme.css';

// Import plugins (similar to the example)
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';

// Import section HTML files using Vite's ?raw loader
import coverHTML from './sections/cover.html?raw';
import introHTML from './sections/intro.html?raw';
import powerHTML from './sections/power.html?raw';
import satelliteHTML from './sections/satellite.html?raw';
import multihazardHTML from './sections/multihazard.html?raw';
import conclusionHTML from './sections/conclusion.html?raw';

// BRAND / THEME ASSETS
import gmLogoUrl from '../assets/branding/GM_latest_logo.png';
import cornerUrl from '../assets/branding/upper_tri_or_half_sq_yellow.png';
import doubleCUrl from '../assets/branding/double_c_yellow.png';
import yellowBarUrl from '../assets/branding/yellow_parellelo.png';
import ribbonImgUrl from '../assets/branding/gmu-ribbon.png';

// FIGURES / CONTENT ASSETS
import auroraImgUrl from '../assets/figures/aurora_california.png';
// Add other figure imports as needed

// Combine all sections and inject into the slides container
const slidesContainer = document.querySelector('.slides');
slidesContainer.innerHTML = coverHTML + introHTML + powerHTML + satelliteHTML + multihazardHTML + conclusionHTML;

// Load assets after HTML is injected
function loadAssets() {
  // Cover slide assets
  const gmLogoNodes = document.querySelectorAll('img[data-asset="gm-logo"]');
  gmLogoNodes.forEach(node => {
    if (node) node.src = gmLogoUrl;
  });

  const cornerNodes = document.querySelectorAll('img[data-asset="corner-accent"]');
  cornerNodes.forEach(node => {
    if (node) node.src = cornerUrl;
  });

  const doubleCNodes = document.querySelectorAll('img[data-asset="double-c"]');
  doubleCNodes.forEach(node => {
    if (node) node.src = doubleCUrl;
  });

  const yellowBarNodes = document.querySelectorAll('img[data-asset="yellow-bar"]');
  yellowBarNodes.forEach(node => {
    if (node) node.src = yellowBarUrl;
  });

  const ribbonNodes = document.querySelectorAll('.ribbon-img');
  ribbonNodes.forEach(node => {
    if (node) node.src = ribbonImgUrl;
  });

  // Content figures
  const auroraImg = document.querySelectorAll('img[data-fig="aurora"]');
  auroraImg.forEach(node => {
    if (node) node.src = auroraImgUrl;
  });

  // Add more content figure assignments as needed
}

loadAssets();

// Add GMU footer (simplified, no nav hints)
const footer = document.createElement('div');
footer.className = 'gmu-footer';
document.body.appendChild(footer);

// Initialize Reveal with better settings
const deck = new Reveal({
  // Core dimensions
  width: "100%",
  height: "100%",
  margin: 0,

  // Center slides
  center: true,

  // Disable auto-scaling that may cause truncation
  // disableLayout: true,
  disableLayout: false, 
  minScale: 0.2, // Allow more scaling down for small screens
  maxScale: 2.0, // Allow more scaling up on large screens

  // Additional settings
  hash: true,
  controls: true,
  progress: true,

  // Transitions
  transition: 'slide',

  // Math support
  math: {
    mathjax: 'https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js',
    config: 'TeX-AMS_HTML-full'
  },

  // Required plugins
  plugins: [RevealMarkdown, RevealMath, RevealHighlight]
});

// Initialize the deck
deck.initialize().then(() => {
  // Hide footer on first slide
  function updateFooter() {
    const idx = deck.getSlidePastCount() + 1;

    // Hide footer on cover slide
    if (footer) {
      footer.style.visibility = (idx === 1) ? 'hidden' : 'visible';
    }
  }

  deck.on('slidechanged', updateFooter);
  deck.on('ready', updateFooter);
});