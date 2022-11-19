import React, { useState } from 'react';
import TabButton from '../../ui/tabs-button/tabs-button';
import { StyledUl } from './styled';

function Tabs({ content, children }) {
  const [activeTab, setActiveTab] = useState(0);
  const ComponentChildren = React.Children.toArray(children)[activeTab];

  const changeTab = (index) => () => {
    setActiveTab(index);
  };

  return (
    <>
      <StyledUl>
        {content.map((title, index) => {
          return (
            <li key={title}>
              <TabButton type="button" onClick={changeTab(index)} active={activeTab === index}>
                {title}
              </TabButton>
            </li>
          );
        })}
      </StyledUl>
      {ComponentChildren}
    </>
  );
}

export default Tabs;
