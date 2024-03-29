export const CreateExpenseReq = {
  type: 'object',
  properties: {
    amount: {
      type: 'string',
      example: '200 EUR'
    },
    date: {
      type: 'string',
      format: 'date-time'
    },
    reason: {
      type: 'string',
      example: 'Visit mum'
    }
  }
};

export const getOneExpenseReq = {
  type: 'object',
  properties: {
    expenseId: {
      type: 'string',
      format: 'uuid',
    }
  }
};

export const CreateExpenseRes = {
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
        userId: {
          type: 'string',
          format: 'uuid',
        },
        amount: {
          type: 'string',
          example: '200 EUR'
        },
        date: {
          type: 'string',
          format: 'date-time'
        },
        reason: {
          type: 'string',
          example: 'Visit mum'
        },
        createdAt: {
          type: 'string',
          format: 'date-time'
        },
        updatedAt: {
          type: 'string',
          format: 'date-time'
        }
      }
    }
  }
};

export const getAllExpensesRes = {
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
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid',
          },
          userId: {
            type: 'string',
            format: 'uuid',
          },
          amount: {
            type: 'string',
            example: '200 EUR'
          },
          date: {
            type: 'string',
            format: 'date-time'
          },
          reason: {
            type: 'string',
            example: 'Visit mum'
          },
          createdAt: {
            type: 'string',
            format: 'date-time'
          },
          updatedAt: {
            type: 'string',
            format: 'date-time'
          }
        }
      }
    }
  }
};
