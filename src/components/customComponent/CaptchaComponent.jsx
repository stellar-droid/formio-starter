import React, { useState, useEffect } from 'react';

const CaptchaComponent = () => {
  const [captchaCode, setCaptchaCode] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(true);

  useEffect(() => {
    createCaptcha();
  }, []);

  const createCaptcha = () => {
    const charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lengthOtp = 6;
    let captcha = '';

    for (let i = 0; i < lengthOtp; i++) {
      const index = Math.floor(Math.random() * charsArray.length);
      captcha += charsArray[index];
    }

    setCaptchaCode(captcha);
  };

  const validateCaptcha = () => {
    if (userInput === captchaCode) {
      setIsCaptchaValid(true);
      alert("Valid Captcha");
    } else {
      setIsCaptchaValid(false);
      alert("Invalid Captcha. Try Again");
      createCaptcha();
    }
  };

  return (
    <div className="captchaBox">
      <div style={{ display: 'flex', gap: '5px', fontSize: '25px' }}>
        {captchaCode.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        <button className="reloadBtn" onClick={createCaptcha}>Reload</button>
      </div>
      <input 
        type="text" 
        className="inputBox" 
        placeholder="Enter the image Text" 
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <br />
      <button className="submitBtn" onClick={validateCaptcha}>Submit</button>
      {!isCaptchaValid && <p style={{ color: 'red' }}>Invalid Captcha. Try Again</p>}
    </div>
  );
};

export default CaptchaComponent;
