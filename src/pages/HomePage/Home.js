import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree} from './Data'
import { InfoSection, Projects } from '../../components';

const Home = () => {
    return (
        <>
        <InfoSection {...homeObjOne} />             
        <InfoSection {...homeObjTwo} />
        <Projects />             
        <InfoSection {...homeObjThree} />             
        </>
    )
};

export default Home;