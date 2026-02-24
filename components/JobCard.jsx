import Image from "next/image";

export default function JobCard({ job }) {
    console.log(job.company_logo);
  return (
    <div className="relative group rounded-2xl p-[1px] bg-gradient-to-br 
                    from-blue-200 via-purple-200 to-indigo-200 
                    hover:from-blue-400 hover:via-purple-400 hover:to-indigo-400 
                    transition-all duration-500">

      <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 
                      shadow-md hover:shadow-2xl 
                      transition-all duration-300 
                      hover:-translate-y-2 relative overflow-hidden">

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r 
                        from-transparent via-white/40 to-transparent 
                        -translate-x-full group-hover:translate-x-full 
                        transition-transform duration-1000 ease-in-out" />

        {/* Top Section */}
        <div className="flex items-start justify-between relative z-10">

          {/* Logo + Title */}
          <div className="flex items-start gap-4">

            {/* Logo */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br 
                            from-gray-100 to-gray-200 
                            flex items-center justify-center 
                            overflow-hidden shadow-sm 
                            border border-gray-200 
                            group-hover:scale-105 transition">

              {job.company_logo ? (
                <img
  src={job.company_logo}
  alt={job.company_name}
  className="w-full h-full object-cover rounded-xl"
/>
              ) : (
                <span className="text-xl font-bold text-gray-500">
                  {job.company_name?.[0]}
                </span>
              )}
            </div>

            {/* Title + Company */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 
                             group-hover:text-blue-600 transition">
                {job.title}
              </h2>

              <p className="text-sm text-gray-500">
                {job.company_name}
              </p>
            </div>
          </div>

          {/* Salary */}
          {job.salary && (
            <span className="text-xs font-semibold 
                             bg-green-100 text-green-700 
                             px-3 py-1 rounded-full 
                             shadow-sm border border-green-200">
              💰 {job.salary}
            </span>
          )}
        </div>

        {/* Location */}
        <div className="mt-4 text-sm text-gray-500 flex items-center gap-2 relative z-10">
          <span>📍</span>
          {job.candidate_required_location}
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2 relative z-10">
          {job.category && (
            <span className="text-xs font-medium 
                             bg-blue-100 text-blue-700 
                             px-3 py-1 rounded-full 
                             border border-blue-200">
              {job.category}
            </span>
          )}

          {job.job_type && (
            <span className="text-xs font-medium 
                             bg-purple-100 text-purple-700 
                             px-3 py-1 rounded-full 
                             border border-purple-200">
              {job.job_type}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-100 relative z-10"></div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between relative z-10">

          <p className="text-xs text-gray-400">
            🚀 Posted recently
          </p>

          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-5 py-2 text-sm font-medium text-white 
                       bg-gradient-to-r from-blue-600 to-indigo-600 
                       rounded-lg shadow-md 
                       hover:shadow-lg 
                       hover:scale-105 
                       active:scale-95
                       transition-all duration-200"
          >
            Apply →
          </a>
        </div>
      </div>
    </div>
  );
}