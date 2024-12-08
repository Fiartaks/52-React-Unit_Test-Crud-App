import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import App from "./App";
import userEvent from "@testing-library/user-event";

const multiple = (a,b,c) => {
    return a * b * c;
};


//test = it yapabiliyoruz
describe('Fonksiyon Testleri',()=>{

    test('Fonksiyon calisiyor mu?', ()=>{
        expect(multiple(10,2,3)).toBe(60)
    })
})

it('Uygulama dogru sekilde calisyor mu?',async ()=>{

    const user = userEvent.setup()
    render(<App />)

    //gerekli elemanalari cagir
    const nameInp = screen.getByLabelText('isim')
    const mailInp = screen.getByLabelText('Email')
    const ageInp = screen.getByLabelText('Yas')

    const sendBtn =screen.getByRole('button', {name:'Kullanici Ekle'})


    //1) inputlari doldur
    await user.type(nameInp, 'Alparslann')
    await user.type(mailInp, 'alparslann@gmail.com')
    await user.type(ageInp, '2')

    //2)kullaniciekle butonunna tikla
    await user.click(sendBtn)


    //3)inputlara girilen verilere uygun tablo hucreleri ekrana basiliyior mu

    screen.getByRole('cell',{name: 'Alparslann'})
    screen.getByRole('cell',{name: 'alparslann@gmail.com'})
    screen.getByRole('cell',{name: '1'})


})