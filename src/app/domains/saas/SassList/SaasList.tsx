export const SaasList = ({
  saasList,
}: {
  saasList: {
    id: string;
    name: string;
    logoUrl: string | null;
    lastPaidAt: Date | null;
  }[];
}) => {
  return (
    <ul aria-label="SaaS 목록">
      {saasList.map((saas) => (
        <li key={saas.id}>{JSON.stringify(saasList)}</li>
      ))}
    </ul>
  );
};
