import request from '@/utils/request';

export async function submitMessage(params) {
  return request('/api/home/message', {
    method: 'POST',
    data: params,
  });
}