import { useLocation, useNavigate } from "react-router-dom";
import { useGeolocation } from "../../hooks/useGeolocation";
import Button from "../../ui/Buttons/Button";
import { outOfMapRange } from "../../utils/helpers";
import { useMap } from "react-leaflet";
import { useCtxMap } from "../../context/mapContext";

const MapMyPosition = ({
  onClickOutRange,
}: {
  onClickOutRange: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { position: geoLocation, error } = useGeolocation();

  const location = useLocation();
  const navigate = useNavigate();
  const map = useMap();
  const { setZoomLevel, setMapPosition } = useCtxMap();

  if (location.pathname !== "/problems/add" || error) {
    return null;
  }

  return (
    <Button
      variation="info"
      size="large"
      style={{
        position: "absolute",
        top: "25px",
        left: "70px",
        zIndex: 1000000000,
      }}
      onClick={() => {
        setMapPosition(geoLocation as { lat: number; lng: number });
        // setGeoLocation(geoLocation);
        if (outOfMapRange(geoLocation as { lat: number; lng: number })) {
          onClickOutRange(true);
          return;
        }
        const zoom = 16;
        map.setView(geoLocation!, zoom, { animate: true });
        setZoomLevel(zoom);
        navigate(`?lat=${geoLocation?.lat}&lng=${geoLocation?.lng}`);
      }}
    >
      Moja lokacija
    </Button>
  );
};

export default MapMyPosition;
