// In useWaitFor.js

import { useEffect } from "react";

export function useWaitFor(condition, callback) {
  useEffect(() => {
    if (condition) {
      callback();
    }
  }, [condition, callback]);
}
