import Header from '../../components/Header';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

//const useUser = () => ({ user: null, loading: false });

const Dashboard = () => {
    const router = useRouter();

    const user = false;
    if (!user) router.push('/login');

    // const { user, loading } = useUser();

    // useEffect(() => {
    //   if (!(user || loading)) {
    //     router.push("/login");
    //   }
    // }, [user, loading, router]);

    return <>{(user && <Header />) || <>Redirecting...</>}</>;
};

export default Dashboard;
