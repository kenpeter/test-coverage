import React from 'react';

export function TestZone({
  Icon,
  getRootProps,
  getInputProps,
  msg1 = null,
  msg2 = null,
  msg3
}) {
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div>
        <div>
          <Icon />
        </div>
        <div>
          {msg1 !== null ? <div>{msg1}</div> : null}
          <div>{msg2}</div>
          <div>{msg3}</div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const Icon = () => {
    return <div>icon</div>;
  };
  const getRootProps = () => {
    return {id: 'id1'};
  };
  const getInputProps = () => {
    return {id: 'id2'};
  };
  return (
    <div>
      <TestZone
        Icon={Icon}
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        msg1={'hi1'}
        msg2={'hi2'}
        msg3={'hi3'}
      />
    </div>
  );
}

export default App;
