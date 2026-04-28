import{X as n,g as i,d as t,B as s,a}from"./double_c_yellow-a9b5100c.js";/* empty css                  */const r=`<!-- Cover slide -->
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
          Geomagnetic Cutoff Erosion and Proton Access
          During a 1-in-100-Year Solar Energetic Particle Event
        </div>

        <div class="cover-subtitle">
          Department of Geography and Geoinformation Sciences<br />
          George Mason University
        </div>

        <div class="cover-degree">
          Term Paper Presentation
        </div>

        <div class="cover-author">Dennies K. Bor</div>

        <div class="cover-date">April 2026</div>
      </div>
    </div>
  </div>
</section>`,l=`<!-- Motivation and research question -->
<section>
  <div class="slide-dark"></div>
  <div class="slide-content">
    <h2>Why Cutoff Rigidity, Why Now</h2>

    <div class="flex-row" style="flex: 1; min-height: 0; align-items: stretch; gap: 1.5rem;">

      <div style="flex: 1; display: flex; flex-direction: column; gap: 0.8rem;">

        <div class="gmu-block" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.8rem 1rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1.05em;">The Hazard</h3>
          <p style="margin: 0; font-size: 0.95em;">
            Solar energetic particle events accelerate protons from MeV to GeV
            energies. The May 2024 Gannon storm was the strongest geomagnetic
            disturbance since the Halloween 2003 storms and produced elevated
            radiation across satellite operating orbits.
          </p>
        </div>

        <div class="gmu-block" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.8rem 1rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1.05em;">The Gatekeeper</h3>
          <p style="margin: 0; font-size: 0.95em;">
            Whether a proton reaches a given orbit is set by the geomagnetic
            cutoff rigidity. Under quiet conditions the field deflects particles
            below that threshold. During intense storms, magnetospheric
            compression and ring current intensification erode the shielding.
          </p>
        </div>

        <div class="gmu-block" style="flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 0.8rem 1rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1.05em;">The Gap</h3>
          <p style="margin: 0; font-size: 0.95em;">
            Most operational risk analyses still treat geomagnetic shielding
            as fixed. As Solar Cycle 25 approaches its peak, that assumption
            needs testing against a century-scale event.
          </p>
        </div>

      </div>

      <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
        <div class="gmu-block" style="padding: 1.2rem 1.4rem; border-left: 4px solid rgb(196, 150, 0);">
          <h3 style="margin: 0 0 0.6rem 0; font-size: 1.1em; color: rgb(196, 150, 0);">Research Question</h3>
          <p style="margin: 0; font-size: 1.05em; line-height: 1.5;">
            How is the geomagnetic cutoff rigidity eroded during a 1-in-100-year
            SEP event, and at what altitudes do protons of different energies
            gain access to near-Earth space?
          </p>
        </div>
      </div>

    </div>
  </div>
</section>`,o=`<!-- Approach: statistical side -->
<section>
  <div class="slide-dark"></div>
  <div class="slide-content">
    <h2>Approach: Setting the Scenario Amplitude</h2>

    <div class="flex-row" style="flex: 1; min-height: 0; align-items: stretch; gap: 1.5rem;">

      <div style="flex: 1; display: flex; flex-direction: column; gap: 0.8rem; justify-content: center;">

        <div class="gmu-block" style="padding: 0.9rem 1.1rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1.05em;">Data</h3>
          <p style="margin: 0; font-size: 0.95em;">
            27.4 years of integral proton flux from SEPEM (1996 to 2017) and
            GOES-16 (2020 to 2025). The gap covers solar minimum and contains
            no events above threshold.
          </p>
        </div>

        <div class="gmu-block" style="padding: 0.9rem 1.1rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1.05em;">Event Selection</h3>
          <p style="margin: 0; font-size: 0.95em;">
            NOAA SWPC criterion: integral flux above 10 MeV exceeds 10 pfu.
            160 SEP events identified across the observation window.
          </p>
        </div>

        <div class="gmu-block" style="padding: 0.9rem 1.1rem; border-left: 3px solid rgb(196, 150, 0);">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1.05em;">Extreme-Value Fit</h3>
          <p style="margin: 0; font-size: 0.95em;">
            Generalized Pareto, method of moments. Returns 1-in-100-year
            levels for peak flux, fluence, and storm drivers. Shape parameters
            sit close to zero, so the tails are roughly exponential.
          </p>
        </div>

      </div>

      <div style="flex: 1.1; display: flex; flex-direction: column; min-height: 0;">
        <div class="figure-container" style="flex: 1; min-height: 0;">
          <img
            data-fig="gpd-ccdf"
            alt="GPD fits to peak proton flux at four energies"
            class="figure-img"
            style="width: 100%; height: 100%; object-fit: contain;"
          />
        </div>
        <div class="slidecred">
          Empirical CCDFs and fitted GPD models for peak flux at 10, 30, 50,
          and 100 MeV. Orange dot marks the 1-in-100-year return level.
        </div>
      </div>

    </div>
  </div>
</section>`,d=`<!-- Approach: physics side -->
<section>
  <div class="slide-dark"></div>
  <div class="slide-content">
    <h2>Approach: Tracing Particles Through the Storm Field</h2>

    <div class="flex-row" style="flex: 1; min-height: 0; align-items: stretch; gap: 1.5rem;">

      <div style="flex: 1; display: flex; flex-direction: column; gap: 0.9rem; justify-content: center;">

        <div class="gmu-block" style="padding: 0.9rem 1.1rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1.05em;">Storm Template</h3>
          <p style="margin: 0; font-size: 0.95em;">
            Bastille Day 2000 used as the temporal template for both flux and
            driver time series, then linearly scaled to the 1-in-100-year
            amplitude across a 72-hour window at 5-minute cadence.
          </p>
        </div>

        <div class="gmu-block" style="padding: 0.9rem 1.1rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1.05em;">Trajectory Tracing</h3>
          <p style="margin: 0; font-size: 0.95em;">
            OTSO integrates the relativistic Lorentz equation through IGRF-13
            internal and Tsyganenko 2001 external fields. Test particles
            scanned from 20 GV down in 0.1 GV steps. Trajectories that escape
            to the magnetopause are allowed, those that hit the atmosphere
            are forbidden.
          </p>
        </div>

      </div>

      <div style="flex: 1; display: flex; flex-direction: column; gap: 0.9rem; justify-content: center;">

        <div class="gmu-block" style="padding: 0.9rem 1.1rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1.05em;">Output Grid</h3>
          <p style="margin: 0; font-size: 0.95em;">
            Cutoff rigidity on a 5 by 10 degree latitude-longitude grid at
            six altitudes from 400 km through GEO, 10-minute cadence across
            the storm window.
          </p>
        </div>

        <div class="gmu-block" style="padding: 0.9rem 1.1rem; border-left: 3px solid rgb(196, 150, 0);">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1em;">Scenario at Storm Peak</h3>
          <ul style="margin: 0; padding-left: 1.3em; font-size: 0.92em;">
            <li style="margin: 0.2rem 0;">Dst minimum of $-403$ nT</li>
            <li style="margin: 0.2rem 0;">IMF $B_z$ of $-64$ nT</li>
            <li style="margin: 0.2rem 0;">Dynamic pressure of 71 nPa</li>
            <li style="margin: 0.2rem 0;">Peak flux of $3.2 \\times 10^4$ pfu</li>
          </ul>
        </div>

      </div>

    </div>
  </div>
</section>`,c=`<!-- Cutoff erosion at storm peak -->
<section>
  <div class="slide-dark"></div>
  <div class="slide-content">
    <h2>Cutoff Erosion at Storm Peak</h2>

    <div class="flex-row" style="flex: 1; min-height: 0; align-items: stretch; gap: 1.5rem;">

      <div style="flex: 1.8; display: flex; flex-direction: column; min-height: 0;">
        <div class="figure-container" style="flex: 1; min-height: 0;">
          <img
            data-fig="rc-erosion"
            alt="Global maps of cutoff rigidity erosion"
            class="figure-img"
            style="width: 100%; height: 100%; object-fit: contain;"
          />
        </div>
        <div class="slidecred">
          Red regions indicate where the 1-in-100-year scenario produces lower
          cutoff than baseline, meaning enhanced particle access.
        </div>
      </div>

      <div style="flex: 1; display: flex; flex-direction: column; gap: 0.8rem; justify-content: center;">

        <div class="gmu-block" style="padding: 0.8rem 1rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1.05em;">LEO (400 to 1200 km)</h3>
          <p style="margin: 0; font-size: 0.95em;">
            Erosion concentrated in two mid-latitude bands near 30 to 60
            degrees, reaching roughly 1.5 GV. The east-west asymmetry
            tracks the offset between geographic and geomagnetic frames.
          </p>
        </div>

        <div class="gmu-block" style="padding: 0.8rem 1rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1.05em;">GPS Altitude</h3>
          <p style="margin: 0; font-size: 0.95em;">
            Pattern broadens latitudinally and magnitude roughly doubles,
            with erosion exceeding 2 GV across much of the sub-auroral zone.
          </p>
        </div>

        <div class="gmu-block" style="padding: 0.8rem 1rem; border-left: 3px solid rgb(196, 150, 0);">
          <p style="margin: 0; font-size: 1em; font-weight: 500;">
            The equator stays shielded, the poles stay open,
            the action is at mid-latitudes.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>`,m=`<!-- Headline finding -->
<section>
  <div class="slide-dark"></div>
  <div class="slide-content">
    <h2>Altitude Access and the Headline Number</h2>

    <div class="flex-row" style="flex: 1; min-height: 0; align-items: stretch; gap: 1.5rem;">

      <div style="flex: 1.6; display: flex; flex-direction: column; min-height: 0;">
        <div class="figure-container" style="flex: 1; min-height: 0;">
          <img
            data-fig="rc-alt-lat"
            alt="Cutoff rigidity by altitude and latitude"
            class="figure-img"
            style="width: 100%; height: 100%; object-fit: contain;"
          />
        </div>
        <div class="slidecred">
          Zonally averaged cutoff. White contours mark proton energy
          thresholds. Baseline on the left, 1-in-100-year on the right.
        </div>
      </div>

      <div style="flex: 1.1; display: flex; flex-direction: column; gap: 0.8rem; justify-content: center;">

        <div class="gmu-block" style="padding: 1rem 1.2rem; border-left: 4px solid rgb(196, 150, 0); background-color: rgba(196, 150, 0, 0.08);">
          <h3 style="margin: 0 0 0.5rem 0; font-size: 1.05em; color: rgb(196, 150, 0);">At 60 Degrees Latitude</h3>
          <p style="margin: 0; font-size: 1.1em; line-height: 1.5;">
            100 MeV proton access deepens from 2,000 km to 400 km at storm peak.
          </p>
          <p style="margin: 0.5rem 0 0 0; font-size: 0.95em;">
            A fivefold reduction. The entire LEO regime at high inclinations
            falls into the path of energetic protons.
          </p>
        </div>

        <div class="gmu-block" style="padding: 0.8rem 1rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1em;">Why It Matters</h3>
          <p style="margin: 0; font-size: 0.95em;">
            This is the latitude band that contains high-inclination LEO
            constellations and HEO perigee crossings. Mid-latitude exposure
            is fundamentally a storm-driven quantity.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>`,g=`<!-- Takeaway -->
<section>
  <div class="slide-dark"></div>
  <div class="slide-content">
    <h2>Takeaway</h2>

    <div class="flex-row" style="flex: 1; min-height: 0; align-items: stretch; gap: 1.5rem;">

      <div style="flex: 1.2; display: flex; flex-direction: column; gap: 1rem; justify-content: center;">

        <div class="gmu-block" style="padding: 1rem 1.2rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1.05em;">Three Regimes, Three Behaviors</h3>
          <ul style="margin: 0; padding-left: 1.3em; font-size: 1em; line-height: 1.6;">
            <li style="margin: 0.3rem 0;">Equator stays shielded at all altitudes from 400 km through GEO.</li>
            <li style="margin: 0.3rem 0;">Polar caps stay open in baseline and storm conditions.</li>
            <li style="margin: 0.3rem 0;">Mid-latitudes carry the storm-time response.</li>
          </ul>
        </div>

        <div class="gmu-block" style="padding: 1rem 1.2rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1.05em;">The Implication</h3>
          <p style="margin: 0; font-size: 1em;">
            Cutoff rigidity erosion is the primary physical mechanism mediating
            SEP coupling to the operational satellite environment during
            extreme events.
          </p>
        </div>

      </div>

      <div style="flex: 1; display: flex; flex-direction: column; gap: 0.8rem; justify-content: center;">

        <div class="gmu-block" style="padding: 0.8rem 1rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1em;">Caveat</h3>
          <p style="margin: 0; font-size: 0.92em;">
            Tsyganenko 2001 is conservative under extreme drivers.
            True LEO penetration is likely deeper than these results show.
          </p>
        </div>

        <div class="gmu-block" style="padding: 0.8rem 1rem;">
          <h3 style="margin: 0 0 0.4rem 0; font-size: 1em;">Next Step</h3>
          <p style="margin: 0; font-size: 0.92em;">
            Move to TS04 or TS05 with Qin-Denton drivers for local-time
            resolved cutoffs and instantaneous exposure.
          </p>
        </div>

        <div class="gmu-block" style="padding: 0.8rem 1rem; border-left: 3px solid rgb(196, 150, 0);">
          <p style="margin: 0; font-size: 0.95em; font-style: italic;">
            Extreme-value statistics plus physics-based field tracing makes
            century-scale exposure assessment computationally feasible across
            the operational fleet.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>`,h="/Presentations/assets/gpd_ccdf_flux-27b8590c.png",f="/Presentations/assets/rc_erosion_100y-8b3089c2.png",p="/Presentations/assets/rc_penetration_alt_lat_100y-ed84a27a.png",u=document.querySelector(".slides");u.innerHTML=r+l+o+d+c+m+g;function y(){document.querySelectorAll('img[data-asset="gm-logo"]').forEach(e=>{e.src=i}),document.querySelectorAll('img[data-asset="double-c"]').forEach(e=>{e.src=t}),document.querySelectorAll('img[data-fig="gpd-ccdf"]').forEach(e=>{e.src=h}),document.querySelectorAll('img[data-fig="rc-erosion"]').forEach(e=>{e.src=f}),document.querySelectorAll('img[data-fig="rc-alt-lat"]').forEach(e=>{e.src=p})}y();const v=new n({width:"100%",height:"100%",margin:.02,center:!0,minScale:.25,maxScale:1.5,hash:!0,controls:!0,progress:!0,transition:"slide",math:{mathjax:"https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js",config:"TeX-AMS_HTML-full"},plugins:[s,a]});v.initialize();
