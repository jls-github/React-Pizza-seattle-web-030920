import React from "react"

const PizzaForm = (props) => {
  console.log(props)

  const { topping, size, vegetarian } = props.formPizza
  const { onChangeTopping, onChangeSize, onChangeVegetarian } = props

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={topping} onChange={e => onChangeTopping(e.target.value)}/>
        </div>
        <div className="col">
          <select value={size} onChange={e => onChangeSize(e.target.value)} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian === true ? true : false} onChange={e => onChangeVegetarian(true)} />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={vegetarian === false ? true : false} onChange={e => onChangeVegetarian(false)} />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.onSubmitPizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
