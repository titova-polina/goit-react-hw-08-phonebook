import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/tasks/operation';
import { getError, getIsLoading } from 'redux/tasks/selectors';

export default function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const ref = useRef(false);

  useEffect(() => {
    !ref.current && dispatch(fetchContacts());
    ref.current = true;
  }, [dispatch]);
  return (
    <>
      <section>
        <h2>Add Contact</h2>
        <Form />
        <h3>Contacts</h3>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <Contacts />
      </section>
    </>
  );
}
