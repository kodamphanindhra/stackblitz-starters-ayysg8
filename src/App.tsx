import { FC, useEffect, useState } from 'react';
import './style.css';
const countries = [
  { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai'] },
  { name: 'Pak', value: 'PK', cities: ['Lahore', 'Karachi'] },
  { name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong'] },
];

export const App: FC<{ name: string }> = ({ name }) => {
  const [c, setC] = useState('');
  useEffect(() => {}, [c]);
  return (
    <>
      <div>
        <select
          value={c}
          onChange={(e) => {
            console.log(e.target.value);
            setC(e.target.value);
          }}
        >
          {countries.map((country, index) => {
            return <option value={index}>{country.name}</option>;
          })}
        </select>
      </div>
      <br />
      <div>
        <select>
          {countries[c]?.cities.map((city, index) => {
            return <option value={city.name}>{city}</option>;
          })}
        </select>
      </div>
    </>
  );
};
