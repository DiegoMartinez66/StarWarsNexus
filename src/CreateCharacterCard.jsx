import 'bulma/css/bulma.min.css';

const CreateCharacterCard = ({ results }) => {
    return (<div id="content" className="columns is-multiline is-centered m-6">
        {results.map((result) => (
            <div className="column is-half-desktop is-full-mobile" key={result.name}>

                <img src={result.image} alt={result.name} className="image is-2by1 is-centered"/>
                
                <div>
                    <h2 className="title is-2 has-text-warning has-text-centered m-3">{result.name}</h2>
                    <p className="subtitle is-4 has-text-warning has-text-centered m-3">{result.description}</p>
                </div>
            </div>
        ))}
    </div>
    )
};

export default CreateCharacterCard;