import { Spinner } from "@chakra-ui/react";

const LoadingInProgress = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: 50 }}>
      <Spinner size="xl" />;
    </div>
  );
};

export default LoadingInProgress;
