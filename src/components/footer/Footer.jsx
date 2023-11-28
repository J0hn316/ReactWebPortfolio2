import '../footer/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>&copy; John C.Wrimene {currentYear}</p>
    </div>
  );
}
