export const SignupReq = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'John Doe'
    },
    email: {
      type: 'string',
      format: 'email',
      example: 'johndoe@mail.com'
    },
    password: {
      type: 'string',
      format: 'password',
      minLength: 8,
      example: '123456'
    }
  }
};

export const SigninReq = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      example: 'johndoe@mail.com'
    },
    password: {
      type: 'string',
      format: 'password',
      minLength: 8,
      example: '123456'
    }
  }
};

export const SigninRes = {
  type: 'object',
  properties: {
    success: {
      type: 'boolean',
      example: true
    },
    message: {
      type: 'string',
      example: 'login successful'
    },
    payload: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
        },
        name: {
          type: 'string',
          example: 'johndoe'
        },
        email: {
          type: 'string',
          format: 'email',
          example: 'johndoe@mail.com'
        },
        createdAt: {
          type: 'string',
          format: 'date-time'
        },
        updatedAt: {
          type: 'string',
          format: 'date-time'
        },
        token: {
          type: 'string',
          example: 'very_long_encoded_string'
        }
      }
    }
  }
};
