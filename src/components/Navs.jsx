import { Link } from 'react-router-dom';

const LINKS = [
  {
    text: 'Home Page',
    to: '/',
  },
  {
    text: 'Starred Page',
    to: '/starred',
  },
];

const Navs = () => {
  return (
    <div>
      {LINKS.map(item => (
        <li key={item.to}>
          <Link to={item.to}>{item.text}</Link>
        </li>
      ))}
    </div>
  );
};

export default Navs;
