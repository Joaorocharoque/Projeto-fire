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
    <br></br> <br></br> <br></br>
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
              onClick={() => requestSort('tipo')}
              className={getClassNamesFor('tipo')}
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
            <td>{item.data}</td>
            <td>{item.tipo}</td>
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
          { id: 1, name: 'Carolea',    data: '2021-08-16',      tipo: 'violet2' }, 
          { id: 2, name: 'BrownsICE',  data: '2021-08-15',      tipo: 'olive' },
          { id: 3, name: 'Smaug',      data: '2021-08-23',      tipo: 'Fogo' },
          { id: 4, name: 'Gorynych',   data: '2021-08-23',      tipo: 'Terra' },
          { id: 5, name: 'Draco',      data: '2021-08-29',      tipo: 'Vento COLDER' },
          { id: 6, name: 'Caçador04 ', data: '2021-08-24',      tipo: 'Revoltadão' },
          { id: 7, name: 'Dagonyy',    data: '2021-08-28',      tipo: 'Revoltado' },
          { id: 8, name: 'New Frost',  data: '2021-06-16',      tipo: 'Ice' },
          { id: 9, name: 'Dino',       data: '2021-09-09',      tipo: 'Da silva sauro' },
          { id: 10, name: 'Um novo dragãozinho',    data: '2021-07-14',      tipo: 'fofo e verde' },
          { id: 11, name: 'Batatão',    data: '2021-07-18',      tipo: 'fritão' },
          { id: 12, name: 'Tiamat',    data: '2021-09-04',      tipo: 'Deus' },
          
        ]}
      />
    </div>
  );
}