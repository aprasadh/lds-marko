/* global test */
const {expect} = require('chai');

test('lds-input Basic', function (context) {
  const output = context.render({
    label: "First Name"
  });
  
  expect(output.$('label','.slds-form-element').text()).to.be.equal("First Name");

});