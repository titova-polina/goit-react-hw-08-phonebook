import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Label, Input } from './Filter.styled';
import { getFilter } from 'redux/tasks/selectors';
import { updateFilter } from 'redux/tasks/filter';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        value={value}
        placeholder="Type name..."
        onChange={evt => dispatch(updateFilter(evt.target.value))}
      />
    </Wrapper>
  );
};
