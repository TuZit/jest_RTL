import { render, screen } from '@testing-library/react'
import { Application } from './Application'

describe.only('Application', () => {
  test('renders', () => {
    render(<Application />)

    /** getByRole */

    // h1
    const pageHeading = screen.getByRole('heading', {
      level: 1,
      // name: 'Job application form',
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
      // name: 'Section 1'
    })
    expect(sectionHeading).toBeInTheDocument()

    // input tag
    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(nameElement).toBeInTheDocument()

    // input tag
    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    // thẻ select tag
    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const submitElement = screen.getByRole('button')
    expect(submitElement).toBeInTheDocument()
    expect(submitElement).toBeDisabled()

    /** getByLabelText */
    // input tag
    const nameElement2 = screen.getByLabelText('Name', { selector: 'input' })
    expect(nameElement2).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions'
    )
    expect(termsElement2).toBeInTheDocument()

    /** getByPlaceholderText */

    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    /** getByText */

    const paragraphElement = screen.getByText('All fields are mandatory')
    expect(paragraphElement).toBeInTheDocument()

    /** getByDisplayValue */

    const nameElement4 = screen.getByDisplayValue('shiba')
    expect(nameElement4).toBeInTheDocument()

    /** getByAltText */

    const imageElement = screen.getByAltText('a person with a laptop')
    expect(imageElement).toBeInTheDocument()

    /** getByTitle */

    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    /** getByTestId */

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()
  })
})
