import logo from "./images/logo.svg";
import person from "./images/icon-person.svg";
import dolar from "./images/icon-dollar.svg";
import { useState } from "react";


export const App = () => {
  const [warn, setWarn] = useState("");

  const [people, setPeople] = useState(0);

  const [bill, setBill] = useState(0);

  const [percent, setPercent] = useState(0);

  const [tip, setTip] = useState(0);

  const [total, setTotal] = useState(0);

  const tips = [5, 10, 15, 25, 50];

  function ucret(e) {
    e.preventDefault();
    if ((e.target.id = "bill")) {
      setBill(e.target.value);
      // console.log(Math.round(Math.floor(e.target.value)))
    } else if ((e.target.id = "percent")) {
      setPercent(e.target.value);
    } else if ((e.target.id = "kaydır")) {
      setPeople(
        ...people,
        (people = people ? parseInt(people) : "0.00"),
        e.target.value
      );
    }
  }

  function prevent(e) {
    e.preventDefault();

    let odeme =
      e.target.id === "bill" ? parseFloat(e.target.value) : parseFloat(bill);
    let kisi =
      e.target.id === "kaydır" ? parseInt(e.target.value) : parseInt(people);
    let yuzde =
      e.target.id === "percent" ? parseInt(e.target.value) : parseInt(percent);

      let sonuc =
      e.target.id === "total" ? parseFloat(e.target.value) : parseFloat(total).toFixed(2);//0.00

    const per = odeme * (yuzde / 100);
    const tipAmount = (per / kisi).toFixed(2);
    setTip(tipAmount);

    const toplam = ((per + tipAmount) / 1).toFixed(2);
    setTotal(toplam);

    if(total===0 && tip===0){
      setTotal(sonuc)
      setTip(sonuc)
    }
  }
  const select = (e) => {
    console.log(e.target.id);
  };

  function number_of_people(e) {
    if ((e.target.id = "kaydır")) {
      setPeople(e.target.value);
      if (e.target.value > 0) {
        document.getElementById("kaydır").classList.remove("alert");
        setWarn("");
      } else {
        document.getElementById("kaydır").classList.add("alert");
        setWarn(" Cant be minus or zero");
      }
    }
  }

  const sıfırla = (e) => {

    
    setBill(0);
    setPercent(0);
    setPeople(0);

    if(total===0){
     const sonuc= !isNaN(total) ? total : '0.00'
      setTotal(sonuc)
    };

  };

  return (
    <form onSubmit={prevent}>
      <div class="sarmala">
        <div class="splitter">
          <img src={logo} class="people_icon yukarı" />
        </div>
        <div class="box">
          <div class="icindekiler">
            <div class="sol taraf">
              <div class="first_input">
                <p>Bill</p>
                <div class="bill_input">
                  <img src={dolar} class="people_icon yukarı" />
                  <input
                    type="text"
                    class="user_bill "
                    id="bill"
                    onChange={ucret}
                    value={bill}
                  />
                </div>
              </div>

              <div class="second-selection" id="SelectTip">
                <p>Select Tip %</p>
                <div className="boxes">
                  <div class="row1">
                    <button class="box1" id="5" type="button" onClick={select}>
                      <span>5%</span>
                    </button>
                    <button class="box2" id="10" type="button">
                      <span>10%</span>
                    </button>
                    <button class="box3" id="15" type="button">
                      <span>15%</span>
                    </button>
                  </div>
                  <div class="row2" id="25" type="button">
                    <button class="box1">
                      <span>25%</span>
                    </button>
                    <button class="box2" id="50" type="button">
                      <span>50%</span>
                    </button>
                    <div class="box3" type="button">
                      <span>
                        <input
                          type="text"
                          placeholder="Custom"
                          id="percent"
                          value={percent}
                          onChange={(e) => setPercent(e.target.value)}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="third-selection">
                <div className="yan">
                  <p>Number of People</p>
                  <p className="alert">{warn}</p>
                </div>
                <div class="people-input">
                  <img src={person} class="people_icon" />
                  <input
                    type="text"
                    class="user_bill kaydır"
                    id="kaydır"
                    onChange={number_of_people}
                    value={people}
                  />
                </div>
              </div>
            </div>

            <div class="sag taraf">
              <div class="box">
                <div class="first">
                  <div class="tip-amount" id="tip">
                    Tip Amount <span>/ person</span>
                  </div>
                  <div class="right-field">
                    <div class="increase" id="tip">
                      <img src={dolar} class="dolar" />
                      {tip}
                    </div>
                  </div>
                </div>
                <div class="second">
                  <div class="tip-amount">
                    Total <span>/ person</span>
                  </div>
                  <div class="right-field">
                    <div class="increase" id="total">
                      <img src={dolar} class="dolar" />
                      {total}
                    </div>
                  </div>
                </div>

                <div class="third">
                  <button id="reset" onClick={sıfırla}>
                    <span>RESET</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Eceeleyn</a>.
      </div>
    </form>
  );
};
