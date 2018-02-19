const expect = require('chai').expect;
const cheerio = require('cheerio');

test('color-picker-selection color', function (context) {
  const output = context.render({
    label: "First Name"
  });

  let { component } = context;

  let subject = component.renderToString({
    label: "First Name"
  });

  var $ = cheerio.load(subject);

  expect($('label','.slds-form-element').text()).to.be.equal("First Name");
  //expect(output.$('label','.slds-form-element').text()).to.be.equal("First Name");

});