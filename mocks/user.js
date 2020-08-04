import { sleep } from '@/shared/functions';

const mockUser = {
  name: 'Some Name',
  email: 'some@email.com',
  image:
    'https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/19339625881548233621-512.png',
};

export const getMockUser = async () => {
  await sleep(500);
  return Object.assign({}, mockUser);
};
