import { useState } from "react"
import { useOpenFoodFacts } from "../hooks/useOpenFoodFacts"
import { Fragment } from 'react'




export default function Calories() {

    const { results, loading, search } = useOpenFoodFacts()

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>

            <button onClick={() => search(searchTerm)}></button>

            <ul>
                {results.map((product) => 
                <Fragment key={product.product_name}>
                    <li>{product.product_name}</li>
                    <li>{product.nutriments['energy-kcal_100g']} kcal/100g</li>
                </Fragment>

                )}
            </ul>
            

        </>
    )
}