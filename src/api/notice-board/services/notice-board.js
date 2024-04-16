'use strict';

/**
 * notice-board service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::notice-board.notice-board');
