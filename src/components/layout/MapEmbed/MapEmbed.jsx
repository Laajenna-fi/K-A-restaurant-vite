import "./MapEmbed.css";

const MapEmbed = () => (
  <div className="map-embed">
    <div className="map-embed__inner">
      <iframe
        title="K&A Ravintola Latokaski"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4558.718467304285!2d24.65226640900712!3d60.175809564292734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df3813101bccf%3A0xdab7e21ed98a43ab!2sK%26A%20Ravintola%20Latokaski%20%3A%20Pizza%2C%20Pasta%20ja%20paljon%20muuta*21!5e0!3m2!1sen!2sfi!4v1771966256464!5m2!1sen!2sfi"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  </div>
);

export default MapEmbed;
