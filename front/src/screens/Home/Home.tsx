import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { Loader } from '../../components/Loader/Loader';
import { StationItem } from '../../components/StationItem/StationItem';
import { Station } from '../../types/station';
import { LogoutButton } from '../../components/LogoutButton/LogoutButton';
import { fetchStations, selectStations, selectLoading, selectError } from '../../slices/stationsSlice';


export const Home = () => {
  const REFRESH_INTERVAL = 60000; 
  const dispatch: AppDispatch = useDispatch()
  const email = useSelector((state: RootState) => state.auth.user?.email);
  const stations = useSelector(selectStations);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchStations());
    
    const intervalId = setInterval(() => {
      dispatch(fetchStations());
    }, REFRESH_INTERVAL);
    console.log(stations)

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const renderItem = ({ item }: { item: Station }) => <StationItem item={item} />;

  const renderLoader = () => {
    return loading ? <Loader /> : null;
  };

  const loadMoreStations = () => {
    if (!loading) {
      dispatch(fetchStations());
    }
  };

  return (
    <>
      <LogoutButton />
      <Text>Welcome {email}!</Text>
      {error ? (<Text>{error}</Text>) : (
        <FlatList
        data={stations}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
        onEndReached={loadMoreStations}
        onEndReachedThreshold={0}
        ListFooterComponent={renderLoader}
      />
      )}
    </>
  );
};