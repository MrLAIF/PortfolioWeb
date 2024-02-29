import { forwardRef, useState } from "react"
import ToDoAppimg from "../../images/ToDoApp.png"
import ecommerceimg from "../../images/ecommerce.png"
import expensetrackerimg from "../../images/expensetracker.png"
import catCode from "../../images/catcode.jpeg"
import "./ProjectSlider.css"
import ProjectItem from "../ProjectItem"

const black = "text-black";
const white = "text-white";

const cardsData = [
    {
      id: "c1",
      backgroundImage: ToDoAppimg,
      icon: "1",
      title: "ToDo App",
      description: "App to track your pending tasks",
      color: black,
    },
    {
      id: "c2",
      backgroundImage: ecommerceimg,
      icon: "2",
      title: "Model Eccommerce",
      description: "Model of an Amazon like webpage",
      color: black,
    },
    {
      id: "c3",
      backgroundImage: expensetrackerimg,
      icon: "3",
      title: "Expense Tracker",
      description: "Track all your expenses and earnings!",
      color: black,
    },
    {
      id: "c4",
      backgroundImage: catCode,
      icon: "4",
      title: "Coming soon...",
      description: "Building more projects",
      color: white,
    },
  ];

  
const ProjectsSection = ({},ref) => {
    const [selectedCard, setSelectedCard] = useState("c1");

  const handleChange = (e) => {
    setSelectedCard(e.target.id);
  };

  return (
    <div className="wrapper" ref={ref}>
        <h1 className="text-[40px] mb-10">Projects</h1>

      <div className="container-projects">
        {cardsData.map((card) => (
          <ProjectItem
            key={card.id}
            id={card.id}
            backgroundImage={card.backgroundImage}
            icon={card.icon}
            title={card.title}
            description={card.description}
            textColor={card.color}
            checked={selectedCard === card.id}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}

export default forwardRef(ProjectsSection)