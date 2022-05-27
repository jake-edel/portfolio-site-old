import Table from "./Table"
import React, { useEffect } from "react"
import { useState } from "react"

const mockData = [
    {
        State: 'CO',
        Year: '2020',
        Population: 1000000,
    }
]

const Test = () => {
    const [popData, setPopData] = useState(mockData)
    const [popType, setPopType] = useState("State")
    
    const getData = () => 
        fetch(`https://datausa.io/api/data?drilldowns=${popType}&measures=Population`)
            .then(res => res.json())
    
    
    useEffect(
        () => {
            getData().then(data => {
                console.log(data.data)
                setPopData(data.data.slice(0, 52))
            })

            return () => {console.log("unmount")}
        }, 
        [popType]
    )
    
    
    const handleAddItem = () => {
        const newPopData = [
            ...popData
        ]
        newPopData.push({
            State: 'UT',
            Year: '2020',
            Population: 50000
        })
        setPopData(newPopData)
    }

    const handleTypeChange = (event) => {
        setPopType(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div>
            <Table items={popData} popType={popType}></Table>
            <select value={popType} onChange={handleTypeChange}>
                <option>State</option>
                <option>Nation</option>
            </select>
        </div>
    )

}

export default Test