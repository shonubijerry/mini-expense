export const signUpPath = {
  post: {
    tags: ['auth'],
    summary: 'Signup a user',
    description: 'Registere new user',
    parameters: [
      {
        name: 'body',
        in: 'body',
        description: 'User request object',
        required: true,
        schema: {
          $ref: '#/definitions/SignupReq'
        }
      }
    ],
    responses: {
      201: {
        description: 'User login successfully',
        schema: {
          $ref: '#/definitions/SigninRes'
        }
      },
      400: {
        description: 'Invalid request details',
        schema: {
          $ref: '#/definitions/badRequest'
        }
      },
      409: {
        description: 'User already exist',
        schema: {
          $ref: '#/definitions/conflict'
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

export const signInPath = {
  post: {
    tags: ['auth'],
    summary: 'Sign a user in',
    description: 'Allows registered user to signin',
    parameters: [
      {
        name: 'body',
        in: 'body',
        description: 'User request object',
        required: true,
        schema: {
          $ref: '#/definitions/SigninReq'
        }
      }
    ],
    responses: {
      200: {
        description: 'User login successfully',
        schema: {
          $ref: '#/definitions/SigninRes'
        }
      },
      400: {
        description: 'Invalid request details',
        schema: {
          $ref: '#/definitions/badRequest'
        }
      },
      401: {
        description: 'Incorrect login details',
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
