
const ProjectItem = ({ id, backgroundImage, icon, title, description, textColor, checked, onChange }) => {
    return (
        <>
            <label htmlFor={id} className= {`card ${checked ? "w-[600px]" : "" }`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="row">
                <div className="icon">{icon}</div>
                <div className={`description z-20 ${textColor} ${checked ? "text-appear" : undefined}`}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
            <input type="radio" name="slide" id={id} checked={checked} onChange={onChange} />
            </label>
        </>
      );
}

export default ProjectItem