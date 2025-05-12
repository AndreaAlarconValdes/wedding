import DropdownItem from "../components/DropdownItem"
import "./Questions.css"

const Questions = () => {
  return (
    <div className="questions-container">
      <h4>Questions & Answers</h4>
      <img src="./globes.png" alt="globes" className="globes" />
      <DropdownItem
        question="Can children attend?"
        answer="Yes, children are welcome! We'd love for the little ones to join in the celebration."
      />
       <DropdownItem
        question="What is the dress code?"
        answer="The dress code is semi-formal. We recommend cocktail attire, and feel free to add a touch of elegance!"
      />
       <DropdownItem
        question="What time should I arrive?"
        answer="Please arrive 15–20 minutes before the ceremony starts so you have time to get seated and settled."
      />
       <DropdownItem
        question="Is there parking available?"
        answer="Yes, free parking is available at the venue."
      />
       <DropdownItem
        question="What food will be served? Are there vegetarian or allergy-friendly options?"
        answer="A full dinner will be served, including vegetarian and allergy-friendly options. Please let us know of any dietary needs in advance."
      />
    </div>
  )
}

export default Questions
