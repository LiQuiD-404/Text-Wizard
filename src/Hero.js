import React from 'react'

export default function Hero(props) {
  return (
    <div>
       <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" id='logo' src="./logo512.png" alt="" height="207" />
    <h1 className="display-5 fw-bold" id='title-hero'>{props.title}</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4 ">Welcome to TextWizard 🧙‍♂️, the ultimate online text manipulation hub where your words become magic! With TextWizardry, you hold the power to transform your text in ways you've never imagined. Simply paste your text into our enchanting interface and watch as it morphs into various forms at your command. Effortlessly convert your text to uppercase, lowercase, or toggle case to suit your desired style. Tame unruly spaces with a flick of your wand and remove those pesky extra gaps. Explore our spellbinding features to capitalize sentences, invert text, add prefixes or suffixes, and much more. TextWizardry is your trusted companion for creating captivating content, refining your writing, and unleashing the full potential of your text. Embrace the magic of words with TextWizardry and let your text journey begin!</p>
    </div>
  </div>
    </div>
  )
}
