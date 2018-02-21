/* global test */
const {expect, assert} = require('chai');

test('Blank Check', function (context) {
  const output = context.render({});
  
  expect(output.$('div.slds-form-element').children().length).to.be.equal(2);
  expect(output.$('div.slds-form-element').children('div').length).to.be.equal(1);
  expect(output.$('div.slds-form-element').children('div').hasClass('slds-form-element__control')).to.be.equal(true);
  expect(output.$('div.slds-form-element').children('label').length).to.be.equal(1);
  expect(output.$('div.slds-form-element').children('label').hasClass('slds-form-element__label')).to.be.equal(true);
  expect(output.$('div.slds-form-element').children('label').attr('for').trim()).to.not.be.empty;
  expect(output.$('div.slds-form-element').children('label').text()).to.be.equal('');

  expect(output.$('div.slds-form-element').children('div').children().length).to.be.equal(1);
  expect(output.$('div.slds-form-element').children('div').children('input').length).to.be.equal(1);
  expect(output.$('div.slds-form-element').children('div').children('input').hasClass('slds-input')).to.be.equal(true);
  expect(output.$('div.slds-form-element').children('div').children('input').attr('type')).to.be.equal('text');
  expect(output.$('div.slds-form-element').children('div').children('input').attr('placeholder')).to.be.equal('');
  expect(output.$('div.slds-form-element').children('div').children('input').attr('id').trim()).to.not.be.empty;
  const forValue = output.$('div.slds-form-element').children('label').attr('for');
  expect(output.$('div.slds-form-element').children('div').children('input').attr('id')).to.be.equal(forValue);
  expect(output.$('div.slds-form-element').children('div').children('input').val()).to.be.equal('');
});