import React from 'react';
import Header from './lib/Header';
import Footer from './lib/Footer';

const About = () => {

    return (
        <>
            <Header/>

            <div className="px-2 px-sm-5">
                <p className="text-center">
                    If you find a couse you need, you can sign up at the NC community college offering it and have the credits transferred to yout community colege or university. Contact your advisor before you register for courses at another college
                </p>

                <h5 className="text-center mb-3 font-weight-bold">List of Community college</h5>

                <div class="community_college_list list-group w-75 mx-auto">
                    <a href="#" class="list-group-item list-group-item-action">Community college #1</a>
                    <a href="#" class="list-group-item list-group-item-action">Community college #2</a>
                    <a href="#" class="list-group-item list-group-item-action">Community college #3</a>
                    <a href="#" class="list-group-item list-group-item-action">Community college #4</a>
                    <a href="#" class="list-group-item list-group-item-action">Community college #5</a>
                    <a href="#" class="list-group-item list-group-item-action">Community college #6</a>
                </div>
            </div>

            <Footer/>
            
        </>
    );
}

export default About;