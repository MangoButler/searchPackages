import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const RepositoriesList: React.FC = () => {
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const [term, setTerm] = useState('');
  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTerm(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={inputChangeHandler} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!loading && !error && (
        <ul>
          {data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
