import React from "react"

const Table = ( { items, popType } ) => {
    const renderRows = () => {
        return (
            items.map((item) => {
                return(
                    <tr key={`${item.State}${item.Year}`}>
                        <td>{item.Nation || item.State}</td>
                        <td>{item.Year}</td>
                        <td>{item.Population}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>{popType}</th>
                    <th>Year</th>
                    <th>Population</th>
                </tr>    
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default Table