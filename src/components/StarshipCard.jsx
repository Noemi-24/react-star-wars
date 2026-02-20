import {Link} from 'react-router-dom';

function StartshipCard({name, url}){
    const id = url.split('/').filter(Boolean).pop();
    console.log(id);
    return(
        <Link to={`/starships/${id}/`}>
            <div className="ship-card">
                <p className="text-name">{name}</p>
            </div>
        </Link>        
    );
}

export default StartshipCard;