/* global test */
const {expect} = require('chai');
const cheerio = require('cheerio');

test('lds-input Basic', function (context) {
  let { component } = context;

  let subject = component.renderToString({
    label: "First Name"
  });

  var $ = cheerio.load(subject);

  expect($('label','.slds-form-element').text()).to.be.equal("First Name");
});