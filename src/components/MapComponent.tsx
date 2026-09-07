// Google Maps embed for the Starboard Realtors office location.
// The classic ?output=embed URL needs no API key. A CSS invert+hue-rotate
// filter turns the light tiles dark while keeping label colors readable;
// the filter lives on the iframe only, so page content stays untouched.
export default function MapComponent() {
  return (
    <iframe
      title="Starboard Realtors office location map"
      src="https://www.google.com/maps?q=Starboard+Realtors,+Raichandani+Galaxy,+201,+beside+Croma+Store,+Baner,+Pune,+Maharashtra+411045&z=16&output=embed"
      className="h-full w-full border-0 [filter:invert(1)_hue-rotate(180deg)_brightness(0.92)_contrast(0.92)_saturate(0.7)]"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
