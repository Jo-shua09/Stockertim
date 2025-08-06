import { NewsTableData } from "../../assets/data/NewsData";

export default function SideNews() {
  return (
    <div className="mt-12 space-y-6">
      {NewsTableData.slice(0, 4).map((news, index) => (
        <div key={index} className="flex border-b pb-4 gap-4 items-end">
          <img src={news.image} alt={news.title} loading="lazy" className="w-[15rem] h-[7rem] border object-cover rounded" />
          <div className="flex-1">
            <p className="text-[1.7rem] normal-case text-gray-700 line-clamp-2">{news.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
