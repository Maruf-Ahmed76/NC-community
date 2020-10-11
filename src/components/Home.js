import React,{useState} from 'react';
import Header from './lib/Header';
import Footer from './lib/Footer';

const Home = () => {
    let [courseId, setCourseId] = useState('');
    let [academicYear, setAcademicYear] = useState('2020');
    let [semester, setSemester] = useState('fall');
    let [courseType, setCourseType] = useState('online');

    return (
        <>
            <Header/>


            <div className="d-flex flex-column justify-content-center align-items-center px-2 px-sm-5">

                <h2 className="text-center font-weight-bold">
                    Search available course from NC community colleges.
                </h2>
                
                <h5 className="text-center mb-3">Please enter the following information to get start</h5>
                
                <div className="form-group row w-75">
                    <label htmlFor="courseId" className="col-sm-4 col-form-label">Course ID</label>
                    <div className="col-sm-8">
                        <input className="form-control" id="courseId" name="courseId" value={courseId} onChange={e => setCourseId(e.target.value)}/>
                    </div>
                </div>

                <div className="form-group row w-75">
                    <label htmlFor="academicYear" className="col-sm-4 col-form-label">Academic year</label>
                    <div className="col-sm-8">
                        <select id="academicYear" name="academicYear" className="form-control" value={academicYear} onChange={e => setAcademicYear(e.target.value)}>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row w-75">
                    <label htmlFor="semester" className="col-sm-4 col-form-label">Semester</label>
                    <div className="col-sm-8">
                        <select id="semester" name="semester" className="form-control" value={semester} onChange={e => setSemester(e.target.value)}>
                            <option value="summer">Summer</option>
                            <option value="fall">Fall</option>
                            <option value="winter">Winter</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row w-75">
                    <label htmlFor="courseType" className="col-sm-4 col-form-label">Type of course</label>
                    <div className="col-sm-8">
                        <select id="courseType" name="courseType" className="form-control" value={courseType} onChange={e => setCourseType(e.target.value)}>
                            <option value="online">Online</option>
                            <option value="ofline">Ofline</option>
                        </select>
                    </div>
                </div>
                
                <button className="btn mt-3 btn-outline-dark">Search</button>

            </div>

            <Footer/>
            
        </>
    );
}

export default Home;