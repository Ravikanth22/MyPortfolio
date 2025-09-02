import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo, isHireable } from "../../portfolio";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";

export default function GithubProfileCard({ prof = {} }) {
  // Read details from portfolio.js (with fallbacks to GitHub profile)
  const {
    title = "Reach Out to me!",
    subtitle = "Discuss a project or just want to say hi? My inbox is open for all.",
    pitch,                           // custom one-liner/bio
    email_address,
    phone,
    location: cfgLocation,
    portfolio,
    resume,
    calendly,
    extra                            // e.g., [{ label: "LinkedIn", value: "...", href: "..." }]
  } = contactInfo || {};

  const hireable = isHireable ? "Yes" : "No";
  const location = cfgLocation || prof.location || "";
  const bio = pitch || prof.bio || "";
  const photo = contactInfo?.photo || prof?.avatarUrl;
  const photoAlt = contactInfo?.photoAlt || prof?.name || "Profile photo";

  // ---- tiny inline icon set (no extra deps) ----
  const Icon = ({ name }) => {
    const common = { width: 18, height: 18, fill: "currentColor" };
    switch (name) {
      case "mail":
        return (
          <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.24l8 6.75 8-6.75V18H4Z"/>
          </svg>
        );
      case "phone":
        return (
          <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.03-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1c-9.39 0-17-7.61-17-17a1 1 0 0 1 1-1h3.47a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.03L6.6 10.8Z"/>
          </svg>
        );
      case "file":
        return (
          <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6"/>
          </svg>
        );
      case "link":
        return (
          <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M10 13a5 5 0 0 0 7.07 0l2-2A5 5 0 0 0 14 3.93l-1 .99M14 11a5 5 0 0 0-7.07 0l-2 2A5 5 0 1 0 10 20.07l1-.99"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const ContactItem = ({ icon, label, text, href }) => (
    <li className="contact-item">
      <span className="contact-icon" aria-hidden="true"><Icon name={icon} /></span>
      <span className="contact-content">
        <span className="contact-label">{label}:</span>{" "}
        {href ? (
          <a className="contact-link" href={href} target="_blank" rel="noreferrer">
            {text}
          </a>
        ) : (
          text
        )}
      </span>
    </li>
  );

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">{title}</h1>

        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{subtitle}</p>
            </div>

            {bio && <h2 className="bio-text">"{emoji(String(bio))}"</h2>}

            {location && (
              <div className="location-div">
                <span className="desc-prof">
                  <svg viewBox="-0.5 -2 20 19" width="22" height="16" aria-hidden="true" stroke="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                    />
                  </svg>
                  {location}
                </span>
              </div>
            )}

            <div className="opp-div">
              <span className="desc-prof">Open for opportunities: {hireable}</span>
            </div>

          

        
            <SocialMedia />
          </div>

          <div className="image-content-profile">
            {portfolio ? (
              <a
                href={portfolio}
                target="_blank"
                rel="noreferrer"
                aria-label="Open portfolio"
                className="profile-link-wrap"
              >
                <div className="profile-ring">
                  <img
                    src={photo}
                    alt={photoAlt}
                    className="profile-image"
                    loading="lazy"
                    onError={(e) => {
                      // fallback to GitHub avatar if custom photo fails
                      if (prof?.avatarUrl && e.currentTarget.src !== prof.avatarUrl) {
                        e.currentTarget.src = prof.avatarUrl;
                      }
                    }}
                  />
                </div>
              </a>
            ) : (
              <div className="profile-ring">
                <img
                  src={photo}
                  alt={photoAlt}
                  className="profile-image"
                  loading="lazy"
                  onError={(e) => {
                    if (prof?.avatarUrl && e.currentTarget.src !== prof.avatarUrl) {
                      e.currentTarget.src = prof.avatarUrl;
                    }
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
