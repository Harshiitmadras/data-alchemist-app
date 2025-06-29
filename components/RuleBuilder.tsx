import React from 'react';

type Props = {
  data: any[];
};

export const RuleBuilder: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h2>📐 Rule Builder</h2>
      <p>Apply custom logic here (e.g. filter rows, check values)</p>
      <pre style={{ backgroundColor: '#f5f5f5', padding: '1rem' }}>
        {JSON.stringify(data.slice(0, 3), null, 2)}
      </pre>
    </div>
  );
};