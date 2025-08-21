import PageTitle from "@/components/dashboard/PageTitle";
import { CampaignList } from "@/components/campaigns/campaigns-list";
import { getCampaignsByWorkspace } from "@/actions/campaigns-action";

const CampaignsPage = async () => {
  const subText: string = "Display all related campaigns here.";

  const getCampaigns = await getCampaignsByWorkspace();

  const campaigns = getCampaigns?.success?.campaigns;

  return (
    <section className="h-full flex flex-col gap-4">
      <PageTitle subText={subText} />
      <div className="h-full flex-grow overflow-y-scroll">
        {campaigns && <CampaignList campaigns={campaigns} />}
      </div>
    </section>
  );
};

export default CampaignsPage;
