import { Input, AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "../../styles/AppSearch.css"

const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: 'right',
      }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);


const renderItem = (title, count) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});


const options = [
  {
    label: renderTitle('Vehicles'),
    options: [renderItem('#QE19479', 10000), renderItem('#FT33256', 10600)],
  },
  {
    label: renderTitle('Customers'),
    options: [renderItem('Maria Adams', ''), renderItem('Macy Lin', '')],
  }
];


const AppSearch = () => (
  <div className="AppSearch-Wrapper">
    <AutoComplete
    className="AutoComplete-Box"
    dropdownClassName="certain-category-search-dropdown"
    //dropdownMatchSelectWidth={500}
    options={options}
  >
    <Input.Search placeholder="Search COMM #, customers" />
  </AutoComplete>
  </div>
  
);


export default AppSearch;