import{X as n,g as i,d as t,B as s,a as l}from"./double_c_yellow-a9b5100c.js";const a=`<!-- Cover slide -->
<section>
  <!-- Background -->
  <div class="cover-slide"></div>

  <!-- Decorative brand elements -->
  <div class="brand-layer">
    <img data-asset="double-c" class="double-c-bg" alt="" />
  </div>

  <!-- Main content -->
  <div class="cover-content">
    <div class="cover-inner">
      <!-- Logo column -->
      <div class="cover-logo-col">
        <img
          data-asset="gm-logo"
          class="gmu-logo"
          alt="George Mason University"
        />
      </div>

      <!-- Text column -->
      <div class="cover-text-col">
        <div class="cover-title">
          C-SWIM: A Coupled Space Weather Impact Model for Satellite Fleet
          Vulnerability and Economic Loss Under a 1-in-100-Year Solar
          Energetic Particle Event
        </div>

        <div class="cover-subtitle">
          Department of Geography and Geoinformation Sciences<br />
          George Mason University
        </div>

        <div class="cover-degree">
          PhD in Earth Systems and Geoinformation Sciences
        </div>

        <div class="cover-author">Dennies K. Bor</div>

        <div class="cover-date">March 2026</div>
      </div>
    </div>
  </div>
</section>`,r=`<!-- HORIZONTAL SECTION: SATELLITE VULNERABILITY -->
<section data-transition="zoom" data-background-transition="fade">

<!-- Slide 1: Pipeline with progressive fragments -->
<section class="theme-light">
  <div class="slide-dark"></div>
  <div class="slide-content">
    <h2>Satellite Radiation Vulnerability: Method</h2>

    <div class="flex-row" style="flex: 1; min-height: 0; align-items: stretch; gap: 1.5rem;">
      <div style="flex: 1; display: flex; flex-direction: column; gap: 0.6rem;">

        <div class="gmu-block" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.6rem 0.8rem;">
          <h3 style="margin: 0 0 0.3rem 0; font-size: 1em;">1. SEP Hazard Characterization</h3>
          <p style="margin: 0; font-size: 0.85em;">
            Solar Energetic Particle Environment Modelling (SEPEM) reference dataset
            (1974-2017) combined with GOES-16 Solar and Galactic Proton Sensor
            (2020-2025). 99 SEP events identified. Generalized Pareto distribution
            fitted using method of moments to derive 1-in-100-year event fluences
            at five proton energy thresholds (5, 10, 30, 50, 100 MeV).
          </p>
        </div>

        <div class="gmu-block fragment" data-fragment-index="1" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.6rem 0.8rem;">
          <h3 style="margin: 0 0 0.3rem 0; font-size: 1em;">2. Geomagnetic Cutoff Rigidity</h3>
          <p style="margin: 0; font-size: 0.85em;">
            Oulu Open-source geomagneToSphere propagation tool (OTSO) traces
            particle trajectories through IGRF-13 internal and Tsyganenko 2001
            external field models. Direct computation requires approximately
            2,400 seconds per satellite. A machine learning surrogate model
            (MAE = 0.077 GV) enables fleet-scale inference for 12,774 satellites.
          </p>
        </div>

        <div class="gmu-block fragment" data-fragment-index="2" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.6rem 0.8rem;">
          <h3 style="margin: 0 0 0.3rem 0; font-size: 1em;">3. Radiation Dose Transport</h3>
          <p style="margin: 0; font-size: 0.85em;">
            Piecewise power-law spectral reconstruction from GPD fluence return
            levels. Differential spectrum transported through aluminum spherical
            shell shielding using International Radiation Environment Near Earth
            (IRENE) framework with SHIELDOSE-2 methodology. Trapped radiation
            baseline from AP9/AE9 climatological models accumulated since launch.
          </p>
        </div>

        <div class="gmu-block fragment" data-fragment-index="3" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.6rem 0.8rem;">
          <h3 style="margin: 0 0 0.3rem 0; font-size: 1em;">4. Failure Probability</h3>
          <p style="margin: 0; font-size: 0.85em;">
            Following Xapsos et al. (2017):
            $P_{fail} = \\int_0^{\\infty} [1-H(x)] \\cdot g(x)\\,dx$,
            where $H(x)$ is the environment dose CDF and $g(x)$ is
            the lognormal device failure PDF. Monte Carlo sampling
            (n = 500) propagates shielding and access fraction uncertainty.
          </p>
        </div>

      </div>

      <div style="flex: 1; display: flex; flex-direction: column; gap: 0.6rem;">
        <div class="gmu-block fragment" data-fragment-index="3" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.6rem 0.8rem;">
          <h3 style="margin: 0 0 0.3rem 0; font-size: 1em;">Regime Assumptions</h3>
          <ul style="margin: 0; padding-left: 1.3em; font-size: 0.85em;">
            <li style="margin: 0.25rem 0;"><strong>LEO:</strong> 100 mil Al shielding, commercial off-the-shelf components (10 krad failure threshold)</li>
            <li style="margin: 0.25rem 0;"><strong>MEO:</strong> 500 mil Al, radiation-hardened (1000 krad)</li>
            <li style="margin: 0.25rem 0;"><strong>GEO:</strong> 300 mil Al, radiation-tolerant (500 krad)</li>
            <li style="margin: 0.25rem 0;"><strong>HEO:</strong> 200 mil Al, mixed heritage (20 krad)</li>
          </ul>
          <p class="text-dim" style="margin: 0.5rem 0 0 0; font-size: 0.8em; font-style: italic;">
            Satellite-specific shielding data generally proprietary;
            regime-dependent assumptions reflect typical design practices.
          </p>
        </div>

        <div class="gmu-block" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.6rem 0.8rem;">
          <h3 style="margin: 0 0 0.3rem 0; font-size: 1em;">Fleet Population</h3>
          <p style="margin: 0; font-size: 0.85em;">
            12,774 US operational satellites as of January 2026.
            Orbital elements from Space-Track.org supplemented with
            Jonathan's Space Report catalog data. Four regimes:
            LEO (12,548), MEO (34), GEO (179), HEO (13).
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Slide 2: Dose-Depth Figure -->
<section class="theme-conclusion">
  <div class="slide-dark"></div>
  <div class="slide-content">
    <h2>SEP Dose vs Shielding Depth (1-in-100-Year Event)</h2>

    <div class="flex-row" style="flex: 1; min-height: 0; align-items: stretch; gap: 1.5rem;">
      <div style="flex: 1.8; display: flex; flex-direction: column; min-height: 0;">
        <div class="figure-container" style="flex: 1; min-height: 0;">
          <img
            data-fig="dose-depth"
            alt="SEP dose-depth curve"
            class="figure-img"
            style="width: 100%; height: 100%; max-height: none; object-fit: contain;"
          />
        </div>
        <div class="slidecred">
          Black curve: free-space dose envelope at particle access fraction of unity.
          Colored scatter: actual satellite doses after geomagnetic shielding.
        </div>
      </div>

      <div style="flex: 1.2; display: flex; flex-direction: column; gap: 0.6rem;">
        <div class="gmu-block" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.6rem 0.8rem;">
          <h3 style="margin: 0 0 0.3rem 0; font-size: 1em;">Geomagnetic Shielding Effect</h3>
          <p style="margin: 0; font-size: 1em;">
            Vertical separation between free-space curve and satellite scatter
            quantifies magnetospheric protection. Square markers indicate
            regime means.
          </p>
        </div>

        <div class="gmu-block" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.6rem 0.8rem;">
          <h3 style="margin: 0 0 0.3rem 0; font-size: 1em;">Dose by Regime</h3>
          <ul style="margin: 0; padding-left: 1.3em; font-size: 1em;">
            <li style="margin: 0.25rem 0;"><strong>LEO:</strong> 0.5-1.5 orders of magnitude below envelope</li>
            <li style="margin: 0.25rem 0;"><strong>HEO:</strong> closest to envelope (high access fraction)</li>
            <li style="margin: 0.25rem 0;"><strong>GEO/MEO:</strong> lower absolute dose despite high access, due to heavier shielding</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Slide 3: Xapsos P_fail Figure -->
<section class="theme-conclusion">
  <div class="slide-dark"></div>
  <div class="slide-content">
    <h2>Failure Probability: Environment vs Device Distributions</h2>

    <div class="flex-row" style="flex: 1; min-height: 0; align-items: stretch; gap: 1.5rem;">
      <div style="flex: 1.8; display: flex; flex-direction: column; min-height: 0;">
        <div class="figure-container" style="flex: 1; min-height: 0;">
          <img
            data-fig="xapsos-pfail"
            alt="P_fail by regime"
            class="figure-img"
            style="width: 100%; height: 100%; max-height: none; object-fit: contain;"
          />
        </div>
        <div class="slidecred">
          Solid: environment dose CDF. Dashed: device failure PDF.
          Shaded overlap area gives failure probability.
        </div>
      </div>

      <div style="flex: 1.2; display: flex; flex-direction: column; gap: 0.6rem;">
        <div class="gmu-block" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.6rem 0.8rem;">
          <h3 style="margin: 0 0 0.3rem 0; font-size: 1em;">LEO and HEO</h3>
          <p style="margin: 0; font-size: 1em;">
            Significant overlap between environment and device distributions.
            Trapped dose dominates the budget. SEP event pushes marginal
            dose budgets past the failure point.
          </p>
        </div>

        <div class="gmu-block" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.6rem 0.8rem;">
          <h3 style="margin: 0 0 0.3rem 0; font-size: 1em;">GEO and MEO</h3>
          <p style="margin: 0; font-size: 1em;">
            Complete separation. Environment doses two to three orders of
            magnitude below device failure thresholds. Radiation-hardened
            components and heavy shielding provide large margins.
          </p>
        </div>

        <div class="gmu-block" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.6rem 0.8rem;">
          <h3 style="margin: 0 0 0.3rem 0; font-size: 1em;">Key Insight</h3>
          <p style="margin: 0; font-size: 1em;">
            Particle access fraction alone does not determine vulnerability.
            GEO satellites have high access but zero failure probability.
            Shielding and component hardness are the decisive factors.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

</section>`,o="/Presentations/assets/satellite_orbits_us-96260b11.png",d="/Presentations/assets/sep_dose_depth-9cd9159f.png",c="/Presentations/assets/xapsos_pfail_illustration-ade8c49c.png",m="/Presentations/assets/vulnerability_assessment-9be1fcbe.png",g=document.querySelector(".slides");g.innerHTML=a+r;function f(){document.querySelectorAll('img[data-asset="gm-logo"]').forEach(e=>{e.src=i}),document.querySelectorAll('img[data-asset="double-c"]').forEach(e=>{e.src=t}),document.querySelectorAll('img[data-fig="sat-orbits"]').forEach(e=>{e.src=o}),document.querySelectorAll('img[data-fig="dose-depth"]').forEach(e=>{e.src=d}),document.querySelectorAll('img[data-fig="xapsos-pfail"]').forEach(e=>{e.src=c}),document.querySelectorAll('img[data-fig="vuln-assess"]').forEach(e=>{e.src=m})}f();const h=new n({width:"100%",height:"100%",margin:.02,center:!0,minScale:.25,maxScale:1.5,hash:!0,controls:!0,progress:!0,transition:"slide",math:{mathjax:"https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js",config:"TeX-AMS_HTML-full"},plugins:[s,l]});h.initialize();
