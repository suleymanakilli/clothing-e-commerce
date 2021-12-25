import React, { Profiler } from 'react'
import Directory from '../../components/directory/directory'
import { HomePageContainer } from './homePageStyle'
export default function homePage() {
    return (
        <HomePageContainer>
            <Profiler id="Directory" onRender={(id, phase, actualDuration) => {
                console.log({
                    id,
                    phase,
                    actualDuration
                })
            }}>
                <Directory />
            </Profiler>

        </HomePageContainer>
    )
}
