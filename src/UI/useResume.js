import { useState } from 'react';

function useResume() {
  const [isShowing, setIsShowing] = useState(false);

  function toggle(e) {
    e.stopPropagation();
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
}

export default useResume;
