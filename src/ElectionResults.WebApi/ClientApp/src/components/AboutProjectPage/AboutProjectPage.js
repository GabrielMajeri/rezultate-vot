import React from "react";
import { useTranslateHtml } from "../../hooks/useTranslateHtml";

export const AboutProjectPage = () => {
  const { translate } = useTranslateHtml('translation', 'about_project_page');

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
