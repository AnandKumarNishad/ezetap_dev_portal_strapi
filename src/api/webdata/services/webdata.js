'use strict';

/**
 * webdata service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::webdata.webdata');
