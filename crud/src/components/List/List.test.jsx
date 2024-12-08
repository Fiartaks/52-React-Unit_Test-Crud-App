import {render, screen, within} from '@testing-library/react'
import List from '.'

const testUsers = [
    {
      name:'Alparslan',
      mail:'alpokereta@gmail.com',
      age:2,
    },
    {
      name:'Feride',
      mail:'fiartaks@gmail.com',
      age:1,
    },
    {
        name:'Ali',
        mail:'fiartakss@gmail.com',
        age:7,
      },
  ]

it('Gonderilen her kullanici icin tablo satiri basilir', () => {
    render(<List users={testUsers} />)

  //table body alanini sec
  const body = screen.getByTestId('table-body')


//body kismindaki butun satirlari sec- belirli bir kapsaiyici icindeki elemana within
const rows = within(body).getAllByRole('row')

//satir sayisi users diziosindeki eleman sayisina esit mi?

expect(rows).toHaveLength(testUsers.length)


})



it('her bir kullanici icin isim email yas hucreleri bulunur', ()=>{
    render(<List users={testUsers} />)

    //dizideki her bir kullaniciicin ekrana kullanicinin degerlerini iceren tablo hucresi basiliyor mu? 
    for(const user of testUsers){
        //kullanicinin isminin iceren tablo hucresi
        screen.getByRole('cell', {name:user.name})

        //kullanicjnin mailini iceren tablo hucresi
        screen.getByRole('cell', {name:user.mail})

        //kullaninin yasini iceren tablo hucresi
        screen.getByRole('cell', {name:user.age})

    }

    })
