import React, { FC, useEffect, useState } from "react"

import Pizza from "../models/Pizza"
import { useParams } from "react-router-dom"

const PizzaFeature: FC = () => {
  // Assuming you have some way of fetching or providing pizza data
  const initialPizza: Pizza = {
    id: 1,
    title: "Pepperoni",
    price: 10.99,
    img: "pepperoni.jpg",
  }

  const [pizza, setPizza] = useState<Pizza | null>(initialPizza)

  const { id } = useParams()

  console.log("id >>> ", id)

  // useEffect can be used for any side effects, like fetching data
  useEffect(() => {
    const pizzasState = localStorage.getItem("pizzasState")

    if (pizzasState && id) {
      const pizzasList = JSON.parse(pizzasState)
      const searchId = parseInt(id)

      const currentPizza = pizzasList.find((p: Pizza) => p.id === searchId)
      setPizza(currentPizza)
    }
  }, []) // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <span className="heading">Ваша пицца</span>
      <div className="pizza pizza-page">
        <img src={`/images/${pizza?.img}`} alt={pizza?.title} />
        <h2>{pizza?.title}</h2>
        <span>{pizza?.price} ₽</span>
        <p>Лучшая в городе!</p>
      </div>
    </>
  )
}

export default PizzaFeature
