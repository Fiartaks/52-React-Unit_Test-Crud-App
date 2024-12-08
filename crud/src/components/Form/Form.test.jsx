import { render, screen } from "@testing-library/react"
import Form from "."
import userEvent from '@testing-library/user-event'
import {expect} from 'vitest'

 test('Formu gonderince addUSer dogru parametrelerle calisiyoir mu?', async() => {
//Fonksiyonu mock lama(taklit fonksiyonu olusturma)
//Kac kez cagrildi
//orjinal fonksiyonu taklot eder.

const mockFn = vi.fn()

//user kurulumu yap
const user = userEvent.setup()

//bileseni ekrana bas
   render(<Form addUser={mockFn} />)

   //1)gerekli elamani cagir
     const nameInp =  screen.getByLabelText('isim')
     const mailInp = screen.getByLabelText('Email')
     const ageInp = screen.getByPlaceholderText('ör:1')
     const sendBtn = screen.getByRole('button') 

   //2)inputlari doldur
   //=> birinci yol isim inputunu doldur
   await user.click(nameInp)
   await user.keyboard('firat')

   //=>ikinci yol mail inputunnu doldur
   await user.type(mailInp, 'firat@gmail.com')

   //=> ucuncu yol age inputunu doldur
   await user.type(ageInp, '1')
   

   //3)gonder butonunu tikla
   await user.click(sendBtn)

   
   //4)Add user paramertrelerle cagrildi mi?
   expect(mockFn).toHaveBeenCalledWith({
    name:'firat',
    mail:'firat@gmail.com',
    age:'1',
   })
   
   //5)Inputlar temizlendi mi?

 expect(nameInp.value).toBe('')
 expect(mailInp.value).toBe('')
 expect(ageInp.value).toBe('')


 })
 