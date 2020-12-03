import { expect } from 'chai';
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallow, configure } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

chai.should();
chai.use(sinonChai);

global.expect = expect
global.shallow = shallow
global.sinon = sinon