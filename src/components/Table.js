import React from "react";
import { useSelector } from "react-redux";

function Table() {
  const { data } = useSelector((state) => state.ProjectReducer);
  const renderUserList = () => {
    return data.drinks?.map((item, index) => {
      return (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.idDrink}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src={item.strDrinkThumb}
                  alt={item.strDrinkThumb}
                />
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.strDrink}</div>
          </td>
          <td className="px-6 py-4 w-1 h-auto whitespace-nowrap">
            <p className="text-sm text-gray-900">{item.strInstructions}</p>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="p-20">
      <div className="my-2 overflow-x-auto -mx-6">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="table_header">
                    Id
                  </th>
                  <th scope="col" className="table_header">
                    Image
                  </th>
                  <th scope="col" className="table_header">
                    Name
                  </th>
                  <th scope="col" className="table_header">
                    Instruction
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {renderUserList()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <Pagination userList={userList} /> */}
      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between sm:px-6">
        <div className="flex-1 flex items-center justify-between">
          <div></div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button onClick={() => {}} className="arrow rounded-l-md">
                <span className="sr-only">Previous</span>

                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* {renderPageNumbers} */}

              <button onClick={() => {}} className="arrow rounded-r-md">
                <span className="sr-only">Next</span>

                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
