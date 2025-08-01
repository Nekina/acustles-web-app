import letters from '../assets/letters';
import { useNavigate } from "react-router-dom";

const LettersList = () => {
    const navigate = useNavigate();
    const handleCardClick = (index) => {
        navigate(`/letters/${index}`);
    };

    return (
        <div>
            <h1>Letters</h1>
            <div className="row justify-content-center">
                {letters.map((letter, index) => (
                    <div key={index} className="card rounded m-3 text-white" style={{ width: '18rem', backgroundColor: '#ffb6c1' }}>
                        <div className="card-body" onClick={() => handleCardClick(index)} style={{ cursor: "pointer" }}>
                            <h5 className="card-title fw-bold">{letter.title}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LettersList;
