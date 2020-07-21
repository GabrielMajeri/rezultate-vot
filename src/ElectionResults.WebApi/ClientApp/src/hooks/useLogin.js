import { authentication } from "../services/apiService";
import { useEffect, useState } from "react";

/**
 * @param {boolean} deferred
 * @returns {{isLoading: boolean, response: null, error: null}}
 */
export const useLogin = (deferred) => {
  const [state, setState] = useState(
    {
      isLoading: false,
      response: null,
      error: null,
    }
  );

  useEffect(() => {
    if (deferred) {
      setState({
        ...state,
        isLoading: true,
      });
      authentication.login()
        .then(response => {
          setState(
            {
              ...state,
              isLoading: false,
              response
            }
          );
        })
        .catch(error => {
          setState(
            {
              ...state,
              isLoading: false,
              error
            }
          );
        })
    }

  }, [deferred]);

  return { ...state };
}
