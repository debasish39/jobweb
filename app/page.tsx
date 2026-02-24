import { fetchJobs } from "@/lib/fetchJobs";
import Navbar from "../components/Navbar";
import JobFilters from "../components/JobFilters";

export default async function Home() {
  const jobs = await fetchJobs();

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          Latest Remote Jobs
        </h1>

        <JobFilters jobs={jobs} />
      </div>
    </>
  );
}