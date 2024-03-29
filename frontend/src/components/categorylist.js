
import react from 'react-bootstrap'
const Category = () => {

    const dispatch = useDispatch()
  
    const productList = useSelector((state) => state.productList)
    const { loading, error, products} = productList
  
  
    useEffect(() => {
      dispatch(listProducts())
    },[dispatch])
  
    
      return (
          <>
          <h1>Bestsellers</h1>
          {loading ? (
            <Loader/>
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) :  (
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
          
          </>
      )
  }
  
  export default Category