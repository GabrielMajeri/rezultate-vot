import React, { useEffect } from "react";
import { useTranslateHtml } from "../../hooks/useTranslateHtml";

export const ConfidentialityPolicyPage = () => {

  useEffect(() => {
    // Scroll to the top of the page; workaround for when navigating from footer.
    document.body.scrollTop = 0;
  }, []);

  const { translate } = useTranslateHtml('translation', 'privacy_policy_page');

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
