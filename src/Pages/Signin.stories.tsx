import { Signin } from './Signin'
import { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { rest } from 'msw'

export default {
  title: 'Pages/Sign in ',
  component: Signin ,
  args: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (request, response, context) => {
          return response(context.json({
            message: 'Login realizado!'
          }))
        })
      ],
    },
  },
  argTypes: {

  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'emailteste@gmal.com')
    userEvent.type(canvas.getByPlaceholderText('******'), '123456789')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()

    })

  }
}
