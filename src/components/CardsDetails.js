import React, { useState, useRef } from "react";

const CardsDetails = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">
          Send your love to your favourite influencer to become a real fan
        </h2>
        <section className="container mt-3 d-flex justify-content-center flex-sm-column">
          <form>
            <div className="mb-3">
              <label>$</label>
              <input
                type="number"
                style={{ width: "22rem" }}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                ref={ref1}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Your name(optional)"
                style={{ width: "22rem" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={ref2}
              />
            </div>
            <textarea
              name="area"
              cols="30"
              rows="10"
              placeholder="Say something nice(optional)"
              style={{ width: "22rem" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              ref={ref}
            ></textarea>
          </form>
        </section>
        <button
          type="submit"
          class="btn btn-dark"
          onClick={() => {
            console.log(name);
            console.log(amount);
            console.log(message);
            ref.current.value = "";
            ref1.current.value = "";
            ref2.current.value = "";
          }}
        >
          Support
        </button>
      </div>
    </>
  );
};

export default CardsDetails;
