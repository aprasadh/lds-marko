var myComponent = require('./hello.marko');
//require("!url-loader!@salesforce-ux/design-system/assets/fonts/webfonts/SalesforceSans-Italic.woff2");

//Load the SVG symbols
require("!url-loader?name=static/assets/icons/action-sprite/svg/[name].[ext]&limit=10!@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg");
require("!url-loader?name=static/assets/icons/custom-sprite/svg/[name].[ext]&limit=10!@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg");
require("!url-loader?name=static/assets/icons/doctype-sprite/svg/[name].[ext]&limit=10!@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg");
require("!url-loader?name=static/assets/icons/standard-sprite/svg/[name].[ext]&limit=10!@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg");
require("!url-loader?name=static/assets/icons/utility-sprite/svg/[name].[ext]&limit=10!@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg");

//Load the main stylesheet
require("!style-loader!css-loader!@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css");
myComponent.renderSync({ name:'Marko' }).appendTo(document.body);