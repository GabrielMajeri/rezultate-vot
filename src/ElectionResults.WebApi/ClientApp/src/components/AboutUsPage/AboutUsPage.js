import React from "react";
import { useTranslateHtml } from "../../hooks/useTranslateHtml";

export const AboutUsPage = () => {
  const { translate } = useTranslateHtml('translation', 'about_us_page');
  return (
    <div
      className="static-container"
    >
      {
        translate()
      }
    </div>
  );
}
