import { useParams } from "react-router-dom";
import letters from '../assets/letters';
import './LetterDetails.css';

const LetterDetails = () => {
    const { id } = useParams();
    const letter = letters[id];

    return (
        <div
            className="card text-black rounded"
            style={{
                width: "auto",
                minHeight: '200px',
                backgroundColor: "#ffb6c1",
            }}
        >
            <div className="card-body m-4">
                <h5 className="card-title">{letter.title}</h5>
                <p className="card-text letter-content">{letter.content}</p>
            </div>
        </div>
    );
}

export default LetterDetails;