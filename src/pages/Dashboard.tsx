import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ActivityTimeline from "../components/ActivityTimeline";
import SearchBar from "../components/SearchBar";
import data from "../data/activities.json";
import "../styles/layout.css";
import Breadcrumb from "../components/Breadcrumb";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  const modules = [...new Set(data.map((d) => d.module))];
  const customers = [...new Set(data.map((d) => d.customer))];
  const activityTypes = [...new Set(data.map(d => d.activityType))].sort();
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const [filters, setFilters] = useState<any>({});
  const [searchText, setSearchText] = useState("");

  const applyFilters = (newFilters: any) => {
    setFilters(newFilters);
  };

const filteredData = data.filter((item) => {

  // Module filter
  if (
    filters.selectedModules?.length > 0 &&
    !filters.selectedModules.includes(item.module)
  ) {
    return false;
  }

  // Customer filter
  if (
    filters.selectedCustomers?.length > 0 &&
    !filters.selectedCustomers.includes(item.customer)
  ) {
    return false;
  }

  // Activity filter
  if (
    filters.activityType &&
    filters.activityType !== "All" &&
    item.activityType !== filters.activityType
  ) {
    return false;
  }

  // Amount filter (single slider = max)
  if (
    filters.amount !== undefined &&
    item.amount > filters.amount
  ) {
    return false;
  }

  // Search filter
  if (searchText.trim() !== "") {
    const text = searchText.toLowerCase();
    const searchable =
      `${item.user} ${item.customer} ${item.description} ${item.module}`.toLowerCase();

    if (!searchable.includes(text)) return false;
  }

  return true;
});



  return (
    <div className="pageWrapper">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Breadcrumb />

      <div className="layout">
        <Sidebar
          modules={modules}
          customers={customers}
          activityTypes={activityTypes}
          onApplyFilters={applyFilters}
          isOpen={sidebarOpen}
        />

        <div className="contentArea">
          <SearchBar value={searchText} onChange={setSearchText} />

          <ActivityTimeline data={filteredData} />
        </div>
      </div>
       <ToastContainer />
    </div>
  );
}
