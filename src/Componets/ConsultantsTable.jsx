import React from 'react'

const ConsultantsTable = ({coloumns,data}) => {
  return (
    <div>
<table className="table-auto w-[85vw] border-2 border-gray-200">
<thead>
<tr>
    {coloumns.map((coloumns,index)=>(<th className="w-40 p-4  text-gray-700 bg-white uppercase tracking-wider  border border-gray-200 text-center" key={index} >{coloumns.title}</th>))}
</tr>
</thead>
<tbody>
{data.map((row, rowIndex) => (
          <tr className={`bg-white w-32`} key={rowIndex}>
            {coloumns.map((coloumns, colIndex) => (
              <td  className="border-2 p-4 border-gray-200 text-center" key={`${rowIndex}-${colIndex}`}>
                {row[coloumns.accessor]}
              </td>
            ))}
          </tr>
        ))}

</tbody>


</table>

      
    </div>
  )
}

export default ConsultantsTable
