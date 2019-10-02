const DbServices = {
  /**
   * Database create service funcion
   * @param {Object} model - Defined model
   * @param {Object} data - Data to be created
   * @returns {Promise} - Promise response
   */
  create(model, data) {
    return model.create(data);
  },

  /**
   * @param {object} model model /table
   * @param {object} options query options
   * @returns {Promise} Promise resolved or rejected
   * @description get one row by the options been passed to it
   */
  getByOptions(model, options) {
    return model.findOne(options);
  },

  /**
   * @param {object} model model /table
   * @param {object} options query options
   * @returns {Promise} Promise resolved or rejected
   * @description gets all items that fit the criteria and returns rows and count
   */
  getAllRecord(model, options) {
    return model.findAll(options);
  },
};

export default DbServices;
