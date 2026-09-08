import { useState, useEffect } from 'react'
import { loadData } from './ajax.js';
import { loadDataFromStorage, saveDataToFile } from "./storage.js";
import CreateCharacterCard from './CreateCharacterCard.jsx';
import { createLink } from './CreateLink.js';
import 'bulma/css/bulma.min.css';

const NexusSearchUI = () => {
    const savedPage = loadDataFromStorage("currentPage");
    const savedSearchTerm = loadDataFromStorage("searchTerm");
    const savedSearchType = loadDataFromStorage("searchType");
    const savedSearchLimit = loadDataFromStorage("searchLimit");

    const [limit, setLimit] = useState(savedSearchLimit || 5);
    const [type, setType] = useState(savedSearchType || 'characters');
    const [searchTerm, setSearchTerm] = useState(savedSearchTerm || '');
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(savedPage || 1);

    useEffect(() => {
        saveDataToFile("currentPage", currentPage);
        saveDataToFile("searchTerm", searchTerm);
        saveDataToFile("searchType", type);
        saveDataToFile("searchLimit", limit);
    }, [currentPage, searchTerm, type, limit]);

    const HandleSearch = async () => {
        let url = createLink({ term: searchTerm, type, limit, page: currentPage });

        const data = await loadData(url);

        setSearchResults(data.data);
    };

    return (
        <div>

            <div className="is-flex is-align-items-center is-justify-content-center">

                <select className="select m-5 has-background-warning" name="limit" id="limit" value={limit} onChange={(e) => {
                    setLimit(parseInt(e.target.value));
                    setCurrentPage(1);
                }}>
                    <option value="5" className="has-text-white is-size-4 has-text-weight-bold">5</option>
                    <option value="10" className="has-text-white is-size-4 has-text-weight-bold">10</option>
                    <option value="15" className="has-text-white is-size-4 has-text-weight-bold">15</option>
                    <option value="20" className="has-text-white is-size-4 has-text-weight-bold">20</option>
                    <option value="25" className="has-text-white is-size-4 has-text-weight-bold">25</option>
                </select>


                <select className="select m-5 has-background-warning" name="type" id="type" value={type} onChange={(e) => {
                    setType(e.target.value);
                    setCurrentPage(1);
                }}>
                    <option value="characters" className="has-text-white is-size-5 has-text-weight-bold">Characters</option>
                    <option value="creatures" className="has-text-white is-size-5 has-text-weight-bold">Creatures</option>
                    <option value="droids" className="has-text-white is-size-5 has-text-weight-bold">Droids</option>
                    <option value="locations" className="has-text-white is-size-5 has-text-weight-bold">Locations</option>
                    <option value="organizations" className="has-text-white is-size-5 has-text-weight-bold">Factions</option>
                    <option value="species" className="has-text-white is-size-5 has-text-weight-bold">Species</option>
                    <option value="vehicles" className="has-text-white is-size-5 has-text-weight-bold">Vehicles</option>
                </select>

                <div className="columns is-centered mt-3">
                    <div className="column is-two-thirds">
                        <div className="control">
                            <input className="input has-background-warning has-text-black" type="text" placeholder="Search.." id="search" value={searchTerm} onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }} />
                        </div>
                    </div>
                </div>

                <button className="button is-warning ml-4" id="SearchButton" onClick={HandleSearch}>Search</button>
            </div>

            <div className="is-flex is-align-items-center is-justify-content-center mt-5 control">
                <button className="button is-warning mr-4" id="previous" onClick={() => {
                    setCurrentPage(currentPage - 1);
                    HandleSearch();
                }}>Previous Page</button>
                <button className="button is-warning ml-4" id="next" onClick={() => {
                    setCurrentPage(currentPage + 1);
                    HandleSearch();
                }}>Next Page</button>
            </div>

            <CreateCharacterCard results={searchResults} />

        </div>
    );
};

export default NexusSearchUI;