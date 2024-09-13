'use strict';

/**
 * book-ticket service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-ticket.book-ticket');
