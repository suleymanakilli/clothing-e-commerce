import React from 'react';
import MenuItem from '../menuItem/menuItem';
import { selectDirectorySections } from '../../redux/directory/directorySelector';
import { DirectoryMenuContainer } from './directoryStyle';
import { useSelector } from 'react-redux'

//redux hooks kullanarak yaptık
export default function Directory() {
    const sections = useSelector(state => selectDirectorySections(state))
    return (
        <DirectoryMenuContainer>
            {sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
            ))}
        </DirectoryMenuContainer>
    );
}
/*const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);*/


