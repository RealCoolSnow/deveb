import React, { useState, useRef, useEffect } from "react";
import Button from "./button.js";
import MButton from "./MobileButton/MButton";
import SecondaryBtn from "./SecondaryBtn/SecondaryBtn";
import { useAppContext } from "../contexts/appcontext.js";

import { lgScreens, smScreens } from "../utils/contactData";

import movingLine from "../assets/light-line.svg";

import Thanks from "./Thanks/Thanks.js";
import MobileFooter from "./MobileFooter/MobileFooter.js";

const MLine = `url(${movingLine})`;
// const errMLine = `url(${errorMovingLine})`;

const Con = ({ conn }) => {
  const { isMobile } = useAppContext();

  const labelRef = useRef(null);
  
  const [con, setCon] = useState(conn);

  const [contactData, setContactData] = useState({
    needs: [],
    docs: [],
    budgets: [],
  });

  useEffect(() => {
    if (isMobile) {
      setContactData(smScreens);
    } else {
      setContactData(lgScreens);
    }

    return () => {};
  }, [isMobile]);

  const [showThanks, setShowThanks] = useState(false);

  // Form Data
  const [sendingForm, setSendingForm] = useState(false);
  const [formValid, setFormValid] = useState(false);

  // Inputs
  const [activeNeeds, setActiveNeeds] = useState([]);
  const [activeDocs, setActiveDocs] = useState([]);
  const [activeBudg, setActiveBudg] = useState(-1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [attachments, setAttachments] = useState([]);

  const [formErr, setFormErr] = useState({
    name: "",
    email: "",
  });

  const inputHandler = (e) => {
    if (e.target.name === "name") {
      setFormErr({
        ...formErr,
        name: "",
      });
    }

    if (e.target.name === "email") {
      setFormErr({
        ...formErr,
        email: "",
      });
    }

    const type = e.target.name;
    const newS = { ...form, [type]: e.target.value };
    console.log(newS);
    return setForm(newS);
  };

  const textAreaChange = (e) => {
    inputHandler(e);

    const textarea = e.target;

    textarea.style.height = "";
    textarea.style.height = Math.max(textarea.scrollHeight, 23) + "px";
  };

  const removeAttach = (idx) => {
    const newAttachments = attachments.filter((attach, index) => index !== idx);
    setAttachments(newAttachments);
  };

  useEffect(() => {
    // console.log('active needs changed')
    // console.log(activeNeeds)
  }, [activeNeeds])

  const toggleNeedDoc = (target, idx) => {
    // console.log(`changing ${target}.`)

    if (target === "need") {

      // console.log('before')
      // console.log(activeNeeds)

      const isNeedActive = activeNeeds.includes(idx);

      if (isNeedActive)
        setActiveNeeds(activeNeeds.filter((activeIdx) => activeIdx !== idx));
      else setActiveNeeds([...activeNeeds, idx]);

      // console.log('after')
      // console.log(activeNeeds)

    } else if (target === "doc") {
      const isDocActive = activeDocs.includes(idx);

      if (isDocActive)
        setActiveDocs(activeDocs.filter((activeIdx) => activeIdx !== idx));
      else setActiveDocs([...activeDocs, idx]);

    } else if (target === "budg") {
      if (activeBudg === idx) setActiveBudg(-1);
      else setActiveBudg(idx);
    }
  };

  const sendContactForm = async () => {
    console.log("sending contact form");

    setFormErr({
      name: "",
      email: "",
    });

    if (!checkFields(true)) {
      console.log(formErr);
      return;
    }

    setSendingForm(true);

    const ContactForm = {};

    ContactForm.name = form.name;
    ContactForm.email = form.email;

    if (form.message) ContactForm.message = form.message;

    if (con === false) {
      console.log("adding docs and needs and budget");

      const { needs, docs, budgets } = contactData;

      if (activeNeeds) {
        const needsArr = needs.filter((val, idx) => activeNeeds.includes(idx));
        ContactForm.needs = needsArr.join(" - ");
      }

      if (activeDocs) {
        const docsArr = docs.filter((val, idx) => activeDocs.includes(idx));
        ContactForm.docs = docsArr.join(" - ");
      }

      if (activeBudg) {
        ContactForm.budg = budgets[activeBudg];
      }
    }

    console.log(ContactForm);

    const attachs = new FormData();

    if (attachments) {
      attachments.forEach((attach) => {
        attachs.append("attachs", attach);
      });
    }

    let startServerIfSleep = await fetch(`https://amarc-api.herokuapp.com/`)

    setTimeout( async () => {
      
      let sendForm = await fetch(`https://amarc-api.herokuapp.com/api/send`, {
        method: "post",
        body: attachs || {},
        headers: ContactForm,
      });
      sendForm = await sendForm.json();
  
      console.log(sendForm);
  
      if (sendForm.success) {
        setForm({ name: "", email: "", message: "" });
        setActiveNeeds([]);
        setActiveDocs([]);
        setActiveBudg(-1);
        setAttachments([]);
        setShowThanks(true);
      }
  
      setSendingForm(false);

    }, 1000);

  };

  const checkFields = (sending = false) => {
    let inputCheck = true;

    if (!checkName()) {
      inputCheck = false;

      if (sending) setFormErr({ ...formErr, name: "Name field is empty" });
    }

    if (!checkEmail()) {
      inputCheck = false;
      if (sending) setFormErr({ ...formErr, email: "Email Not valid" });
    }

    return inputCheck;
  };

  const reEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const addAttachment = (e) => {
    console.log("adding attachment");
    console.log(e.target.files);

    if (attachments) {
      const fileNames = attachments.map(({ name }) => name);

      if (!fileNames.includes(e.target.files[0].name)) {
        setAttachments([...attachments, e.target.files[0]]);
      }
    } else setAttachments(e.target.files[0]);

    console.log(attachments);
  };

  const checkName = () => {
    if (form.name.length < 2) {
      return false;
    }
    return true;
  };

  const checkEmail = () => {
    if (!form.email || !reEmail(form.email.trim())) {
      return false;
    }
    return true;
  };

  const FocusedOut = (target) => {
    if (target === "name" && !checkName()) {
      setFormErr({
        ...formErr,
        name: "Invalid Name",
      });
    } else if (target === "email" && !checkEmail()) {
      setFormErr({
        ...formErr,
        email: "Invalid Email",
      });
    }
  };

  useEffect(() => {
    const isFormValid = checkFields();

    if (isFormValid && !formValid) setFormValid(true);
    else if (!isFormValid && formValid) setFormValid(false);
  }, [form]);

  return (
    <section
    data-scroll-container 
      className={`sec-form mb ${sendingForm ? "sending-form-effect" : ""} ${
        con ? "only-contact" : "brief"
      }`}
    >
      
      <Thanks show={showThanks} showToggle={() => setShowThanks(false)} />

      <h6>
        We are always <br />
        <span>
          happy to <p>help</p>
        </span>
      </h6>

      <div className="tabs-holder">
        <button
          className={`co-btn ${con === false ? "active" : ""}`}
          onClick={() => setCon(false)}
        >
          Send brief
        </button>

        <button
          className={`co-btn ${con === false ? "" : "active"}`}
          onClick={() => setCon(true)}
        >
          Contact us
        </button>
        <div className="backHolder"></div>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {con === false && (
          <div className="options-btns needs">
            <p>I need</p>
            {contactData.needs.map((val, idx) => (
              <SecondaryBtn
                txt={val}
                isActive={activeNeeds.includes(idx)}
                trigger={() => toggleNeedDoc("need", idx)}
                key={idx}
              />
            ))}
          </div>
        )}

        <div
          className="form-inputs"
          style={
            con === true
              ? { marginTop: 15 + "px", marginBottom: 64 + "px" }
              : null
          }
        >
          <div className="am-input">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={inputHandler}
              className={formErr.name ? "err" : ""}
              onBlur={() => FocusedOut("name")}
            />
            <div
              className="input-moving-line"
              // style={{ backgroundImage: getMovingLine('name') }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none"><path fill="none" stroke={ formErr['name'].length ? '#FFA029' :'#fff' } d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/></svg>
            </div>
          </div>

          <div className="am-input">
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              value={form.email}
              onChange={inputHandler}
              className={formErr.email ? "err" : ""}
              autoComplete="off"
              onBlur={() => FocusedOut("email")}
            />
            <div
              className="input-moving-line"
              // style={{ backgroundImage: getMovingLine('email') }}
            >

              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none"><path fill="none" stroke={ formErr['email'].length ? '#FFA029' :'#fff' } d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/></svg>
            
            </div>
          </div>

          <div className="am-input full-w">
            <textarea
              className="full-w"
              type="text"
              placeholder="About your project"
              name="message"
              value={form.message}
              onChange={textAreaChange}
            ></textarea>
            <div
              className="input-moving-line"
              style={{ backgroundImage: MLine }}
            ></div>
          </div>
        </div>

        <div className="att-btn">
          <label htmlFor="filename" ref={labelRef}></label>

          {con === true ? (
            <div className="contact-action">
              <SecondaryBtn
                isActive={false}
                trigger={() => {}}
                refrence={labelRef}
                primary={true}
              >
                {" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 17.009 17"
                  >
                    <g
                      id="attach-interface-clip-symbol"
                      transform="translate(12.524 -0.146)"
                    >
                      <g
                        id="Group_335"
                        data-name="Group 335"
                        transform="translate(-12.524 0.146)"
                      >
                        <path
                          id="Path_273"
                          data-name="Path 273"
                          d="M11.08,7.579a1.076,1.076,0,0,0,.047-1.6,1.149,1.149,0,0,0-1.647,0L8.056,7.4a3.476,3.476,0,0,0-.177,5.024,3.532,3.532,0,0,0,5.074-.127l2.4-2.4a5.664,5.664,0,0,0,0-8l-.1-.1a5.663,5.663,0,0,0-8,0l-5.6,5.6a5.664,5.664,0,0,0,0,8l.1.1a5.621,5.621,0,0,0,6.48,1.06c.585-.286,1.221-.829.8-1.59A1.175,1.175,0,0,0,7.4,14.529,3.952,3.952,0,0,1,3.351,13.9l-.1-.1a3.4,3.4,0,0,1,0-4.8l5.6-5.6a3.4,3.4,0,0,1,4.8,0l.1.1a3.4,3.4,0,0,1,0,4.8l-2.4,2.4a1.274,1.274,0,0,1-1.873.127A1.223,1.223,0,0,1,9.657,9Z"
                          transform="translate(0 -0.146)"
                        />
                      </g>
                    </g>
                  </svg>
                  Add attachment
                </span>
              </SecondaryBtn>

              {/* <Button style={btnStyle} text="Send" trigger={sendContactForm} /> */}

              {isMobile ? (
                <MButton
                  text="Send"
                  trigger={sendContactForm}
                  active={formValid && !sendingForm}
                />
              ) : (
                <Button
                  text="Send"
                  trigger={sendContactForm}
                  active={formValid && !sendingForm}
                  movable={false}
                />
              )}
            </div>
          ) : (
            <SecondaryBtn
              isActive={false}
              trigger={() => {}}
              refrence={labelRef}
              primary={true}
            >
              {" "}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.009 17">
                  <g
                    id="attach-interface-clip-symbol"
                    transform="translate(12.524 -0.146)"
                  >
                    <g
                      id="Group_335"
                      data-name="Group 335"
                      transform="translate(-12.524 0.146)"
                    >
                      <path
                        id="Path_273"
                        data-name="Path 273"
                        d="M11.08,7.579a1.076,1.076,0,0,0,.047-1.6,1.149,1.149,0,0,0-1.647,0L8.056,7.4a3.476,3.476,0,0,0-.177,5.024,3.532,3.532,0,0,0,5.074-.127l2.4-2.4a5.664,5.664,0,0,0,0-8l-.1-.1a5.663,5.663,0,0,0-8,0l-5.6,5.6a5.664,5.664,0,0,0,0,8l.1.1a5.621,5.621,0,0,0,6.48,1.06c.585-.286,1.221-.829.8-1.59A1.175,1.175,0,0,0,7.4,14.529,3.952,3.952,0,0,1,3.351,13.9l-.1-.1a3.4,3.4,0,0,1,0-4.8l5.6-5.6a3.4,3.4,0,0,1,4.8,0l.1.1a3.4,3.4,0,0,1,0,4.8l-2.4,2.4a1.274,1.274,0,0,1-1.873.127A1.223,1.223,0,0,1,9.657,9Z"
                        transform="translate(0 -0.146)"
                      />
                    </g>
                  </g>
                </svg>
                Add attachment
              </span>
            </SecondaryBtn>
          )}

          <input
            className="hd"
            type="file"
            id="filename"
            name="filename"
            onChange={addAttachment}
            multiple="multiple"
          />

          {attachments ? (
            <div className="attachs">
              {attachments.map(({ name }, idx) => (
                <div
                  className="attach"
                  key={idx}
                  onClick={() => removeAttach(idx)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}

          {/* {con === true ? (
            <Button style={btnStyle} text="Send" trigger={sendContactForm} />
          ) : null} */}
        </div>

        {con === false && (
          <div className="options-btns docs">
            <p>Documents I have</p>

            {contactData.docs.map((val, idx) => (
              <SecondaryBtn
                txt={val}
                isActive={activeDocs.includes(idx)}
                trigger={() => toggleNeedDoc("doc", idx)}
                key={idx}
              />
            ))}
          </div>
        )}

        {con === false && (
          <>
            <div className="options-btns budgets">
              <p>Budget (USD)</p>

              {contactData.budgets.map((val, idx) => (
                <SecondaryBtn
                  txt={val}
                  isActive={activeBudg === idx}
                  trigger={() => toggleNeedDoc("budg", idx)}
                  key={idx}
                />
              ))}
            </div>

            {isMobile ? (
              <MButton
                text="Send request"
                trigger={sendContactForm}
                exClass="con-lg-send"
                active={formValid && !sendingForm}
              />
            ) : (
              <Button
                text="Send request"
                trigger={sendContactForm}
                active={formValid && !sendingForm}
                movable={false}
              />
            )}
          </>
        )}
      </form>

      {isMobile ? (
        <MobileFooter tab={con} />
      ) : (
        <div className="con-info">
          <div>
            <h6>Call</h6>
            <p>+380 97 913 0636</p>
          </div>

          <div>
            <h6>Write</h6>
            <p>
              am@amarcs.com
              <br />
              Telegram
            </p>
          </div>

          <div>
            <h6>Office</h6>
            <p>Kyiv, Mechnykova St, Parus building, office 124</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Con;
