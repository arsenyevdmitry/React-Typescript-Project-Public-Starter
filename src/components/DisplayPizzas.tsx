import React, { FC } from "react"

import Pizza from "../models/Pizza"
import SinglePizza from "./SinglePizza"

interface DisplayPizzasProps {
  pizzasList: Pizza[]
  updatePizza: (newPizza: Pizza) => void
  deletePizza: (id: number) => void
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza
            key={pizza.id}
            deletePizza={deletePizza}
            updatePizza={updatePizza}
            pizza={pizza}
          />
        )
      })}
    </div>
  )
}

export default DisplayPizzas
