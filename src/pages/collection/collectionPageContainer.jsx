import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelector'
import WithSpinner from '../../components/withSpinner/withSpinner'
import CollectionPage from './collectionPage'
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
    /*Başına ünlem koymamızın sebebi
                    collections eğer null ise !!null false döndürecek. Ama eğer collection null ise spinnerın çalışmasını istiyoruz.
                    Spinner ise sadece isLoading true olduğunda çalışacak
                    */
})


const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)
//It's same thing as
//connect(mapStateToProps)(WithSpinner(CollectionsOverview))

export default CollectionPageContainer