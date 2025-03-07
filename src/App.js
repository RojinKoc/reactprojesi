import './App.css';

function App() {
  let a = 15;
  const firstName = "Rojin";
  let sonuc = true;
  let isimler =[
    "Ali",
    "Ayşe",
    "Fatma",
    "Veli"
  ]

  return (
    <main>
      <h1>DENEME</h1>
      <p>a değişkeninin değeri: {a} </p>
      <p> Müşterinin adı : {firstName} </p>
      {sonuc ? <p> Doğru!</p> : <p>Yanlış!</p>}
      
      {
        isimler.map((isim,index) =>(
          <div style={{
            backgroundColor: 'orange',
            border: '1px solid black'
          }} key={index}> 
            {isim}
          </div>
        ))
      }


    </main>
  );
}

export default App;
