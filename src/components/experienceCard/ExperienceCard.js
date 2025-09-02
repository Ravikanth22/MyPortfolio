import React, { useState, createRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo, isDark }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  /* ---------- helpers ---------- */

  const rgb = (values) =>
    typeof values === "undefined" ? null : `rgb(${values.join(", ")})`;

  function getColorArrays() {
    try {
      const colorThief = new ColorThief();
      if (imgRef.current && imgRef.current.complete) {
        const col = colorThief.getColor(imgRef.current);
        if (Array.isArray(col)) setColorArrays(col);
      }
    } catch {
      /* ignore color errors (CORS, etc.) */
    }
  }

  // Normalize any input to a text string
  const toText = (v) => {
    if (v == null) return "";
    if (typeof v === "string") return v;
    if (Array.isArray(v)) return v.map((x) => (x == null ? "" : String(x))).join(" ");
    return String(v);
  };

  // Split text into bullet points
  const autoSplitBullets = (v) =>
    toText(v)
      .replace(/\s+/g, " ")
      .split(/(?:•|\n|;|\.(?=\s|$))/g) // bullets, newlines, semicolons, or period+space
      .map((t) => t.trim())
      .filter(Boolean);

  // Prefer explicit descBullets; if not present, derive from desc
  const explicitBullets = Array.isArray(cardInfo?.descBullets)
    ? cardInfo.descBullets
    : autoSplitBullets(cardInfo?.descBullets);

  const bullets =
    explicitBullets && explicitBullets.length > 0
      ? explicitBullets
      : autoSplitBullets(cardInfo?.desc);

  const showParagraph = bullets.length === 0 && !!toText(cardInfo?.desc);

  /* ---------- render ---------- */

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      {/* Banner */}
      <div style={{ background: rgb(colorArrays) }} className="experience-banner">
        <div className="experience-blurred_div" />
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo?.company}</h5>
        </div>

        <img
          crossOrigin="anonymous"
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo?.companylogo}
          alt={cardInfo?.company || "Company logo"}
          onLoad={getColorArrays}
        />
      </div>

      {/* Details */}
      <div className="experience-text-details">
        <h5
          className={
            isDark ? "experience-text-role dark-mode-text" : "experience-text-role"
          }
        >
          {cardInfo?.role}
        </h5>

        <h5
          className={
            isDark ? "experience-text-date dark-mode-text" : "experience-text-date"
          }
        >
          {cardInfo?.date}
        </h5>

        {bullets.length > 0 ? (
          <ul className="experience-points">
            {bullets.map((item, i) => (
              <li key={i} className={isDark ? "subTitle dark-mode-text" : "subTitle"}>
                {item}
              </li>
            ))}
          </ul>
        ) : showParagraph ? (
          <p
            className={
              isDark
                ? "subTitle experience-text-desc dark-mode-text"
                : "subTitle experience-text-desc"
            }
          >
            {toText(cardInfo?.desc)}
          </p>
        ) : null}
      </div>
    </div>
  );
}
