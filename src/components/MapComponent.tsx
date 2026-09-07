// Google Maps embed for the Starboard Realtors office location.
// The classic ?output=embed URL needs no API key and renders everywhere.
export default function MapComponent() {
  return (
    <iframe
      title="Starboard Realtors office location map"
      src="https://www.google.com/maps?q=Starboard+Realtors,+Raichandani+Galaxy,+201,+beside+Croma+Store,+Baner,+Pune,+Maharashtra+411045&z=16&output=embed"
      className="h-full w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
