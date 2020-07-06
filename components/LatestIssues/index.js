// Components
import GridOrList from "../GridOrList";
import { useState } from "react";

// Config
import { layoutTypes } from '../../config';

export default function LatestIssues({ lastIssues }) {
  const [layout, setLayout] = useState(layoutTypes.list);

  function renderLayout(lastIssues) {
    if (layout === layoutTypes.grid) {
      return (
        <p>grid</p>
      );
    }

    return (
      <p>list</p>
    );
  }

  return (
    <div>
      <GridOrList title="Latest Issues" setLayout={setLayout} />
      {renderLayout()}
    </div>
  );
}
