import React from 'react';
import {cleanup} from '@testing-library/react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {TestZone} from './App';

configure({adapter: new Adapter()});

let element, setUp;
const Icon = () => {
  return <div>icon</div>;
};

afterEach(cleanup);

describe('TestZone', () => {
  const msg1 = 'msg1';
  const msg2 = 'msg2';
  const msg3 = 'msg3';

  beforeEach(() => {
    setUp = props => {
      return mount(<TestZone {...props} />);
    };
  });

  it('will render the attention zone', () => {
    element = setUp({
      Icon: Icon,
      msg1: msg1,
      msg2: msg2,
      msg3: msg3,
      getRootProps: () => {
        return {id: 'rootId'};
      },
      getInputProps: () => {
        return {id: 'inputId'};
      }
    });

    expect(element.find(TestZone).exists()).toEqual(true);
    expect(element.find(TestZone).text()).toEqual('iconmsg1msg2msg3');
  });

  it('will render with message', () => {
    element = setUp({
      Icon: Icon,
      attentionMsg: null,
      actionMsg: null,
      fileTypeMsg: null,
      getRootProps: () => {
        return {id: 'rootId'};
      },
      getInputProps: () => {
        return {id: 'inputId'};
      }
    });

    expect(element.find(TestZone).text()).toEqual('icon');
  });

  it('will render with attention message only', () => {
    element = setUp({
      Icon: Icon,
      msg1: '',
      msg2: '',
      msg3: msg3,
      getRootProps: () => {
        return {id: 'rootId'};
      },
      getInputProps: () => {
        return {id: 'inputId'};
      }
    });
    expect(element.find(TestZone).text()).toEqual('iconmsg3');
  });

  /*
  it('will render an error', () => {
    const element = setUp({
      name: 'inputName',
      hasError: true
    });

    expect(element.find(TextArea).prop('hasError')).toEqual(true);
    expect(element.find('.error').exists()).toEqual(true);
  });
  */
});
