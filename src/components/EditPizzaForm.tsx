import "./styles.css"

import React, { ChangeEvent, FC, FormEvent, useState } from "react"

import Pizza from "../models/Pizza"

interface EditPizzaFormProps {
  data: Pizza
  updatePizza: (newPizza: Pizza) => void
  handleToggleEdit: () => void
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({
  data,
  updatePizza,
  handleToggleEdit,
}) => {
  // Destructure props correctly
  const [editPizza, setEditPizza] = useState<Pizza>(data)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setEditPizza({
      ...editPizza,
      [name]: value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { title, price, img } = editPizza

    if (title && price && img) {
      updatePizza(editPizza)
      handleToggleEdit()
    }
  }

  console.log("new pizza>>>> ", editPizza)

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit">+ Подтвердить</button>
    </form>
  )
}

export default EditPizzaForm
