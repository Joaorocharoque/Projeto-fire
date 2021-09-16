import React from 'react';
import '../styles.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);
 
  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <>
    <div><h1> Tabela do Dragão</h1></div>
    <br></br><br></br><br></br> <br></br><br></br> <br></br> <br></br>
   <table>
      <thead>
        <br></br>
        <tr>
          <th>
           
          <button
              type="button"
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
            Nome
            </button>   
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('date')}
              className={getClassNamesFor('date')}
            >
              Data de criação
            </button>
          </th>

          <th>
            <button
              type="button"
              onClick={() => requestSort('password')}
              className={getClassNamesFor('password')}
            >
              Tipo
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.date} value={Date}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </tbody>
    </table></>
  );
};

export default function TabelaSec() {
  return (
    <div align="center" className="App">
      <ProductTable
        products={[
          { id: 1, name: 'Carolea', date: 20210816,  password: 324574 },
          { id: 2, name: 'BrownsICE',  data: 456654,  password: 324574 },
          { id: 3, name: 'Smaug',  data: 456654,  password: 324574 },
          { id: 4, name: 'Gorynych',  data: 456654,   password: 324574 },
          { id: 5, name: 'Draco',  data: 456654,  password: 324574 },
          { id: 6, name: 'Caçador04 ',  data: 456654, password: 324574 },
          { id: 7, name: 'Dagonyy',  data: 456654,   password: 324574  },
          
        ]}
      />
    </div>
  );
}