import React from 'react';

export const Table = ({ columns, data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
                <thead className="">
                <tr>
                    {columns.map((column, index) => (
                        <th
                            key={index}
                            className="px-4 py-2 border border-gray-300 text-left text-gray-600 uppercase tracking-wider ">
                            {column}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((item, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-100">
                        {columns.map((column, colIndex) => (
                            <td
                                key={colIndex}
                                className="px-4 border py-2  border-gray-300 text-gray-600">
                                {item[column]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

