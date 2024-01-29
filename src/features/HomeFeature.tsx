import React, { FC, useEffect, useState } from "react"

import AddPizzaForm from "../components/AddPizzaForm"
import DisplayPizzas from "../components/DisplayPizzas"
import Pizza from "../models/Pizza"

const HomeFeature: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([])

  const addPizza = (newPizza: Pizza) => {
    const newPizzasList = [...pizzasList, newPizza]
    setPizzasList(newPizzasList)
    localStorage.setItem("pizzasState", JSON.stringify(newPizzasList))
  }

  const updatePizza = (newPizza: Pizza) => {
    const newPizzasList = pizzasList.map((pizza) =>
      pizza.id === newPizza.id ? newPizza : pizza
    )
    setPizzasList(newPizzasList)

    localStorage.setItem("pizzasState", JSON.stringify(newPizzasList))
  }
  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter((pizza) => pizza.id != id)
    setPizzasList(newPizzasList)
    localStorage.setItem("pizzasState", JSON.stringify(newPizzasList))
  }

  useEffect(() => {
    const pizzasState = localStorage.getItem("pizzasState")
    if (pizzasState) {
      setPizzasList(JSON.parse(pizzasState))
    }
  }, [])
  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша пиццерия</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas
          pizzasList={pizzasList}
          deletePizza={deletePizza}
          updatePizza={updatePizza}
        />
      </div>
    </div>
  )
}

export default HomeFeature
