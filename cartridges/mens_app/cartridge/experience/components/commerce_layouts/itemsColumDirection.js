"use strict";

var Template = require("dw/util/Template");
var HashMap = require("dw/util/HashMap");
var PageRenderHelper = require("*/cartridge/experience/utilities/PageRenderHelper.js");

/**
 * Render logic for storefront.banner.carousel layout.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
  var model = modelIn || new HashMap();
  var content = context.content;

  model.regions = PageRenderHelper.getRegionModelRegistry(context.component);
  model.regions.items.setClassName(
    "d-flex justify-content-around align-items-center " +
      (content.scroll ? "scroll" : "")
  );

  return new Template(
    "experience/components/commerce_layouts/itemsColumDirection"
  ).render(model).text;
};
