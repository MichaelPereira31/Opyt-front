"use client"
import api from "@/app/services/api";
import { useEffect, useState,} from "react";
import Modal from 'react-modal';
import { mask } from "remask";


export default function RegistrationForm(){
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [statusModal, setStatusModal] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [response, setResponse] = useState<number>();
  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => {
    const generateRandomNumbers = async () => {
      const randomNumbers = [
        Math.floor(Math.random() * 20) + 1,
        Math.floor(Math.random() * 20) + 1
      ];
      setNumbers(randomNumbers);
    };

    generateRandomNumbers();
  }, []);

  const cleanForm = () => {
    setName('')
    setEmail('')
    setPhone('')
    setCity('')
    setResponse(0)
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {

    if(numbers[0] + numbers[1] === response){
      await api.post('/client', {name, email, phone, city}).then(()=> {
        setStatusModal('O cadastro foi realizado com sucesso!')
        cleanForm()
      }).catch(err => {
        setStatusModal(err.response.data.message ?? 'Por favor, verifique se os valores informados estão corretos.')
      })
    } else {
      setStatusModal(`Verifique se a seguinte soma, ${numbers[0]} + ${numbers[1]}, é igual a ${response}`)
    }
    openModal()
  };

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal =() =>  {
    setIsOpen(false);
  }

  return (
  <>
    <form action="" method="post" className="flex flex-col mb-2 w-[80%]">
      <label htmlFor="name" className="text-[13px] px-2">Nome*</label>
      <input 
        type="text" 
        name="name"
        className="px-3 py-1
        rounded-2xl"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <label htmlFor="email" className="text-[13px] px-2">Email*</label>
      <input 
        type="text" 
        name="email"
        className="px-3 py-1
        rounded-2xl"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <label htmlFor="phone" className="text-[13px] px-2">Telefone WhatsApp (DDD + Numero)*</label>
      <input 
        type="phone" 
        name="phone"
        className="px-3 py-1
        rounded-2xl"
        value={phone}
        onChange={(e) => setPhone(mask(e.target.value, ['(99) 9999-9999','(99) 99999-9999']))}
      />
      
      <label htmlFor="city" className="text-[13px] px-2">Qual e a sua cidade*</label>
      <input 
        type="text" 
        name="city"
        className="px-3 py-1
        rounded-2xl"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      
      <label htmlFor="response" className="text-[13px] px-2">{numbers[0]} + {numbers[1]} = ?</label>
      <input 
        type="text" 
        name="response"
        className="px-3 py-1 rounded-2xl"
        value={response}
        onChange={(e) => setResponse(Number(e.target.value))}
      />
    </form>
    <div className="flex flex-col w-[60%]">
      <button type="button" className="bg-orange  rounded-3xl text-white mb-3 py-3" onClick={handleSubmit}>ME CADASTRAR</button>
    </div>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
       <div className="flex flex-col justify-center items-center">
        <p className="py-2 px-4 mb-2 text-xl text-center">{statusModal}</p>
        <button className="py-2 px-4 bg-red-500 rounded-3xl" onClick={closeModal}>Fechar</button>
       </div>
      </Modal>
  </>

  )
}