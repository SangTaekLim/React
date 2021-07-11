import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  //input 수정
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setForm(
        produce(form, draft => {
          draft[name] = value;
        })
      );
    },
    [form]
  );


  //form 등록

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      //array에 새 항목 등록
      setData(
        produce(data, draft => {
          draft.array.push(info);
        })
      );


      // form 초기화
      setForm({
        name: '',
        username: ''
      });

      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  // 항목을 삭제

  const onRemove = useCallback(
    id => {
      setData(
        produce(data, draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      );
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        {data.array.map(info => (
          <li key={info.id} onClick={() => onRemove(info.id)}>
            {info.username} ({info.name})
          </li>
        ))}
      </div>


    </div>
  );
}

export default App;
