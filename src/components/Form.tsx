import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { FormProps } from '../types/types';
import OperatorElement from './OperatorElement';

const Form: React.FC<FormProps> = ({ data, goHome }) => {

  const [textSubmitButton, setTextSubmitButton] = useState('Пополнить');
  const [disabledBtn, setDisabledBtn] = useState(false)
  const [isOpened, setIsOpened] = useState(false);
  const [apiResult, setApiResult] = useState({ text: '', logo: '' })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabledBtn(true)
    setTextSubmitButton("Пополнение...")
    const result = Math.floor(Math.random() * 2); // Получаем ответ от сервера либо удачный (1) либо нет (0)
    if (!result) {
      setApiResult({
        text: 'Неудачно',
        logo: './images/no_icon.svg'
      })
      setTimeout(() => { setIsOpened(true) }, 1000) // здесь и ниже искусственная задержка
      setTimeout(() => {
        setIsOpened(false);
        setDisabledBtn(false)
        setTextSubmitButton('Пополнить');
      }, 1700)
    } else {
      setApiResult({
        text: 'Успешно',
        logo: './images/yes_icon.svg'
      })
      setTimeout(() => {
        setIsOpened(true)
        setDisabledBtn(false)
      }, 1000)
      setTimeout(() => {
        setIsOpened(true)
        goHome()
      }, 1700)
    }
  }

  return (
    <>
      <div className={`popup ${isOpened ? 'opened' : ''}`}>
        <div className="popup__container">
          <img src={apiResult.logo} alt="icon" className="resultIcon" />
          <p className="subtitle">{apiResult.text}</p>
        </div>
      </div>
      <h1 className="title">Введите данные</h1>
      <OperatorElement data={data}/>
      <form onSubmit={onSubmit} action="#" className="form">
        <IMaskInput className="input"
          required
          mask={"{+7}(000)000-00-00"}
          unmask={true}
          minLength={16}
          placeholder='Номер телефона'
        />
        <IMaskInput className="input"
          required
          mask={Number}
          unmask={true}
          min={1}
          max={1000}
          thousandsSeparator=' '
          placeholder='Сумма (от 1 до 1000руб)'
        />
        <button disabled={disabledBtn} type="submit" className='button submit' name='submitButton'>{textSubmitButton}</button>
        <button onClick={() => goHome()} className='button backButton'>Назад</button>
      </form>
    </>
  );
}

export default Form;