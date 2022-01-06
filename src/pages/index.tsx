import { Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useQuery } from 'react-query'
import { getProducts } from 'services/productsApi'
import { Layout } from 'templates/Layout'
const Home = () => {
  // const { data, isLoading } = useQuery('products', getProducts)
  // return (
  //   <>
  //     <h1>Hello Cris</h1>
  //     {isLoading && <CircularProgress />}
  //     {data &&
  //       data.map((item) => {
  //         return <li key={item.id}>{item.title}</li>
  //       })}
  //     <Button color="primary">Test</Button>
  //   </>
  // )
  return <Layout>Container</Layout>
}

export default Home
