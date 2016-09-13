'use strict';

/**
 * Textarea Input Plugin
 *
 *
 * Simple textarea input type
 */
const validation = require('./lib/validation.js');

/**
 * Single Textarea Input Plugin
 * @module textareaInputPlugin
 */
module.exports = {
  name: 'Textarea',
  description: 'Simple textarea input type',
  validation: {
    textareaValidation: validation,
  },
  inputs: {
    textarea: {
      validation: {
        function: 'textareaValidation',
        on: 'blur',
      },
      type: 'textarea',
      label: 'Add your text',
      placeholder: 'Type something...',
    },
  },
  html: '<label for="{{textarea.id}}">{{textarea.label}}</label><textarea id="{{textarea.id}}" name="{{textarea.name}}" placeholder="{{textarea.placeholder}}" />{{textarea.value}}</textarea>',
};
