import React, { CSSProperties, FC } from 'react';

interface InvalidConfigurationProps {
  missingVariables: string[];
}

export const InvalidConfiguration: FC<InvalidConfigurationProps> = ({ missingVariables }) => {
  const liStyles: CSSProperties = {
    listStyleType: 'none',
    padding: 0,
  };

  const ulStyle: CSSProperties = {
    marginTop: 10,
    padding: 0,
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="">
            <h1>Invalid Congiguration</h1>
            <div className="">
              <strong>Please provide settings for:</strong>
            </div>
            <ul style={ulStyle}>
              {missingVariables.map(x => (
                <li style={liStyles}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
