import { ThemeType } from '@hankliu/icons-svg/lib/types';
import { Select } from '@hankliu/hankliu-ui';
import * as React from 'react';
import styled from 'styled-components';
import * as HankLiuIcons from '@hankliu/icons/lib/icons';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 80vw;
  margin: auto;
`;

const Card = styled.div`
  height: 90px;
  margin: 12px 0 16px;
  width: 20%;
  text-align: center;
`;

const NameDescription = styled.p`
  display: block;
  text-align: center;
  transform: scale(0.83);
  font-family: 'Lucida Console', Consolas;
  white-space: nowrap;
`;

const allIcons: {
  [key: string]: any;
} = HankLiuIcons;

const AllIconDemo = () => {
  const [currentTheme, setCurrentTheme] = React.useState('Outlined');

  const handleSelectChange = React.useCallback((value: any) => {
    setCurrentTheme(value as ThemeType);
  }, []);

  const visibleIconList = React.useMemo(
    () => Object.keys(allIcons).filter(iconName => iconName.includes(currentTheme)),
    [currentTheme],
  );

  return (
    <div style={{ color: '#555' }}>
      <h1 style={{ textAlign: 'center' }}>All Icons</h1>
      <div style={{ textAlign: 'center' }}>
        <Select
          name="theme-select"
          style={{ width: "120px", }}
          value={currentTheme}
          onChange={handleSelectChange}
        >
          <Select.Option value="Filled">Filled</Select.Option>
          <Select.Option value="Outlined">Outlined</Select.Option>
          <Select.Option value="TwoTone">Two-Tone</Select.Option>
          <Select.Option value="Icon">Icon</Select.Option>
        </Select>
      </div>
      <Container>
        {
          visibleIconList.map(iconName => {
            const Component = allIcons[iconName];
            return (
              <Card key={iconName}>
                <Component style={{ fontSize: '24px' }} />
                <NameDescription>{iconName}</NameDescription>
              </Card>
            );
          })
        }
      </Container>
    </div>
  );
}

export default AllIconDemo;
