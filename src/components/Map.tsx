import GoogleMapReact, {
  ChangeEventValue,
  ClickEventValue,
} from "google-map-react";

interface BootstrapURLKeys {
  key: string;
}

const Map = () => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={
        { key: process.env.REACT_APP_GOOGLE_MAP_API_KEY } as BootstrapURLKeys
      }
      defaultCenter={{ lat: 0, lng: 0 }}
      defaultZoom={1}
      margin={[50, 50, 50, 50]}
      options={{}}
      onChange={(value: ChangeEventValue) => {
        // onChange 이벤트 핸들러 로직
      }}
      onChildClick={(value: ClickEventValue) => {
        // onChildClick 이벤트 핸들러 로직
      }}
    ></GoogleMapReact>
  );
};

export default Map;
