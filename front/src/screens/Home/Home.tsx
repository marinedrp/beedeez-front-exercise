import {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import {Loader} from '../../components/Loader/Loader';
import {StationItem} from '../../components/StationItem/StationItem';
import {Station} from '../../types/station';
import {LogoutButton} from '../../components/LogoutButton/LogoutButton';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import {
  fetchStations,
  selectStations,
  selectLoading,
} from '../../slices/stationsSlice';

export const Home = () => {
  const REFRESH_INTERVAL = 120000;
  const dispatch: AppDispatch = useDispatch();
  const email = useSelector((state: RootState) => state.auth.user?.email);
  const stations = useSelector(selectStations);
  const loading = useSelector(selectLoading);
  const [itemsToShow, setItemsToShow] = useState(10);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    dispatch(fetchStations());

    const intervalId = setInterval(() => {
      dispatch(fetchStations());
    }, REFRESH_INTERVAL);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const renderItem = ({item}: {item: Station}) => <StationItem item={item} />;

  const renderLoader = () => {
    return loading ? <Loader /> : null;
  };

  const loadMoreStations = () => {
    if (!loading && hasMoreItems) {
      setItemsToShow(prevItemsToShow => {
        const newItemsToShow = prevItemsToShow + 10;
        if (newItemsToShow >= stations.length) {
          setHasMoreItems(false);
        }
        return newItemsToShow;
      });
    }
  };

  const filteredStations = stations.filter(station =>
    station.name.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  return (
    <>
      <LogoutButton />
      <Text>Welcome {email}!</Text>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <FlatList
        data={filteredStations.slice(0, itemsToShow)}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        onEndReached={loadMoreStations}
        onEndReachedThreshold={0}
        ListFooterComponent={renderLoader}
        ListEmptyComponent={<Text>No stations available.</Text>}
      />
    </>
  );
};