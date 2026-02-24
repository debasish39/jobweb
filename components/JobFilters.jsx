"use client";
import JobCard from "./JobCard";

import { useState } from "react";

export default function JobFilters({ jobs }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchTitle = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "" ||
      job.category.toLowerCase().includes(category.toLowerCase());

    return matchTitle && matchCategory;
  });

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search jobs..."
          className="border px-4 py-2 rounded-lg w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="software">Software</option>
          <option value="marketing">Marketing</option>
          <option value="design">Design</option>
        </select>
      </div>

      {/* Job Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id}>
              {/* We reuse JobCard */}
              <JobCard job={job} />
            </div>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </>
  );
}