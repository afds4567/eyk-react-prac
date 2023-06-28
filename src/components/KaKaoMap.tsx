import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KaKaoMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표
        level: 3, //지도 확대 레벨
      };
      const map = new window.kakao.maps.Map(mapContainer.current, options);
    });
  }, []);

  return (
    <div
      id="map"
      ref={mapContainer}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default KaKaoMap;
