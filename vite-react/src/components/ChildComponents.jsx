import React from 'react';

// React.memo is used to optimize the component by preventing unnecessary re-renders
// It will only re-render if the props change
// In this case, it will re-render only if the buttonName prop changes.
const ChildComponents = React.memo(
    (props) => {
        console.log("ChildComponents");
  return (
    <div>
      <h2>Child Components</h2>
      <p>This is a placeholder for child components.</p>
      <button>{props.buttonName}</button>
    </div>
  );
}
);

export default ChildComponents;
