import * as React from 'react';
import { AlertTwoTone, SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@hankliu/icons';

export default () => (
  <div className="icons-list">
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <HeartTwoTone />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
    <AlertTwoTone twoToneColor={['#52c41a', 'transparent']} />
  </div>
);
