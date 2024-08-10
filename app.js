import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="relative overflow-x-auto">
      <h1 className="text-2xl text-center">Some useful topics</h1>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">#</th>
            <th scope="col" className="px-6 py-3">First</th>
            <th scope="col" className="px-6 py-3">Last</th>
            <th scope="col" className="px-6 py-3">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">Mark</td>
            <td className="px-6 py-4">Otto</td>
            <td className="px-6 py-4">@mdo</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">Jacob</td>
            <td className="px-6 py-4">Thornton</td>
            <td className="px-6 py-4">@fat</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <td className="px-6 py-4">3</td>
            <td className="px-6 py-4">Larry</td>
            <td className="px-6 py-4">Wild</td>
            <td className="px-6 py-4">@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
