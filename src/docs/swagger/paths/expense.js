export const createExpensePath = {
  post: {
    tags: ['expenses'],
    summary: 'Create expenses ',
    description: 'Create a new user expense entry',
    parameters: [
      {
        name: 'body',
        in: 'body',
        description: 'User request object',
        required: true,
        schema: {
          $ref: '#/definitions/CreateExpenseReq'
        }
      }
    ],
    responses: {
      201: {
        description: 'Resource created',
        schema: {
          $ref: '#/definitions/CreateExpenseRes'
        }
      },
      400: {
        description: 'Invalid request details',
        schema: {
          $ref: '#/definitions/badRequest'
        }
      },
      401: {
        description: 'User already exist',
        schema: {
          $ref: '#/definitions/notAuthorized'
        }
      },
      500: {
        description: 'Server error',
        schema: {
          $ref: '#/definitions/serverError'
        }
      }
    }
  }
};
