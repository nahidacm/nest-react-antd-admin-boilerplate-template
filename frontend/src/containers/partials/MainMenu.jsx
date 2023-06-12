import { MailOutlined, SettingOutlined, SolutionOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const items = [
    {
        key: "account",
        label: "Account",
        icon: <SolutionOutlined/>,
        children: [
            {
                key: "list-account",
                label: <Link to={"account/list"}>List Account</Link>
            },
            {
                key: "create-account",
                label: <Link to={"account/create"}>Create Account</Link>
            },
        ]
    },
    {
      key: "email-validation",
      label: <Link to={"email/validation"}>Email Validation</Link>
  },
]


const MainMenu = () => {

  return (
    <Menu
      mode="inline"
      items={items}
    />
  );
};
export default MainMenu;