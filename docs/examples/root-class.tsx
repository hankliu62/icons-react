import * as React from 'react';
import {
  AntDesignOutlined, DashboardOutlined, SmileOutlined,
  SyncOutlined, TwitterOutlined, LoadingOutlined,
  HomeOutlined, SettingFilled, createFromIconfontCN,
  IconProvider,
} from '@hankliu/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const Basic = () => (
  <IconProvider value={{rootClassName: 'hashCls'}}>
    <HomeOutlined />
    <SettingFilled />
    <IconFont type="icon-tuichu" />
  </IconProvider>
);

export default Basic;
