const component = require('lds-input/index.marko');
describe('component', () => {
    it('should have a renderToString function', () => {
      expect(component.renderToString()).toBeDefined();
    });

    it('should render correctly', () => {
        component.renderToString({
          label: 'First Name',
          placeholder: 'first name'
        }, (err, html) => {
          expect(html).toMatchSnapshot();
        });
      });
});
