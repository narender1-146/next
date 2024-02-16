import { useRouter } from 'next/router';
import { NextPage } from 'next';

const ItemDetails: NextPage = () => {
  const router = useRouter();
  const { id } = router.query; 
  return <div>Details for item {id}</div>;
};

export default ItemDetails;
