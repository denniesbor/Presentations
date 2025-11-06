import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
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
import mageMHDUrl from '../assets/figures/MAGE.png';

// Power system figures (Publication I)
import powerMethodUrl from '../assets/figures/power/method-box-detailed.png';
import powerNetworkUrl from '../assets/figures/power/ehv_grid.png';
import powerGicScenariosUrl from '../assets/figures/power/gnd_gic_panels_eff_gic.png';
import powerFailuresUrl from '../assets/figures/power/vulnerable_trafos_eff_gic.png';
import powerEconomicUrl from '../assets/figures/power/indirect_impact_io_eff_gic.png';
import gicValidationRegUrl from '../assets/figures/power/regression_validation.png';
import secsValidationUrl from '../assets/figures/power/nerc_secs_mag_comparison.png';
import gicValidationImgUrl from '../assets/figures/power/gic_comparison_sim_tva.png';

// power figures (if needed)
import powerFieldsHistoricalUrl from '../assets/figures/power/event_maps_BE.png';
import powerFieldsExtremeUrl from '../assets/figures/power/hazard_maps.png';


// Satellite figures (Publication II)
import satFrameworkUrl from '../assets/figures/satellite/sat_method.png';
import satDistOrbUrl from '../assets/figures/satellite/sat_dist_orb.png';
import satCostUrl from '../assets/figures/satellite/sat_cost.png';
import satDensityUrl from '../assets/figures/satellite/atmospheric_density_comparison.png';
import satPropellantUrl from '../assets/figures/satellite/propellant_comparison.png';
import satFluxUrl from '../assets/figures/satellite/flux_spectra.png';
import goesComparisonUrl from '../assets/figures/satellite/goes_penumbra_comparison.png';
import satEconUrl from '../assets/figures/satellite/economic_impact_3.png';

// Multi-hazard figures (Publication III)
import multiFrameworkUrl from '../assets/figures/multi-hazard/mult_method.png';

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
  const mage = document.querySelectorAll('img[data-fig="MAGE"]');
  mage.forEach(node => {
    if (node) node.src = mageMHDUrl;
  });

  // Power system figures
  const powerMethodImg = document.querySelectorAll('img[data-fig="power-method"]');
  powerMethodImg.forEach(node => {
    if (node) node.src = powerMethodUrl;
  });

  const powerNetworkImg = document.querySelectorAll('img[data-fig="power-network"]');
  powerNetworkImg.forEach(node => {
    if (node) node.src = powerNetworkUrl;
  });

  const powerGicScenariosImg = document.querySelectorAll('img[data-fig="power-gic-scenarios"]');
  powerGicScenariosImg.forEach(node => {
    if (node) node.src = powerGicScenariosUrl;
  });

  const powerFailuresImg = document.querySelectorAll('img[data-fig="power-failures"]');
  powerFailuresImg.forEach(node => {
    if (node) node.src = powerFailuresUrl;
  });

  const powerEconomicImg = document.querySelectorAll('img[data-fig="power-economic"]');
  powerEconomicImg.forEach(node => {
    if (node) node.src = powerEconomicUrl;
  });

  const gicValidationImg = document.querySelectorAll('img[data-fig="gic-validation"]');
  gicValidationImg.forEach(node => {
    if (node) node.src = gicValidationRegUrl;
  });

  const secsValidationImg = document.querySelectorAll('img[data-fig="secs-validation"]');
  secsValidationImg.forEach(node => {
    if (node) node.src = secsValidationUrl;
  });

  const gicValidationCompImg = document.querySelectorAll('img[data-fig="gic-validation"]');
  gicValidationCompImg.forEach(node => {
    if (node) node.src = gicValidationImgUrl;
  });

  // Extreme and historical field maps (optional)
  const powerFieldsHistoricalImg = document.querySelectorAll('img[data-fig="power-fields-historical"]');
  powerFieldsHistoricalImg.forEach(node => {
    if (node) node.src = powerFieldsHistoricalUrl;
  });

  const powerFieldsExtremeImg = document.querySelectorAll('img[data-fig="power-fields-extreme"]');
  powerFieldsExtremeImg.forEach(node => {
    if (node) node.src = powerFieldsExtremeUrl;
  });

  // Satellite figures
  const satFrameworkImg = document.querySelectorAll('img[data-fig="sat-framework"]');
  satFrameworkImg.forEach(node => {
    if (node) node.src = satFrameworkUrl;
  });

  const satDistOrbImg = document.querySelectorAll('img[data-fig="sat-dist-orb"]');
  satDistOrbImg.forEach(node => {
    if (node) node.src = satDistOrbUrl;
  });

  const satCostImg = document.querySelectorAll('img[data-fig="sat-cost"]');
  satCostImg.forEach(node => {
    if (node) node.src = satCostUrl;
  });

  const satDensityImg = document.querySelectorAll('img[data-fig="sat-density"]');
  satDensityImg.forEach(node => {
    if (node) node.src = satDensityUrl;
  });

  const satPropellantImg = document.querySelectorAll('img[data-fig="sat-propellant"]');
  satPropellantImg.forEach(node => {
    if (node) node.src = satPropellantUrl;
  });

  const satFluxImg = document.querySelectorAll('img[data-fig="sat-flux"]');
  satFluxImg.forEach(node => {
    if (node) node.src = satFluxUrl;
  });

  const goesComparisonImg = document.querySelectorAll('img[data-fig="goes-comparison"]');
  goesComparisonImg.forEach(node => {
    if (node) node.src = goesComparisonUrl;
  });

  const satEconImg = document.querySelectorAll('img[data-fig="sat-econ"]');
  satEconImg.forEach(node => {
    if (node) node.src = satEconUrl;
  });

  // Multi-hazard figures
  const multiFrameworkImg = document.querySelectorAll('img[data-fig="multi-framework"]');
  multiFrameworkImg.forEach(node => {
    if (node) node.src = multiFrameworkUrl;
  });

}

loadAssets();

// Add GMU footer (simplified, no nav hints)
const footer = document.createElement('div');
footer.className = 'gmu-footer';
document.body.appendChild(footer);

// Initialize Reveal with better settings
const deck = new Reveal({
  width: "100%",
  height: "100%",
  margin: 0.02,
  center: true,
  minScale: 0.25,  // scale down gracefully for phones
  maxScale: 1.5,   // avoid blowing up text on large displays

  hash: true,
  controls: true,
  progress: true,
  transition: 'slide',

  math: {
    mathjax: 'https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js',
    config: 'TeX-AMS_HTML-full'
  },

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