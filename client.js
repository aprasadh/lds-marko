var myComponent = require('./hello.marko');

//Load the SVG symbols
require("!url-loader?name=static/assets/icons/action-sprite/svg/[name].[ext]&limit=10!@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg");
require("!url-loader?name=static/assets/icons/custom-sprite/svg/[name].[ext]&limit=10!@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg");
require("!url-loader?name=static/assets/icons/doctype-sprite/svg/[name].[ext]&limit=10!@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg");
require("!url-loader?name=static/assets/icons/standard-sprite/svg/[name].[ext]&limit=10!@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg");
require("!url-loader?name=static/assets/icons/utility-sprite/svg/[name].[ext]&limit=10!@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg");

myComponent.renderSync({ name:'Marko' }).appendTo(document.body);