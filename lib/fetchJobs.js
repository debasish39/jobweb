import axios from "axios";

export async function fetchJobs() {
  try {
    const res = await axios.get(
      "https://remotive.com/api/remote-jobs"
    );
    return res.data.jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}