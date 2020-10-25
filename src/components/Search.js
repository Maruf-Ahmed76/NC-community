import React,{useState} from 'react'
import Header from './lib/Header';
import Footer from './lib/Footer';

const Search = () => {

    let [saveResults, setSaveResults] = useState(JSON.parse(localStorage.getItem("saveResult")));
    
    let handleClear = () => {
        localStorage.removeItem('saveResult');
        let updateSaveResult = JSON.parse(localStorage.getItem("saveResult"));
        setSaveResults(updateSaveResult);
    }

    return (
        <>
            <Header/>
            <div className="container search-query px-2 px-sm-3">
                <div className="search-result-table table-responsive-lg my-4">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Name of Community college</th>
                            <th scope="col">Course ID</th>
                            <th scope="col">Credit</th>
                            <th scope="col">Course description</th>
                            <th scope="col">Cost</th>
                            </tr>
                        </thead>
                        <tbody>

                        {
                            saveResults && saveResults.length > 0 ? saveResults.map (item => {
                                return (
                                    <tr key={item._id}>
                                        <th>{item.College}</th>
                                        <td>{`${item.CourseSubject} ${item.ClassID}`}</td>
                                        <td>{item.Credits}</td>
                                        <td>Course description</td>
                                        <td>$1000</td>
                                    </tr>

                                )
                            }):
                            (
                                <tr>
                                    <th>No Save Data</th>
                                </tr>
                            )
                        }

                        </tbody>
                    </table>
                </div>

                <div className="d-flex mb-5">
                    <button className="btn text-light bg-primary-custom mr-2" onClick={handleClear}>Clear</button>
                </div>
            </div>
            <Footer/>
            
        </>
    );
}

export default Search;