import { useState } from 'react';

// Components
import GridOrList from './GridOrList';
import ListLayout from './ListLayout';
import GridLayout from './GridLayout';

// Config
import { layoutTypes } from '../../config';

export default function LatestIssues({ lastIssues }) {
  const [layout, setLayout] = useState(layoutTypes.list);

  function renderLayout(lastIssues) {
    if (layout === layoutTypes.grid) {
      return (
        <GridLayout lastIssues={lastIssues} />
      );
    }

    return (
      <ListLayout lastIssues={lastIssues} />
    );
  }

  return (
    <div>
      <GridOrList title="Latest Issues" setLayout={setLayout} layout={layout} />
      {renderLayout(lastIssues)}
    </div>
  );
}
