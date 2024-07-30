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
  return <ul aria-label="SaaS 목록">empty</ul>;
};
