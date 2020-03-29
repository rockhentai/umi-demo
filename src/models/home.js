import { submitMessage } from '@/services/home';
import { message } from 'antd';

const HomeModel = {
  namespace: 'home',

  state: {},

  effects: {
    *sendMessage({ payload, callback }, { call }) {
      const response = yield call(submitMessage, payload);
      if (response.ret === 0) {
        message.success('success');
        if (callback) callback();
      } else {
        message.error(response.msg);
      }
    }
  },
}

export default HomeModel;