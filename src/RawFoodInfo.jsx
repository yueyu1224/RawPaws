import React, { useState } from 'react';
import './styles/RawFoodInfo.css';

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </button>
      {isOpen && <div className="accordion-answer">{answer}</div>}
    </div>
  );
}

function RawFoodInfo() {
  return (
    <div className="raw-food-info">
      <h2>Raw Food Information</h2>      
      <p>The raw food diet for pets, often referred to as the BARF diet (Biologically Appropriate Raw Food or Bones and Raw Food), is based on fresh, raw ingredients that aim to provide a more natural eating experience. Proponents of the diet suggest that it can lead to shinier coats, healthier skin, improved dental health, and higher energy levels.</p>
      
      <p>Many supporters of raw feeding believe that because this diet is closer to what animals would eat in the wild, it contributes to a more robust digestive system. The natural enzymes in raw food are also thought to help pets absorb nutrients more effectively, leading to improved overall health.</p>
      
      <h3>Frequently Asked Questions</h3>
      <Accordion 
        question="What are the main components of a raw food diet for pets?" 
        answer="A balanced raw food diet typically includes muscle meat, bone, organ meats, raw eggs, vegetables, and fruits. It's important to ensure that the diet is nutritionally balanced according to your pet's needs." 
      />
      <Accordion 
        question="Can all pets switch to a raw food diet?" 
        answer="While many pets can benefit from a raw food diet, it's not suitable for all. Pets with certain health conditions or those with a compromised immune system should consult with a veterinarian before making any diet changes." 
      />
      <Accordion 
        question="How do I transition my pet to a raw food diet safely?" 
        answer="Transitioning to a raw food diet should be done gradually. Start by mixing small amounts of raw food with their current food, and gradually increase the proportion of raw food over time. Monitoring your pet's health and adjusting portions based on their reaction is crucial." 
      />
      <Accordion 
        question="Is raw food safe from bacteria and parasites?" 
        answer="Raw food can contain bacteria and parasites that are harmful to pets and humans. High-quality commercial raw food diets undergo processes to eliminate these pathogens. If preparing raw meals at home, use proper handling and storage techniques to minimize risks." 
      />
      <Accordion 
        question="How can I balance my pet's raw diet?" 
        answer="Balancing a raw diet requires a good understanding of your pet’s nutritional needs. It's often recommended to consult a veterinarian or a pet nutritionist. Supplements may be necessary to provide all the essential nutrients that raw food alone might not offer." 
      />
    </div>
  );
}

export default RawFoodInfo;
