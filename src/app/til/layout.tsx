const ArchiveLayout = ({
  til,
  latest,
}: {
  til: React.ReactNode;
  latest: React.ReactNode;
}) => {
  return (
    <div>
      <h1>Daily/Weekly Study Records</h1>
      <div>{til}</div>
      <div>{latest}</div>
    </div>
  );
};

export default ArchiveLayout;
