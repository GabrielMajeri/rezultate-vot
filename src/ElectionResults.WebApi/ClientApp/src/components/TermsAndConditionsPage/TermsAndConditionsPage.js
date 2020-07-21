import React, { useEffect } from "react";
import { useTranslateHtml } from "../../hooks/useTranslateHtml";

export const TermsAndConditionsPage = () => {

  useEffect(() => {
    // Scroll to the top of the page; workaround for when navigating from footer.
    document.body.scrollTop = 0;
  }, []);

  const { translate } = useTranslateHtml('translation', 'terms_and_conditions_page');

  return (
    <div
      className="static-container"
    >
      {
        translate()
      }
    </div>
  );
};
