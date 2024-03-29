export const switchResponse = (res) => {
  switch (res.status) {
    case 400: {
      let error = '';
      Object.values(res.data.payload).map((item) => {
        error += `${item}; `;
        return error;
      });
      return error;
    }
    case 401: {
      return res.data.message;
    }
    case 403: {
      return 'You must login to continue';
    }
    case 409: {
      return res.data.message;
    }
    default: {
      return res.data.message;
    }
  }
}
;
