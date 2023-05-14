import React from 'react';
import style from './Form.module.css';
import Button1 from '../../assests/button1';
import Button2 from '../../assests/button2';

export default function Form() {

  const price = [
    {
      id : 1 ,
      offerExpired : true,
      name : "first",
      text : "12 Months Subscription",
      total_rs : 99,
      perMonth_rs : 8

    },
    {
      id : 2 ,
      offerExpired : false,
      name : "second",
      text : "12 Months Subscription",
      total_rs : 179,
      perMonth_rs : 15

    },
    {
      id : 1 ,
      offerExpired : false,
      name : "third",
      text : "6 Months Subscription",
      total_rs : 149,
      perMonth_rs : 25

    },
    {
      id : 1 ,
      offerExpired : false,
      name : "four",
      text : "3 Months Subscription",
      total_rs : 99,
      perMonth_rs : 33
    },
  ]


  return (
    <div className={style.container}>
      <div className={style.head}>
        <div className={style.button}>
          <img src={Button1} alt="button1" />
          <span>Sign Up</span>
        </div>

        <div className={style.button}>
          <img src={Button2} alt="button2" />
          <span>Subscribe</span>
        </div>
      </div>
      <p>Select your subcription plan</p>
      
        {price.map((el,ind)=><div id={el.name} className={style.inputContainer} className={el.offerExpired ? style.offerExpire : ""}>
          <input id={el.id} type="radio" value={el.total_rs} name="priceOption"/>
          <label htmlFor={el.id}>
            <span>
            {el.text}
            </span>
            <span>
            {el.total_rs}
            </span>
            <span>
            {el.perMonth_rs}
            </span>
            </label>
        </div>)}
      
    </div>
  );
}
