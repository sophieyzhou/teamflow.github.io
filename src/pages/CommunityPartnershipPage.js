import React, { useEffect, useMemo, useState } from 'react';
import './BackgroundPage.css';

export default function CommunityPartnershipPage() {
  // Put these images in /public (you can rename them; just match the paths here)
  const travelPhotos = useMemo(
    () => [
      { src: '/travel-1.jpg', alt: 'Team travel - photo 1' },
      { src: '/travel-2.jpg', alt: 'Team travel - photo 2' },
      { src: '/travel-3.jpg', alt: 'Team travel - photo 3' },
      { src: '/travel-4.jpg', alt: 'Team travel - photo 4' },
    ],
    []
  );

  const [activeIdx, setActiveIdx] = useState(0);

  const goPrev = () =>
    setActiveIdx((i) => (i - 1 + travelPhotos.length) % travelPhotos.length);

  const goNext = () =>
    setActiveIdx((i) => (i + 1) % travelPhotos.length);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (travelPhotos.length <= 1) return;
    const t = setInterval(() => {
      setActiveIdx((i) => (i + 1) % travelPhotos.length);
    }, 5000);
    return () => clearInterval(t);
  }, [travelPhotos.length]);

  return (
    <div className="content">
      <div className="page-header">
        <h1>Community Partnership</h1>
        <div className="header-accent"></div>
      </div>

      {/* Overview / How partnership was created */}
      <div className="overview-block">
        <div className="overview-text">
          <p>
            Our partnership with the Komfo Anokye Teaching Hospital (KATH) was developed through a
            Global Health Design Initiative (GHDI) needs assessment trip during the early years of the team.
            During this trip, we identified the need for a cost-effective, user-friendly IV monitoring solution.
            Through that shared goal, a partnership was formed with emergency nurses and physicians at KATH.
          </p>
        </div>

        <div className="overview-image">
          <img src="/kath.jpg" alt="KATH" />
        </div>
      </div>

      {/* Staying connected */}
      <div className="content-section">
        <h2>How We Stay Connected</h2>

        <p className="section-subtitle">
          Our collaboration is ongoing, combining regular remote check-ins with in-person visits to stay grounded
          in real clinical workflows.
        </p>

        <div className="connect-grid">
          <div className="connect-card">
            <div className="connect-icon" aria-hidden="true">💬</div>
            <div className="connect-body">
              <h3 className="connect-title">Frequent Communication</h3>
              <div>
                We stay in touch with healthcare professionals at KATH through WhatsApp and Zoom to share updates,
                gather feedback, and align on next steps.
              </div>
            </div>
          </div>

          <div className="connect-card">
            <div className="connect-icon" aria-hidden="true">✈️</div>
            <div className="connect-body">
              <h3 className="connect-title">In-Person Collaboration</h3>
              <div>
                Our team traveled to KATH during this past winter break to strengthen the partnership, learn directly
                from clinicians, and validate design decisions in context.
              </div>
            </div>
          </div>

          <div className="connect-card">
            <div className="connect-icon" aria-hidden="true">🩺</div>
            <div className="connect-body">
              <h3 className="connect-title">Clinical Testing Plan</h3>
              <div>
                Building on our on-site work, we are planning a return visit to test our device in clinical settings
                and refine it based on real-world use.
              </div>
            </div>
          </div>
        </div>

        <div className="callout callout-tight">
          <span className="callout-icon" aria-hidden="true">📍</span>
          <div className="callout-body">
            <strong>Point of Contact: Emmanuel Acheampong</strong>
            <ul className="bullet-list">
              <li>Emergency Department nurse</li>
              <li>Consultant for WHO</li>
              <li>Fellow of the African Federation of Emergency Medicine</li>
            </ul>
          </div>

          {/* Change to /emmanuel.jpg (or whatever you name it) */}
          <div className="callout-image">
            <img src="/emmanuel.jpg" alt="Emmanuel Acheampong" />
          </div>
        </div>
      </div>

            {/* Recent Travels (Text left, Slideshow right) */}
      <div className="content-section">
        <h2>Recent Travels</h2>

        <div className="travel-split">
          <div className="travel-left">
            <p className="travel-body">
              During our winter break visit, we met with clinicians in the Emergency Department, observed
              workflow realities on the ground, and used that feedback to refine our IV monitoring solution
              for real clinical use.
            </p>
            <div className="travel-image">
              <img src="/travel.jpg" alt="travel" />
            </div>

            {/* <ul className="travel-bullets">
              <li>Strengthened relationships with nurses and physicians at KATH</li>
              <li>Validated device needs in real clinical workflows</li>
              <li>Collected feedback to guide our next design iteration</li>
              <li>Prepared for upcoming clinical testing in KATH settings</li>
            </ul> */}
          </div>

          <div className="travel-right">
            <div className="slideshow">
              <div className="slideshow-frame slideshow-frame-portrait">
                <img
                  src={travelPhotos[activeIdx].src}
                  alt={travelPhotos[activeIdx].alt}
                  className="slideshow-image"
                  loading="lazy"
                />

                {travelPhotos.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="slide-btn slide-btn-left"
                      onClick={goPrev}
                      aria-label="Previous photo"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      className="slide-btn slide-btn-right"
                      onClick={goNext}
                      aria-label="Next photo"
                    >
                      ›
                    </button>

                    <div className="slide-counter">
                      {activeIdx + 1} / {travelPhotos.length}
                    </div>
                  </>
                )}
              </div>

              {travelPhotos.length > 1 && (
                <div className="slide-dots" aria-label="Travel photo slideshow">
                  {travelPhotos.map((p, idx) => (
                    <button
                      key={p.src}
                      type="button"
                      className={`dot ${idx === activeIdx ? 'active' : ''}`}
                      onClick={() => setActiveIdx(idx)}
                      aria-label={`Go to photo ${idx + 1}`}
                      aria-pressed={idx === activeIdx}
                    />
                  ))}
                </div>
              )}

              {/* <div className="travel-photo-caption">
                {travelPhotos[activeIdx].alt}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
