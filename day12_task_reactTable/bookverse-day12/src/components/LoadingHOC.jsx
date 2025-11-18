import React from "react";

const LoadingHOC = (Component) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div className="text-center mt-5">
          <h3>⏳ Loading books...</h3>
        </div>
      );
    }

    return <Component {...props} />;
  };
};

export default LoadingHOC;
