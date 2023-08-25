"use strict";

var Template = require("dw/util/Template");
var HashMap = require("dw/util/HashMap");
var PageRenderHelper = require("*/cartridge/experience/utilities/PageRenderHelper.js");
var ImageTransformation = require("*/cartridge/experience/utilities/ImageTransformation.js");

/**
 * Render logic for the storefront.1 Row x 2 Col (Mobile) 1 Row x 2 Col (Desktop) layout
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
  var model = modelIn || new HashMap();
  var content = context.content;

  model.image = ImageTransformation.getScaledImage(
    content.image
  );

  model.heading = content.heading;
  model.description = content.description;
  model.buttonText = content.buttonText;
  model.buttonUrl = content.buttonUrl;

  return new Template(
    "experience/components/commerce_layouts/madeYouExtentSection"
  ).render(model).text;
};
