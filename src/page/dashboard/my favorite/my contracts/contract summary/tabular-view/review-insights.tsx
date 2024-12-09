function ReviewInsightsTabular() {
  return (
    <div className="overflow-x-auto mt-8 mb-4 mx-4">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-medium text-gray-600">
              Category
            </th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-sm font-medium text-gray-600">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-3 border-b border-gray-300 text-sm text-gray-700">
              Primary Reviewers
            </td>
            <td className="px-4 py-3 border-b border-gray-300 text-sm text-gray-700">
              Rick, Lisa, Mike (Counterparty)
            </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-3 border-b border-gray-300 text-sm text-gray-700">
              Documents Being Reviewed
            </td>
            <td className="px-4 py-3 border-b border-gray-300 text-sm text-gray-700">
              <div>
                <p>Draft Contract Agreement v2.3 (Updated February 10, 2024)</p>
                <p>Scope of Work v3.0 (Last Updated March 1, 2024)</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ReviewInsightsTabular;
