import stationsModel, { Station } from '@models/stations.model';

// ideally: implementing pagination as provided by the MongoDB documentation:
/*
function printStudents(startValue, nPerPage) {
  let endValue = null;
  db.students.find( { _id: { $lt: startValue } } )
             .sort( { _id: -1 } )
             .limit( nPerPage )
             .forEach( student => {
               print( student.name );
               endValue = student._id;
             } );

  return endValue;

  
*/

class StationsService {
  public async findAllStations(): Promise<Station[]> {
    const stations: Station[] = await stationsModel.find();

    return stations;
  }
}

export default StationsService;
