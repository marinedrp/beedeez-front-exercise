import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Loader} from '../../components/Loader/Loader';
import {StationItem} from '../../components/StationItem/StationItem';
import {Station} from '../../types/station';
import api from '../../services/api';
import {LogoutButton} from '../../components/LogoutButton/LogoutButton';

export const HomeCopy = () => {
  const PAGE_SIZE = 30;
  const [stations, setStations] = useState<Station[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchStations();
  }, [currentPage]);

  const fetchStations = async () => {
    setIsLoading(true);

    try {
      const endIndex = currentPage * PAGE_SIZE;
      const response = await api.get('/stations');
      setStations(prevStations => [
        ...prevStations,
        ...response.data.data.slice(0, endIndex),
      ]);
      setIsLoading(false);
    } catch (error: any) {
      console.error(error);
    }
  };

  const fetchNextPage = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  };

  const renderLoader = () => {
    return isLoading ? <Loader /> : null;
  };

  const renderItem = ({item}: {item: Station}) => <StationItem item={item} />;

  return (
    <>
      <LogoutButton />
      <FlatList
        data={stations}
        renderItem={renderItem}
        keyExtractor={item => item.stationCode.toString()}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0}
        ListFooterComponent={renderLoader}
      />
    </>
  );
};
