import ADSpace from "../components/sections/home/ADSpace";
import ChartCardSwiper from "../components/sections/home/ChartCardSwiper";
import DailyBrief from "../components/sections/home/DailyBrief";
import IBRGPortfolio from "../components/sections/home/IBRGPortfolio";
import NewsBrief from "../components/sections/home/NewsBrief";
import StockPicks from "../components/sections/home/StockPicks";
import TradeAlerts from "../components/sections/home/TradeAlerts";
import VideoBrief from "../components/sections/home/VideoBrief";

export default function Index() {
  return (
    <div className="flex items-start gap-8 bg-gray-50 md:px-8 w-full">
      <div className="w-full xl:max-w-[95rem] xl:flex-[2] bg-white rounded-xl md:my-8 p-10">
        <ChartCardSwiper />
        <IBRGPortfolio />
        <ADSpace />
        <NewsBrief />
        <DailyBrief />
        <ADSpace />
        <StockPicks />
        <ADSpace />
        <TradeAlerts />
        <ADSpace />
        <VideoBrief />
      </div>
      <div className="xl:w-full xl:flex-1 h-full bg-white rounded-xl my-8 p-10 xl:block hidden"></div>
    </div>
  );
}
