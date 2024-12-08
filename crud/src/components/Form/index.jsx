const Form = ({ addUser }) => {


const handleSubmit =(e)=>{
   e.preventDefault()

   //formdaki inputlardan obje olusturma
   const formData =new FormData(e.target)
   const newUser = Object.fromEntries(formData.entries())

   console.log(newUser)

   //kullaniciyi tabloya ekle
   addUser(newUser)

   //formu sifirla
   e.target.reset()
}

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-4">
        <label htmlFor="name">isim</label>
        <input id="name" type="text" name="name" className="form-control" placeholder='ör:Feride' />
      </div>

      <div className="my-4">
        <label htmlFor="mail">Email</label>
        <input id="mail" type="text" name="mail" className="form-control" placeholder='ör:feride@gmail.com' />
      </div>

      <div className="my-4">
        <label htmlFor="age">Yas</label>
        <input id="age" type="number" name="age" className="form-control" placeholder='ör:1' />
      </div>
      <button>Kullanici Ekle</button>

    </form>
  );
};
export default Form;
