import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import AppFunctional from "./AppFunctional"

// Write your tests here


  


const user = userEvent.setup()

describe(`whether coordinates first render correctly`, () => {
  let input, up, down, right, left, reset
  test(`[1]: coordinates should be (2,2)`, () => {
    render(<AppFunctional />)
    expect(screen.getByTestId("coordinates")).toHaveTextContent("Coordinates (2, 2)")
  })
  test(`[2]: input updates`, async () => {
    render(<AppFunctional />)
    input = screen.getByPlaceholderText('type email')
    await user.type(input, 'hgunter22206@gmail.com')
    expect(input).toHaveValue('hgunter22206@gmail.com')
  })
  test(`[3]: coordinates change to (2, 1) when up button is pressed once`, async () => {
    render(<AppFunctional />)
    up = screen.getByText('UP')
    await user.click(up)
    expect(screen.getByTestId("coordinates")).toHaveTextContent("Coordinates (2, 1)")
  })
  test(`[4]: coordinates change to (2, 3) when down button is pressed once`, async () => {
    render(<AppFunctional />)
    down = screen.getByText('DOWN')
    await user.click(down)
    expect(screen.getByTestId("coordinates")).toHaveTextContent("Coordinates (2, 3)")
  })
  test(`[5]: coordinates change to (3, 2) when right button is pressed once`, async () => {
    render(<AppFunctional />)
    right = screen.getByText('RIGHT')
    await user.click(right)
    expect(screen.getByTestId("coordinates")).toHaveTextContent("Coordinates (3, 2)")
  })
  test(`[6]: coordinates change to (1, 2) when left button is pressed once`, async () => {
    render(<AppFunctional />)
    left = screen.getByText('LEFT')
    await user.click(left)
    expect(screen.getByTestId("coordinates")).toHaveTextContent("Coordinates (1, 2)")
  })
  test(`[7]: reset changes coordinates to init value, (2, 2)`, async () => {
    render(<AppFunctional />)
    reset = screen.getByText('reset')
    await user.click(reset)
    expect(screen.getByTestId("coordinates")).toHaveTextContent("Coordinates (2, 2)")
  })
})