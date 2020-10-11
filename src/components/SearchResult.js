import React from 'react';
import Header from './lib/Header';
import Footer from './lib/Footer';

const SearchResult = () => {

    return (
        <>
            <Header/>

                <div className="search-query px-2 px-sm-3">
                    <h5 className="font-weight-bold text-center mb-3">Show search result for:</h5>
                    <div className="row">
                        <div className="col-6 mb-3 mb-md-0 col-md-3">
                            <p className="text-center">Course id</p>
                            <input type="text" value="CSC" className="form-control" readOnly/>
                        </div>

                        <div className="col-6 mb-3 mb-md-0 col-md-3">
                            <p className="text-center">Acedemic year</p>
                            <input type="text" value="2020" className="form-control" readOnly/>
                        </div>

                        <div className="col-6 mb-3 mb-md-0 col-md-3">
                            <p className="text-center">Semester</p>
                            <input type="text" value="Fall" className="form-control" readOnly/>
                        </div>

                        <div className="col-6 mb-3 mb-md-0 col-md-3">
                            <p className="text-center">Type of course</p>
                            <input type="text" value="Online" className="form-control" readOnly/>
                        </div>
                    </div>

                    <div class="search-result-table table-responsive-lg my-4">
                        <table class="table">
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
                                <tr>
                                    <th>Community college #1</th>
                                    <td>CSC 111</td>
                                    <td>12</td>
                                    <td>Course description</td>
                                    <td>$1000</td>
                                </tr>

                                <tr>
                                    <th>Community college #1</th>
                                    <td>CSC 111</td>
                                    <td>12</td>
                                    <td>Course description</td>
                                    <td>$1000</td>
                                </tr>

                                <tr>
                                    <th>Community college #1</th>
                                    <td>CSC 111</td>
                                    <td>12</td>
                                    <td>Course description</td>
                                    <td>$1000</td>
                                </tr>

                                <tr>
                                    <th>Community college #1</th>
                                    <td>CSC 111</td>
                                    <td>12</td>
                                    <td>Course description</td>
                                    <td>$1000</td>
                                </tr>

                                <tr>
                                    <th>Community college #1</th>
                                    <td>CSC 111</td>
                                    <td>12</td>
                                    <td>Course description</td>
                                    <td>$1000</td>
                                </tr>

                                <tr>
                                    <th>Community college #1</th>
                                    <td>CSC 111</td>
                                    <td>12</td>
                                    <td>Course description</td>
                                    <td>$1000</td>
                                </tr>

                                <tr>
                                    <th>Community college #1</th>
                                    <td>CSC 111</td>
                                    <td>12</td>
                                    <td>Course description</td>
                                    <td>$1000</td>
                                </tr>

                                <tr>
                                    <th>Community college #1</th>
                                    <td>CSC 111</td>
                                    <td>12</td>
                                    <td>Course description</td>
                                    <td>$1000</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>
            <Footer/>
            
        </>
    );
}

export default SearchResult;