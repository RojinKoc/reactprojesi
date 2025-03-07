import './App.css';

function App() {
  let a = 15;
  const firstName = "Rojin";
  let sonuc = true;

  return (
    <main>
      <h1>DENEME</h1>
      <p>a değişkeninin değeri: {a} </p>
      <p> Müşterinin adı : {firstName} </p>
      {sonuc ? <p> Doğru!</p> : <p>Yanlış!</p>}
    </main>
  );
}

export default App;
