import { FormEvent, useState } from "react";
import InputMask from 'react-input-mask';
import api from "../../libs/api";
import * as S from "./styles";

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [telephone, setTelephone] = useState('');

  async function handleSubmit(event : FormEvent) {
    event.preventDefault();

    if(!name || !email || !nascimento || !telephone) {
      alert('Preencha todos os campos');
    } else {
      await api.post('/user', {
        name,
        email,
        nascimento,
        telephone
      })

      alert('Cadastro realizado com sucesso! Atualize a página para visualizar os dados.');
    }  
  }

  return (
    <S.Container>
      <h1>CADASTRO</h1>

      <form>
        <div>
          <label htmlFor="">Nome</label>
          <input type="text" name="name" id="name-input" autoComplete="off" onChange={e => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email-input" autoComplete="off" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Data de Nascimento</label>
          <input type="date" name="birthday" id="birthday-input" autoComplete="off" onChange={e => setNascimento(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Telefone</label>
          <InputMask mask={"(99) 9 9999-9999"} onChange={e => setTelephone(e.target.value)}/>
        </div>
      </form>

      <button onClick={handleSubmit}>CADASTRAR</button>
    </S.Container>
  );
}
