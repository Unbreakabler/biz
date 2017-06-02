import { <%= classifiedModuleName %>Controller } from './<%= dasherizedModuleName %>.controller';

describe('<%= classifiedModuleName %>Module', () => {
  let <%= camelizedModuleName %>Controller: <%= classifiedModuleName %>Controller;

  beforeEach(() => {
    <%= camelizedModuleName %>Controller = new <%= classifiedModuleName %>Controller();
  });

  it('should create an instance', () => {
    expect(<%= camelizedModuleName %>Controller).toBeTruthy();
  });
});
